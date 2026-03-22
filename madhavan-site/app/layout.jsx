import './globals.css'

export const metadata = {
  title: 'Madhavan Consulting | CPG Brand Strategy',
  description: 'Madhavan Consulting — Helping CPG Brands Launch & Scale across the Middle East & India.',
  icons: {
    icon: '/assets/logo/logo-light.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
