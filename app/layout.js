import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tarot Card App',
  description: 'Fortune telling Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tve3dge.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
