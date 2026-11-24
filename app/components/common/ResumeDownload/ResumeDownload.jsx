'use client';

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
    <aside className="portfolio-floating-actions" aria-label="Availability, resume, and booking">
      <div className="portfolio-availability"><AvailabilityBadge label="Open to frontend roles" /></div>
      <details ref={downloadRef} className="resume-download" onKeyDown={event => {
        if (event.key === 'Escape') {
          event.currentTarget.open = false;
          event.currentTarget.querySelector('summary')?.focus();
        }
      }}>
        <summary className="side-action resume-download-trigger" aria-label="Download resume">
          <span className="side-action-icon"><FiFileText aria-hidden="true" /><FiDownload className="side-action-badge" aria-hidden="true" /></span><span>Resume</span>
        </summary>
        <Card className="resume-download-options">
          <p>Choose a format</p>
          <a href="/resume/Manasa_Resume.pdf" download onClick={closeDownloads}><FiFileText aria-hidden="true" /><span>PDF <small>Ready to view or print</small></span><FiDownload aria-hidden="true" /></a>
          <a href="/resume/Manasa_Resume.docx" download onClick={closeDownloads}><FiFileText aria-hidden="true" /><span>Word / DOCX <small>Editable document</small></span><FiDownload aria-hidden="true" /></a>
        </Card>
      </details>
      <a href="#contact" className="side-action portfolio-book-call"><span className="side-action-icon"><FiCalendar aria-hidden="true" /><FiArrowUpRight className="side-action-badge" aria-hidden="true" /></span><span>Book a call</span></a>
    </aside>
  );
}
