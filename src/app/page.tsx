'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'

const DynamicBackground = dynamic(() => import('../components/Background'), {
  ssr: false
})

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Ana Sayfa' },
    { id: 'hakkimda', label: 'Hakkımda' },
    { id: 'projeler', label: 'Projeler' },
    { id: 'iletisim', label: 'İletişim' }
  ]

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget
    const scrollPosition = container.scrollTop
    const windowHeight = container.clientHeight

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top >= -windowHeight / 2 && rect.top <= windowHeight / 2) {
          setActiveSection(id)
        }
      }
    })
  }

  return (
    <main className="relative min-h-screen">
      <DynamicBackground />
      <Header />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-6 z-[100]">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group relative flex items-center"
            onClick={() => setActiveSection(id)}
          >
            <span className="absolute right-10 glass px-3 py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </span>
            <div
              className={`w-3 h-3 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/10
                ${activeSection === id ? 'bg-white/20 border-white/20' : 'hover:border-white/20'}`}
            />
          </a>
        ))}
      </div>

      {/* Content Sections */}
      <div className="h-screen snap-y snap-mandatory overflow-y-auto" onScroll={handleScroll}>
        {/* Hero Section */}
        <section id="hero" className="h-screen snap-start flex items-center justify-center relative">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
              {/* Sol Taraf - Profil Bilgileri */}
              <div className="flex-1 space-y-6 text-left">
                <div className="space-y-2">
                  <p className="text-white/50 font-medium">Merhaba, ben</p>
                  <h1 className="text-5xl font-bold text-gradient">Nurullah Demir</h1>
                  <p className="text-2xl text-white/60">Full Stack Developer</p>
                </div>

                <p className="text-lg text-white/50 max-w-xl">
                  Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
                </p>

                <div className="flex gap-4 pt-4">
                  <a href="#iletisim" className="btn">
                    İletişime Geç
                  </a>
                  <a href="#projeler" className="btn bg-transparent border border-white/10 hover:bg-white/5">
                    Projelerimi Gör
                  </a>
                </div>

                <div className="flex items-center gap-6 pt-8">
                  <a href="https://github.com/nurullahdemir" target="_blank" rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/80 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/in/nurullahdemir" target="_blank" rel="noopener noreferrer"
                    className="text-white/40 hover:text-white/80 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="mailto:info@nurullahdemir.com"
                    className="text-white/40 hover:text-white/80 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Sağ Taraf - Profil Resmi */}
              <div className="relative w-64 h-64">
                {/* Arka plan efektleri */}
                <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-transparent rounded-lg blur-xl"></div>

                {/* Çerçeve */}
                <div className="relative h-full rounded-lg bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm border border-white/10">
                  {/* İç çerçeve ve fotoğraf */}
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <Image
                      src="/profile.jpg"
                      alt="Nurullah Demir"
                      fill
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      style={{ objectPosition: "center 20%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  </div>

                  {/* İnce kenar detayları */}
                  <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                  <div className="absolute inset-[2px] border border-white/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimda" className="h-screen snap-start flex items-center justify-center">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center">Hakkımda</h2>
              <p className="text-lg text-white/50 text-center mb-12">
                Modern web teknolojileri konusunda uzmanlaşmış Full Stack geliştiriciyim.
                Kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Frontend</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">React & Next.js</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">TypeScript</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div className="card hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-gradient mb-6">Backend</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">Node.js & Express</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">Python & Django</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-white/60">PostgreSQL & MongoDB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projeler" className="h-screen snap-start flex items-center justify-center">
          <div className="container px-4 py-12 overflow-y-auto">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="section-title">Projeler</h2>
              <div className="space-y-6">
                <div className="card hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-gradient mb-4">Bütçem</h3>
                  <p className="text-white/70 mb-4">
                    Kişisel finans yönetimi için geliştirilmiş web uygulaması. Gelir-gider takibi, bütçe planlaması ve finansal raporlama özellikleri sunar.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex gap-2">
                      <span className="tag">Next.js</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Tailwind CSS</span>
                      <span className="tag">MongoDB</span>
                    </div>
                    <div className="flex gap-2">
                      <a href="https://github.com/username/butcem" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                        GitHub
                      </a>
                      <a href="https://xn--btem-1oa8j.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm">
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="h-screen snap-start flex items-center justify-center">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="section-title text-center">İletişim</h2>
              <div className="card">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      placeholder="Adınız"
                      className="w-full px-4 py-3 input"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 input"
                    />
                  </div>
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-4 py-3 input resize-none"
                  />
                  <button type="submit" className="w-full btn">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
