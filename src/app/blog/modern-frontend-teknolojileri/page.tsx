'use client'

export default function BlogPost() {
    return (
        <div className="relative pt-24 pb-12 px-4">
            <div className="container mx-auto max-w-3xl">
                <article className="prose prose-invert prose-lg">
                    <div className="flex items-center gap-4 text-sm text-white/40 mb-8">
                        <time>15 Mart 2024</time>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span>Frontend</span>
                    </div>

                    <h1 className="section-title !mb-12">Modern Frontend Teknolojileri ve Performans Optimizasyonu</h1>

                    <div className="card">
                        <div className="space-y-6 text-white/70">
                            <p>
                                Modern web geliştirme dünyasında, kullanıcı deneyimi ve performans her zamankinden daha önemli hale geldi. Next.js 14 ile gelen yeni özellikler ve React Server Components, bu konularda önemli gelişmeler sağlıyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Next.js 14'ün Getirdiği Yenilikler</h2>
                            <p>
                                Next.js 14, Partial Prerendering (PPR) özelliği ile statik ve dinamik içeriği akıllıca birleştiriyor. Bu sayede hem hızlı sayfa yüklemeleri hem de dinamik içerik sunumu mümkün oluyor. Server Actions ve Parallel Routes gibi özellikler de geliştirici deneyimini önemli ölçüde iyileştiriyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">React Server Components</h2>
                            <p>
                                RSC, sunucu tarafında render edilen ve istemci tarafında hidrasyona ihtiyaç duymayan bileşenler sunuyor. Bu yaklaşım, JavaScript bundle boyutunu küçültüyor ve ilk sayfa yükleme performansını önemli ölçüde artırıyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">SEO ve Core Web Vitals</h2>
                            <p>
                                Modern frontend uygulamalarında SEO artık sadece meta etiketlerden ibaret değil. Core Web Vitals metrikleri (LCP, FID, CLS) Google sıralamasını doğrudan etkiliyor. Server-side rendering ve statik site generation bu konuda önemli avantajlar sağlıyor.
                            </p>

                            <h2 className="text-xl font-bold text-gradient mt-8">Performans Optimizasyonu İpuçları</h2>
                            <ul className="list-disc pl-4 space-y-2 mt-4">
                                <li>Image ve Font optimizasyonu</li>
                                <li>Code splitting ve lazy loading</li>
                                <li>Bundle size optimizasyonu</li>
                                <li>Cache stratejileri</li>
                                <li>Edge Computing kullanımı</li>
                            </ul>

                            <div className="flex gap-2 mt-8">
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
                    </div>
                </article>
            </div>
        </div>
    )
} 