'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
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
    <header className="bg-primary text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="w-auto">
          <Link href="/" onClick={() => window.location.href = "/"}>
            <Logo />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg md:text-xl">
          {navigation.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link key={label} href={href} className="relative group">
                <span className={`transition-colors ${isActive ? 'text-secondary' : 'text-white'}`}>
                  {label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                    isActive ? 'w-1/2 left-1/4 bg-secondary' : 'w-0 bg-secondary group-hover:w-full'
                  }`}
                />
              </Link>
            )
          })}
        </nav>

        {/* Burger / Close Button */}
        <button
          className="md:hidden text-white z-50 relative w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Hamburger Icon */}
          <svg
            className={`absolute w-6 h-6 transition-transform duration-300 ${
              menuOpen ? 'opacity-0 scale-90 rotate-45' : 'opacity-100 scale-100 rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          {/* Close Icon */}
          <svg
            className={`absolute w-6 h-6 transition-transform duration-300 ${
              menuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 rotate-45'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-in menu from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-primary text-white z-40 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          {/* Optional extra close button if user doesn’t click overlay */}
        </div>

        <nav className="flex flex-col divide-y divide-gray-500 text-lg font-semibold">
          {navigation.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={label}
                href={href}
                className={`py-4 px-6 ${isActive ? 'text-secondary' : 'text-white'}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Logo + Contact Buttons */}
        <div className="px-6 py-8 space-y-4">
          <div className="w-40">
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:latif_abdallah@icloud.com"
              className="group inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
            >
              <EnvelopeIcon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
              Jetzt mailen
            </a>
            <a
              href="tel:+4917681241143"
              className="group inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-secondary hover:text-primary transition"
            >
              <PhoneIcon className="h-5 w-5 text-secondary transition-colors group-hover:text-primary" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
