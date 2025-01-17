import Link from 'next/link'

export default function Header() {
    return (
        <div className="absolute top-0 left-0 right-0 z-[100]">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="logo">
                    Nurullah Demir
                </Link>
                <nav className="flex items-center gap-4">
                    <Link href="/blog" className="nav-link">
                        Blog
                    </Link>
                </nav>
            </div>
        </div>
    )
} 