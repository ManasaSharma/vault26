'use client';

import { useEffect, useRef, useState } from 'react';
import { FiCalendar, FiMenu, FiX } from 'react-icons/fi';
import Button from '@/components/common/Button';
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
      const line = document.querySelector('.header').getBoundingClientRect().height + 40;
      let current = '#hero';
      for (const item of navigation ?? []) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= line) current = item.href;
      }
      setActive(current);
    }
    function onScroll() { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); }
    update();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    return () => { cancelAnimationFrame(frame); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); };
  }, [navigation]);

  function closeMenu() { setMenuOpen(false); }
  const initials = (profile?.name ?? 'Manasa B.').split(/\s+/).filter(Boolean).slice(0,2).map(part => part[0]).join('');
  return <header className="header">
    <div className="vault-container headerContent">
      <a href="#hero" className="logoContainer" onClick={closeMenu}><span className="logoBadge">{initials}</span><span className="logoText">{profile?.name ?? 'Manasa B.'}</span></a>
      <nav className="navPills" aria-label="Main navigation"><NavPill>{(navigation ?? []).map(item => <NavPillLink key={item.href} {...item} active={active === item.href} onClick={closeMenu} />)}</NavPill></nav>
      <div className="headerActions"><Button href="#contact" compact onClick={closeMenu}>Book a Call <FiCalendar aria-hidden="true" /></Button><button ref={menuButton} type="button" className="mobileMenuButton" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button></div>
    </div>
    {menuOpen && <nav id="mobile-navigation" className="mobileNav vault-container" aria-label="Mobile navigation" onKeyDown={event => { if(event.key === 'Escape') { closeMenu(); menuButton.current?.focus(); } }}>{(navigation ?? []).map(item => <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined} onClick={closeMenu}>{item.label}</a>)}</nav>}
  </header>;
}
