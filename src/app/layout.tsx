import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nurullah Demir | Kişisel Web Sitesi',
  description: 'Nurullah Demir\'in kişisel web sitesi - Portföy, Blog ve İletişim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen bg-gradient-to-br from-gray-900 via-gray-800/95 to-gray-900 text-gray-100`}>
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <footer className="py-6 bg-gray-900/30 backdrop-blur-sm border-t border-gray-800/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Nurullah Demir. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center space-x-6">
                <a href="https://github.com/NurullahDemir514" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/nurullahdemir94" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-300 transition-colors text-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
