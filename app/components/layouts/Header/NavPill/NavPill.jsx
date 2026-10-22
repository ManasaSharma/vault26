'use client';

import './NavPill.scss';

export default function NavPill({children}) {
    return (
        <div className="navPill">
           {children}
        </div>
    );
}