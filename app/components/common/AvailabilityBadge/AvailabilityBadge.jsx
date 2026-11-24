'use client';

import { useId } from 'react';
import './AvailabilityBadge.scss';

export default function AvailabilityBadge({ profile, label }) {
  const circleId = useId();
  const status = label ?? profile?.status ?? 'Open to work';
  return (
      <div className="availability-badge" role="img" aria-label={status}>
        <svg viewBox="0 0 100 100" className="availability-ring" aria-hidden="true"><defs><path id={circleId} d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" /></defs><text><textPath href={`#${circleId}`} textLength="230" lengthAdjust="spacing" startOffset="0%">{status} • </textPath></text></svg>
        <span className="availability-center" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" /></svg></span>
      </div>
  );
}
