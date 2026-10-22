'use client';

import './NavPillLink.scss';

export default function NavPillLink({ href, label }) {
    return (
        <a href={href} className="type-label-md navPillLink">
            {label}
        </a>
    );
}