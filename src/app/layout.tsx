import type { Metadata } from 'next'
import businessData from '@/config/business-data'
import './globals.css'

export const metadata: Metadata = {
  title:       `${businessData.businessName} — ${businessData.city}`,
  description: `${businessData.businessName} provides ${businessData.category} in ${businessData.city}. ${businessData.tagline}`,
  openGraph: {
    title:       businessData.businessName,
    description: businessData.tagline,
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const primary = businessData.primaryColor ?? '#1B2A4A'
  const accent  = businessData.accentColor  ?? '#C49A28'

  return (
    <html lang="en">
      <head>
        {/* Google Fonts loaded via link — avoids next/font build-time network download */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-sora:              'Sora', sans-serif;
            --font-inter:             'Inter', sans-serif;
            --color-primary:          ${primary};
            --color-primary-dark:     #0F1B2D;
            --color-accent:           ${accent};
            --color-accent-light:     #E8B84B;
            --color-accent-subtle:    rgba(196,154,40,0.1);
            --color-surface:          #F8F7F4;
            --color-surface-dark:     #F0EEE9;
            --color-border:           rgba(0,0,0,0.07);
            --color-text-primary:     #0F1B2D;
            --color-text-secondary:   #5A6478;
            --color-text-muted:       #9CA3AF;
          }
        `}</style>
      </head>
      <body className="bg-white font-inter antialiased">{children}</body>
    </html>
  )
}
