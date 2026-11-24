'use client';

import { useEffect } from 'react';
import './CursorGlow.scss';

// Paint only on surfaces under the pointer; React does not rerender on mouse movement.
export default function CursorGlow() {
  useEffect(() => {
    const preference = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const selector = '.portfolio-main, .ui-card, .header, .skeleton-footer';
    const decorated = new Set();
    let active = new Set();
    let frame;
    let point;

    function hide() {
      cancelAnimationFrame(frame);
      active.forEach(node => node.style.setProperty('--cursor-glow-visible', '0'));
      active = new Set();
    }
    function paint() {
      if (!point || !preference.matches) return hide();
      const next = new Set();
      let node = point.target;
      while (node instanceof Element) {
        if (node.matches(selector)) {
          const bounds = node.getBoundingClientRect();
          node.classList.add('cursor-glow-surface');
          node.style.setProperty('--cursor-glow-x', `${point.x - bounds.left}px`);
          node.style.setProperty('--cursor-glow-y', `${point.y - bounds.top}px`);
          node.style.setProperty('--cursor-glow-visible', '1');
          decorated.add(node);
          next.add(node);
        }
        node = node.parentElement;
      }
      active.forEach(surface => {
        if (!next.has(surface)) surface.style.setProperty('--cursor-glow-visible', '0');
      });
      active = next;
    }
    function move(event) {
      if (event.pointerType !== 'mouse' || !preference.matches) return hide();
      point = { x: event.clientX, y: event.clientY, target: event.target };
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    }
    document.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    window.addEventListener('scroll', hide, { passive: true, capture: true });
    preference.addEventListener('change', hide);
    return () => {
      hide();
      document.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      window.removeEventListener('scroll', hide, true);
      preference.removeEventListener('change', hide);
      decorated.forEach(node => {
        node.classList.remove('cursor-glow-surface');
        ['--cursor-glow-x', '--cursor-glow-y', '--cursor-glow-visible'].forEach(key => node.style.removeProperty(key));
      });
    };
  }, []);
  return null;
}
