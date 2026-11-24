'use client';

import { copy, defaultProfile } from '@/lib/content';

import { useEffect, useRef, useState } from 'react';
import { showWorkshop } from '@/config/sections.config';
import { FiMenu, FiX } from 'react-icons/fi';
import NavPill from './NavPill/NavPill';
import NavPillLink from './NavPill/NavPillLink/NavPillLink';
import { useVaultStore } from '@/lib/store/vaultStore';
import './Header.scss';

export default function Header() {
  const navigation = useVaultStore(state => state.data?.navigation);
  const profile = useVaultStore(state => state.data?.metadata);
  const [active, setActive] = useState('#hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef(null);

  useEffect(() => {
    let frame;
    function update() {
      const headerBottom = document.querySelector('.header')?.getBoundingClientRect().bottom ?? 0;
      let current = '#hero';
      let largestVisibleArea = 0;
      for (const item of navigation ?? []) {
        if (!showWorkshop && item.href === '#projects') continue;
        const section = document.getElementById(item.href.slice(1));
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, headerBottom));
        if (visibleHeight > largestVisibleArea) {
          largestVisibleArea = visibleHeight;
          current = item.href;
        }
      }
      setActive(current);
    }
    function onScroll() { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); }
    update();
    const observer = new ResizeObserver(onScroll);
    document.querySelectorAll('.shared-section, .header').forEach(section => observer.observe(section));
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    addEventListener('hashchange', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      removeEventListener('scroll', onScroll);
      removeEventListener('resize', onScroll);
      removeEventListener('hashchange', onScroll);
    };
  }, [navigation]);

  function closeMenu() { setMenuOpen(false); }
  const initials = (profile?.name ?? defaultProfile.name).split(/\s+/).filter(Boolean).slice(0,2).map(part => part[0]).join('');
  return <header className="header">
    <div className="vault-container headerContent">
      <a href="#hero" className="logoContainer" onClick={closeMenu}><span className="logoBadge">{initials}</span><span className="logoText">{profile?.name ?? defaultProfile.name}</span></a>
      <nav className="navPills" aria-label={copy.header.mainNavigation}><NavPill>{(navigation ?? []).filter(item => showWorkshop || item.href !== '#projects').map(item => <NavPillLink key={item.href} {...item} active={active === item.href} onClick={closeMenu} />)}</NavPill></nav>
      <div className="headerActions"><button ref={menuButton} type="button" className="mobileMenuButton" aria-label={menuOpen ? copy.header.closeNavigation : copy.header.openNavigation} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button></div>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mobileNav vault-container" aria-label={copy.header.mobileNavigation} onKeyDown={event => { if(event.key === 'Escape') { closeMenu(); menuButton.current?.focus(); } }}>{(navigation ?? []).filter(item => showWorkshop || item.href !== '#projects').map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined} onClick={closeMenu}>{item.label}</a>)}</nav>}
  </header>;
}
