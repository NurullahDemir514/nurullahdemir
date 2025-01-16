'use client'

import Image from "next/image";
import { projects } from "@/data/projects";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = document.querySelectorAll('section');
    const nextIndex = currentSectionIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      setIsScrolling(true);
      setCurrentSectionIndex(nextIndex);

      const targetSection = sections[nextIndex] as HTMLElement;
      targetSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [isScrolling, currentSectionIndex]);

  useEffect(() => {
    const main = mainRef.current;
    if (main) {
      main.addEventListener('wheel', handleWheel, { passive: false });
      return () => main.removeEventListener('wheel', handleWheel);
    }
  }, [isScrolling, currentSectionIndex, handleWheel]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myzzagyj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main ref={mainRef} className="min-h-screen gradient-bg overflow-hidden">
      {/* Kod Animasyonu */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }, (_, i) => {
            const functions = ['function', 'component', 'element', 'module'];
            return (
              <div
                key={i}
                className="code-line"
                style={{
                  position: 'absolute',
                  top: `${i * 7}%`,
                  left: `${(i * 20) % 100}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              >
                {`const ${functions[i % 4]} = () => {`}
              </div>
            );
          })}
        </div>
      </div>

      {/* Arka Plan Deseni */}
      <div className="bg-pattern"></div>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Dekoratif arka plan desenleri */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 -right-1/4 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profil resmi */}
            <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-accent/20 shadow-lg shadow-accent/5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-light/10 group-hover:opacity-75 transition-opacity duration-300"></div>
              <Image
                src="/profile.jpg"
                alt="Nurullah Demir"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-all duration-500"
                priority
              />
            </div>

            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-extralight tracking-wider mb-4 bg-gradient-to-r from-text-primary via-text-primary to-accent bg-clip-text text-transparent">
                Nurullah Demir
              </h1>
              <p className="text-2xl md:text-3xl text-text-secondary mb-8 font-extralight tracking-wide">
                Full Stack Developer & UI/UX Designer
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-light mx-auto mb-8 rounded-full"></div>
            </div>

            {/* Sosyal medya linkleri */}
            <div className="flex justify-center gap-8">
              <a 
                href="https://github.com/NurullahDemir514"
                target="_blank"
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="p-3 rounded-lg bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/nurullahdemir94"
                target="_blank"
                rel="noopener noreferrer" 
                className="group"
              >
                <div className="p-3 rounded-lg bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 transition-all duration-300">
                  <svg className="w-6 h-6 text-text-muted group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light tracking-wider text-center mb-12">
            <span className="text-accent">Hakkımda</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl text-text-primary leading-relaxed font-light">
                Merhaba! Ben Nurullah Demir, yazılım geliştirme konusunda 3+ yıllık deneyime sahip bir Full Stack Developer'ım.
                Modern web teknolojileri ve kullanıcı deneyimi odaklı geliştirme konusunda uzmanlaşmış olup,
                her projede en güncel teknolojileri kullanarak yenilikçi çözümler üretmeyi hedefliyorum.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-surface-dark/50 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-light text-accent mb-4">Eğitim & Deneyim</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>KTÜ Yazılım Mühendisliği</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>3+ Yıl Full Stack Geliştirme Deneyimi</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Çeşitli Freelance Projeler ve Startup Deneyimi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface/30 backdrop-blur-sm p-6 rounded-xl border border-surface-dark/50 hover:border-accent/30 transition-all duration-300">
                <h3 className="text-xl font-light text-accent mb-4">İlgi Alanları</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Modern Web Teknolojileri ve Mimari Tasarım</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Kullanıcı Deneyimi ve Arayüz Tasarımı</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Açık Kaynak Projeler ve Topluluk Katkıları</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-light text-2xl mb-2 text-accent group-hover:text-accent-light transition-colors">Frontend</h3>
                <p className="text-text-muted text-base">React, Next.js, TypeScript</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-light text-2xl mb-2 text-accent group-hover:text-accent-light transition-colors">Backend</h3>
                <p className="text-text-muted text-base">Node.js, Express, MongoDB</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-light text-2xl mb-2 text-accent group-hover:text-accent-light transition-colors">UI/UX</h3>
                <p className="text-text-muted text-base">Figma, Tailwind CSS</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-surface/30 backdrop-blur-sm border border-surface-dark/50 hover:border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h3 className="font-light text-2xl mb-2 text-accent group-hover:text-accent-light transition-colors">Araçlar</h3>
                <p className="text-text-muted text-base">Git, Docker, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-accent text-sm tracking-wider uppercase">Portföy</span>
              <h2 className="text-4xl md:text-5xl font-light tracking-wider mt-2 mb-4">
                <span className="text-text-primary">Seçkin</span>
                <span className="text-accent ml-3">Projelerim</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Modern teknolojiler kullanarak geliştirdiğim projelerden bazıları
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-surface/30 backdrop-blur-sm p-8 rounded-2xl border border-surface-dark/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-light text-text-primary group-hover:text-accent transition-colors mb-4">
                        {project.title}
                      </h3>
                      <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-1.5 text-sm text-text-secondary bg-surface-dark/50 rounded-full border border-surface-dark/50 group-hover:border-accent/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-text-secondary bg-surface-dark/50 hover:bg-accent/10 border border-surface-dark/50 hover:border-accent/30 rounded-lg transition-all duration-300 group-hover:text-accent"
                      >
                        <span>{project.linkText}</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light tracking-wider mb-4">
                <span className="text-accent">İletişim</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Projeleriniz veya iş birliği fırsatları için benimle iletişime geçebilirsiniz.
                En kısa sürede size dönüş yapacağım.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-surface/30 backdrop-blur-sm p-8 rounded-xl border border-surface-dark/50 hover:border-accent/30 transition-all duration-300 space-y-6 relative"
            >
              {submitStatus === 'success' && (
                <div className="absolute inset-0 flex items-center justify-center bg-primary/95 backdrop-blur-sm rounded-xl animate-fade-in">
                  <div className="text-center p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-light/10 rounded-xl"></div>
                    <div className="relative">
                      <div className="w-20 h-20 mx-auto mb-6 relative">
                        <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
                        <div className="relative bg-gradient-to-br from-accent to-accent-light rounded-full p-5">
                          <svg
                            className="w-10 h-10 text-text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-light text-text-primary mb-3">Teşekkürler!</h3>
                      <p className="text-xl font-light text-accent mb-2">Mesajınız Başarıyla İletildi</p>
                      <p className="text-base text-text-muted">En kısa sürede size dönüş yapacağım.</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-light text-text-secondary">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2.5 bg-primary/50 border border-surface-dark/50 rounded-lg focus:ring-2 focus:ring-accent/50 text-text-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-light text-text-secondary">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2.5 bg-primary/50 border border-surface-dark/50 rounded-lg focus:ring-2 focus:ring-accent/50 text-text-primary"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-light text-text-secondary">
                  Konu
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 bg-primary/50 border border-surface-dark/50 rounded-lg focus:ring-2 focus:ring-accent/50 text-text-primary"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-light text-text-secondary">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2.5 bg-primary/50 border border-surface-dark/50 rounded-lg focus:ring-2 focus:ring-accent/50 text-text-primary resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 text-base text-text-primary bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-lg transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <>
                    Mesaj Gönder
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>

              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
