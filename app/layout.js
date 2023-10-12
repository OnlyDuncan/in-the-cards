import './globals.css';

export const metadata = {
  title: 'Tarot Card App',
  description: 'Fortune telling web application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Stuff */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
