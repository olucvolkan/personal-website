import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Volkan Oluc | Senior Software Engineer & Digital Nomad',
  description: 'Senior Software Engineer specializing in PHP (Laravel, Symfony) and TypeScript. Expert in building scalable web applications, microservices architectures, and digital nomad lifestyle.',
  authors: [{ name: 'Volkan Oluc' }],
  keywords: ['software engineer', 'digital nomad', 'PHP developer', 'Laravel expert', 'TypeScript developer', 'remote work', 'Malta digital nomad'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://volkanoluc.com',
    title: 'Volkan Oluc | Senior Software Engineer & Digital Nomad',
    description: 'Senior Software Engineer specializing in PHP (Laravel, Symfony) and TypeScript. Expert in building scalable web applications, microservices architectures, and digital nomad lifestyle.',
    siteName: 'Volkan Oluc',
    images: [
      {
        url: 'https://volkanoluc.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Volkan Oluc - Senior Software Engineer & Digital Nomad'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volkan Oluc | Senior Software Engineer & Digital Nomad',
    description: 'Senior Software Engineer specializing in PHP (Laravel, Symfony) and TypeScript. Expert in building scalable web applications, microservices architectures, and digital nomad lifestyle.',
    images: ['https://volkanoluc.com/og-image.jpg'],
    creator: '@volkanoluc'
  },
  verification: {
    google: 'your-google-verification-id',
  },
  alternates: {
    canonical: 'https://volkanoluc.com',
    types: {
      'application/rss+xml': 'https://youtube.com/@volkanoluc',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
