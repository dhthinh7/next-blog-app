import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { ThemContextProvider } from '@/context/ThemContext'
import ThemProvider from '@/providers/ThemProvider'
import './globals.css'
import AuthProvider from '@/providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog app',
  description: 'Blog app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <ThemContextProvider>
            <ThemProvider>
              <div className='containers'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemProvider>
          </ThemContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
