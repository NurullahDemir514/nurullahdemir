'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import { usePathname } from 'next/navigation'

const dancingScript = Dancing_Script({ subsets: ['latin'] })

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${scrolled ? 'bg-[#0A0F16]/80 backdrop-blur-sm' : ''}`}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <h1 className={`${dancingScript.className} text-3xl md:text-4xl text-[#ECF0F1] group-hover:text-[#00FF9D] transition-all duration-300`}>
                            Nurullah Demir
                        </h1>
                    </Link>

                    {/* Blog Link */}
                    <Link
                        href="/blog"
                        className={`px-4 py-2 text-sm text-[#ECF0F1] hover:text-[#00FF9D] rounded-lg transition-all duration-300 tracking-wide flex items-center gap-2 ${pathname === '/blog' ? 'text-[#00FF9D]' : ''}`}
                    >
                        <span>Blog</span>
                        <i className="fas fa-external-link-alt text-xs"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
} 