'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Importing usePathname from next/navigation to get the current path
import { usePathname } from 'next/navigation'

const navigation = [
  { label: 'Startseite', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-primary text-white sticky py-6 top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo and Branding */}
        <div className="relative w-[160px] h-auto aspect-[11/4]"> {/* Adjust aspect ratio to your logo */}
        <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 150px, 160px"
        />
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-xl">
        {navigation.map(({ label, href }) => {
            const isActive = pathname === href

            return (
            <Link key={label} href={href} className="relative group">
            <span
                className={`transition-colors ${
                isActive ? 'text-secondary' : 'text-white'
                }`}
            >
                {label}
            </span>
            <span
                className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                isActive
                    ? 'w-1/2 left-1/4 bg-secondary'
                    : 'w-0 bg-secondary group-hover:w-full'
                }`}
            />
            </Link>


            )
        })}
        </nav>


        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 space-y-2 text-lg bg-[#070738]">
          <Link href="/" onClick={() => setMenuOpen(false)}>Startseite</Link>
          <Link href="/leistungen" onClick={() => setMenuOpen(false)}>Leistungen</Link>
          <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
        </nav>
      )}
    </header>
  )
}
