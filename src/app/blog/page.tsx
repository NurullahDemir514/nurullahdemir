'use client'

import Link from 'next/link'

export default function Blog() {
    return (
        <div className="relative pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="section-title text-center mb-12">Blog</h1>

                <div className="grid gap-8">
                    {/* Blog Post Card */}
                    <Link href="/blog/modern-frontend-teknolojileri" className="block">
                        <article className="card group hover:bg-white/[0.03] transition-colors">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-white/40">
                                    <time>15 Mart 2024</time>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span>Frontend</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gradient">Modern Frontend Teknolojileri ve Performans Optimizasyonu</h2>
                                <p className="text-white/60">
                                    Modern web uygulamalarında performans optimizasyonu, SEO ve kullanıcı deneyimi. Next.js 14, React Server Components ve yeni nesil web teknolojilerinin detaylı incelemesi.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        Next.js
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        React
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        Performance
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Post Card */}
                    <Link href="/blog/mikroservis-mimarisi" className="block">
                        <article className="card group hover:bg-white/[0.03] transition-colors">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-white/40">
                                    <time>10 Mart 2024</time>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span>Backend</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gradient">Mikroservis Mimarisi ve Modern Backend Çözümleri</h2>
                                <p className="text-white/60">
                                    Mikroservis mimarisinin avantajları, dezavantajları ve uygulama örnekleri. Docker, Kubernetes ve modern CI/CD pratikleri ile ölçeklenebilir backend sistemleri geliştirme.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        Microservices
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        Docker
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        Kubernetes
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>

                    {/* Blog Post Card */}
                    <Link href="/blog/yapay-zeka-web-gelistirme" className="block">
                        <article className="card group hover:bg-white/[0.03] transition-colors">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-white/40">
                                    <time>5 Mart 2024</time>
                                    <span className="w-1 h-1 rounded-full bg-white/20"></span>
                                    <span>AI & Web</span>
                                </div>
                                <h2 className="text-2xl font-bold text-gradient">Web Geliştirmede Yapay Zeka Entegrasyonu</h2>
                                <p className="text-white/60">
                                    Modern web uygulamalarında AI/ML modellerinin kullanımı, OpenAI API entegrasyonu ve gerçek zamanlı yapay zeka destekli özellikler geliştirme rehberi.
                                </p>
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        AI
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        OpenAI
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                        ML
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                </div>
            </div>
        </div>
    )
} 