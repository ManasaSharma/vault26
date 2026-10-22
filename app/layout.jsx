import { themeConfig } from '@/config/theme.config';
import { themeToCssVars } from '@/lib/theme/themeToCssVars';
import './globals.css';
import '@/lib/styles/typography.css';
import '@/lib/styles/skeleton.scss';

export const metadata = {
  title: 'Manasa Budamagunta - Software Engineer',
  description: 'Portfolio of Manasa Budamagunta, SWE2 at Intuit',
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
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;500;600;700&family=Newsreader:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ backgroundColor: themeConfig.colors.canvas, color: themeConfig.colors.text }}>
        {children}
      </body>
    </html>
  );
}

