import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Volkan Oluc',
  description: 'Personal website of Volkan Oluc',
  authors: [{ name: 'Volkan Oluc' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://volkanoluc.com',
    title: 'Volkan Oluc',
    description: 'Personal website of Volkan Oluc',
    siteName: 'Volkan Oluc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volkan Oluc',
    description: 'Personal website of Volkan Oluc',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
