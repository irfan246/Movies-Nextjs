import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Head/index'
import Navbar from '@/components/Navbar/index'
import Footer from '@/components/Footer/index'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body className={`${inter.className} overflow-x-hidden h-full`} >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
