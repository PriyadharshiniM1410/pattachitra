import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Pattachitra',
  description: 'Ancient art of Odisha',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/" className="logo">PATTACHITRA</Link>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {children}

        <footer className="footer">
          <h2>PATTACHITRA ART • ODISHA</h2>
          <p>Preserving the ancient art of storytelling through colours and brushstrokes.</p>
          <p className="copy">© 2026 All rights reserved</p>
        </footer>
      </body>
    </html>
  )
}