'use client';

import './Header.scss';
import NavPill from './NavPill/NavPill';
import NavPillLink from './NavPill/NavPillLink/NavPillLink';
import { useVaultStore } from '@/lib/store/vaultStore';

export default function Header() {
    const navigation = useVaultStore(state => state.data?.navigation);
  return (
    <header className="header">
      <div className="vault-container headerContent">
        {/* LEFT: logo */}
        <div className="logoContainer">
          Logo
        </div>

        {/* MIDDLE: nav pills */}
        <div className="navPills">
          <NavPill>
            {
                (navigation ?? []).map(item => (
                    <NavPillLink key={item.href} href={item.href} label={item.label} />
                ))

            }
          </NavPill>
          
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

