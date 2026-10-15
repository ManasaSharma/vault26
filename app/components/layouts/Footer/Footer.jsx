'use client';

import { themeConfig } from '@/config/theme.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: '🔗' },
    { name: 'GitHub', href: 'https://github.com', icon: '🐙' },
    { name: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { name: 'Email', href: 'mailto:contact@example.com', icon: '✉️' },
  ];

  const quickLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      style={{
        backgroundColor: themeConfig.colors.surface,
        borderColor: themeConfig.colors.hairline,
      }}
      className="border-t"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3
              style={{ color: themeConfig.colors.primary }}
              className="text-lg font-semibold mb-4"
            >
              Manasa
            </h3>
            <p style={{ color: themeConfig.colors.textMuted }} className="text-sm">
              Software Engineer & Designer building beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{ color: themeConfig.colors.text }}
              className="font-semibold mb-4"
            >
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{ color: themeConfig.colors.textMuted }}
                  className="block text-sm hover:opacity-70 transition"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4
              style={{ color: themeConfig.colors.text }}
              className="font-semibold mb-4"
            >
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: themeConfig.colors.primary,
                    borderColor: themeConfig.colors.hairline,
                  }}
                  className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-70 transition text-lg"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{ borderColor: themeConfig.colors.hairline }}
          className="border-t mb-6"
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p style={{ color: themeConfig.colors.textFaint }} className="text-sm">
            © {currentYear} Manasa Budamagunta. All rights reserved.
          </p>
          <p style={{ color: themeConfig.colors.textFaint }} className="text-sm">
            Designed & built with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

