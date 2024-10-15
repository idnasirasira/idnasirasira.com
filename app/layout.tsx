import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/theme-providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://idnasirasira.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aris Arisandi - Fullstack Developer, Writer, Creator and Mentor',
  robots: 'follow, index',
  description:
    "I've been developing websites and apps for 8 years. Get in touch with me to learn more about my work in IT and how I can help with your next project.",
  openGraph: {
    url: siteUrl,
    type: 'website',
    siteName: 'Idnasirasira',
    description:
      "I've been developing websites and apps for 8 years. Get in touch with me to learn more about my work in IT and how I can help with your next project.",
    title: 'Aris Arisandi - Developer, Writer, Creator and Mentor',
    images: '/favicon/favicon-32x32.png',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@idnasirasira',
    title: 'Aris Arisandi - Developer, Writer, Creator and Mentor',
    description:
      "I've been developing websites and apps for 8 years. Get in touch with me to learn more about my work in IT and how I can help with your next project.",
    images: '/favicon/favicon-32x32.png',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
