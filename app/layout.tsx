import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gulledge · Knapp · Leissler · Santos · Lenhard — Reunion 2028',
  description: 'The official family reunion planning site. Vote on your destination. See you in 2028.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen starfield text-white">
        {children}
      </body>
    </html>
  )
}
