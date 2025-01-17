import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nurullah Demir | Full Stack Developer',
  description: 'Modern web teknolojileri ve DevOps pratikleri konusunda uzmanlaşmış Full Stack Developer. React, Node.js, ve cloud teknolojileri ile ölçeklenebilir uygulamalar geliştiriyorum.',
  keywords: 'Full Stack Developer, React, Next.js, Node.js, TypeScript, DevOps, Cloud Computing',
  authors: [{ name: 'Nurullah Demir' }],
  creator: 'Nurullah Demir',
  publisher: 'Nurullah Demir',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://nurullahdemir.dev',
    siteName: 'Nurullah Demir',
    title: 'Nurullah Demir | Full Stack Developer',
    description: 'Modern web teknolojileri ve DevOps pratikleri konusunda uzmanlaşmış Full Stack Developer',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Nurullah Demir',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurullah Demir | Full Stack Developer',
    description: 'Modern web teknolojileri ve DevOps pratikleri konusunda uzmanlaşmış Full Stack Developer',
    creator: '@nurullahdemir',
    images: ['/profile.jpg'],
  },
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' }
    ],
    shortcut: [
      { url: '/logo.svg', type: 'image/svg+xml' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen relative overflow-x-hidden`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
