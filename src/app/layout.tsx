// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: 'Kanzlei Barth',
  description: 'Rechtsanwaltskanzlei',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-white text-primary">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
