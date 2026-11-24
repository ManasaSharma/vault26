'use client';

import { copy } from '@/lib/content';

import { useEffect, useRef } from 'react';
import { FiArrowUpRight, FiCalendar, FiDownload, FiFileText } from 'react-icons/fi';
import Card from '@/components/common/Card';
import AvailabilityBadge from '@/components/common/AvailabilityBadge/AvailabilityBadge';
import './ResumeDownload.scss';

export default function ResumeDownload() {
  const downloadRef = useRef(null);

  useEffect(() => {
    function dismissOutside(event) {
      const details = downloadRef.current;
      if (details?.open && !details.contains(event.target)) details.open = false;
    }
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('focusin', dismissOutside);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('focusin', dismissOutside);
    };
  }, []);

  function closeDownloads() {
    if (downloadRef.current) downloadRef.current.open = false;
  }

  return (
    <aside className="portfolio-floating-actions" aria-label={copy.actions.label}>
      <div className="portfolio-availability"><AvailabilityBadge label={copy.actions.availability} /></div>
      <details ref={downloadRef} className="resume-download" onKeyDown={event => {
        if (event.key === 'Escape') {
          event.currentTarget.open = false;
          event.currentTarget.querySelector('summary')?.focus();
        }
      }}>
        <summary className="side-action resume-download-trigger" aria-label={copy.actions.downloadLabel}>
          <span className="side-action-icon"><FiFileText aria-hidden="true" /><FiDownload className="side-action-badge" aria-hidden="true" /></span><span>{copy.actions.resume}</span>
        </summary>
        <Card className="resume-download-options">
          <p>{copy.actions.chooseFormat}</p>
          <a href={copy.actions.pdfUrl} download onClick={closeDownloads}><FiFileText aria-hidden="true" /><span>{copy.actions.pdf} <small>{copy.actions.pdfDescription}</small></span><FiDownload aria-hidden="true" /></a>
          <a href={copy.actions.wordUrl} download onClick={closeDownloads}><FiFileText aria-hidden="true" /><span>{copy.actions.word} <small>{copy.actions.wordDescription}</small></span><FiDownload aria-hidden="true" /></a>
        </Card>
      </details>
      <a href="#contact" className="side-action portfolio-book-call"><span className="side-action-icon"><FiCalendar aria-hidden="true" /><FiArrowUpRight className="side-action-badge" aria-hidden="true" /></span><span>{copy.actions.bookCall}</span></a>
    </aside>
  );
}
