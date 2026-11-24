'use client';

import { useEffect, useState } from 'react';
import { FiUsers } from 'react-icons/fi';
import './VisitorCount.scss';

let visitRequest;
function recordVisit() {
  if (!visitRequest) {
    visitRequest = (async () => {
      let visitorId;
      try {
        visitorId = localStorage.getItem('vault-visitor-id');
        if (!visitorId || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(visitorId)) {
          visitorId = crypto.randomUUID();
          localStorage.setItem('vault-visitor-id', visitorId);
        }
      } catch { return null; }
      const response = await fetch('/api/visitors', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visitorId }), cache: 'no-store' });
      if (!response.ok) return null;
      return response.json();
    })().catch(() => null);
  }
  return visitRequest;
}
export default function VisitorCount() {
  const [count, setCount] = useState(null);
  useEffect(() => {
    let current = true;
    recordVisit().then(result => {
      if (current && result?.enabled && Number.isSafeInteger(result.count) && result.count >= 0) setCount(result.count);
    });
    return () => { current = false; };
  }, []);
  if (count === null) return null;
  return <span className="visitor-count" title="Distinct browsers since tracking started. Repeat visits from the same browser are counted once."><FiUsers aria-hidden="true" /><strong>{count.toLocaleString('en-US')}</strong> {count === 1 ? 'visitor' : 'visitors'}</span>;
}
