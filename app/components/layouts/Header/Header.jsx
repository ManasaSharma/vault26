'use client';

import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        {/* LEFT: logo */}
        <div className="logoContainer">
          Logo
        </div>

        {/* MIDDLE: nav pills */}
        <div className="navPills">
          Nav Pills
        </div>

        {/* RIGHT: book a call link (desktop) */}
        <div className="ctaContainer">
          Book a Call
        </div>

        {/* RIGHT: menu button (mobile) */}
        <button className="mobileMenuButton">
          Menu
        </button>
      </div>
    </header>
  );
}

