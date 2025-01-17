'use client'

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <div className="relative pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-3xl">
                <article className="prose prose-invert prose-lg">
                    <div className="flex items-center gap-4 text-sm text-white/40 mb-8">
                        <time>12 Mart 2024</time>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>Web Geliştirme</span>
                    </div>

                    <h1 className="section-title !mb-12">Modern Web Uygulamaları Geliştirme</h1>

                    <div className="card">
                        <p className="text-white/60 mb-6">
                            Modern web uygulamaları geliştirirken dikkat edilmesi gereken önemli noktalar ve best practice'ler hakkında detaylı bir rehber.
                        </p>

                        <div className="flex gap-2 mb-8">
                            <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                Next.js
                            </span>
                            <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-white/60">
                                React
                            </span>
                        </div>

                        {/* Blog içeriği buraya gelecek */}
                        <div className="space-y-6 text-white/70">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
} 