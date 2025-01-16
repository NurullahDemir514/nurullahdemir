'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuItems = [
        { href: '#hero', text: 'Ana Sayfa' },
        { href: '#about', text: 'Hakkımda' },
        { href: '#portfolio', text: 'Projeler' },
        { href: '#contact', text: 'İletişim' }
    ]

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${scrolled ? 'bg-gradient-to-b from-primary to-transparent' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo */}
                    <Link href="#hero" className="group">
                        <h1 className={`${dancingScript.className} text-3xl md:text-4xl text-text-primary group-hover:text-accent transition-all duration-300`}>
                            Nurullah Demir
                        </h1>
                    </Link>

                    {/* Menu Items */}
                    <div className="flex items-center gap-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="px-3 py-1.5 text-sm text-text-secondary hover:text-accent rounded-lg transition-all duration-300 tracking-wide"
                            >
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
} 