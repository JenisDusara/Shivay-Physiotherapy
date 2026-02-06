import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shivay Physiotherapy & Rehabilitation Clinic',
  description: 'Professional physiotherapy and rehabilitation services in Ahmedabad by Dr. Deep Rami and Dr. Riddhi Vekariya',
  keywords: 'physiotherapy, rehabilitation, sports injury, back pain, neck pain, Ahmedabad, Nikol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
