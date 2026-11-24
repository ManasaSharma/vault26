import GalaxyBackground from '@/components/common/GalaxyBackground/GalaxyBackground';
import CursorGlow from '@/components/common/CursorGlow/CursorGlow';
import { themeConfig } from '@/config/theme.config';
import { themeToCssVars } from '@/lib/theme/themeToCssVars';
import './globals.css';
import '@/lib/styles/typography.css';
import '@/lib/styles/design-system.scss';
import '@/lib/styles/skeleton.scss';

export const metadata = {
  title: 'Manasa Budamagunta - Software Engineer',
  description: 'Portfolio of Manasa Budamagunta, Software Engineer at Intuit',
};

/* Every theme.config.js value as a CSS variable, e.g. --colors-text-muted */
const themeVars = themeToCssVars(themeConfig);

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={themeVars}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: themeConfig.colors.canvas, color: themeConfig.colors.text }}>
        <GalaxyBackground />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

