import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'

const DynamicBackground = dynamic(() => import('../../components/Background'), {
    ssr: false
})

export const metadata: Metadata = {
    title: 'Blog | Nurullah Demir',
    description: 'Web geliştirme, DevOps ve yazılım teknolojileri hakkında yazılar.',
    openGraph: {
        title: 'Blog | Nurullah Demir',
        description: 'Web geliştirme, DevOps ve yazılım teknolojileri hakkında yazılar.',
    },
    twitter: {
        title: 'Blog | Nurullah Demir',
        description: 'Web geliştirme, DevOps ve yazılım teknolojileri hakkında yazılar.',
    }
}

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="relative min-h-screen">
            <DynamicBackground />
            <Header />
            {children}
        </main>
    )
} 