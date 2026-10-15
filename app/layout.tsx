import { themeConfig } from '@/config/theme.config';
import './globals.css';

export const metadata = {
  title: "Manasa B. — frontend-systems-lab",
  description: "Personal portfolio and engineering lab, built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
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
