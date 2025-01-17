'use client'

import Image from "next/image";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const container = document.querySelector('.snap-y');

    if (element && container) {
      const elementTop = element.offsetTop;
      const containerTop = container.scrollTop;
      const targetPosition = elementTop;

      container.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Aktif bölümü güncelle
      setActiveSection(id);
    }
  };

  // Scroll olayını dinle
  useEffect(() => {
    const container = document.querySelector('.snap-y');
    if (container) {
      const handleScroll = () => {
        const scrollPosition = container.scrollTop;
        const windowHeight = window.innerHeight;

        // Hangi bölümün görünür olduğunu kontrol et
        document.querySelectorAll('section').forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - windowHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2
          ) {
            setActiveSection(section.id);
          }
        });
      };

      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const sections = ['hero', 'about', 'projects', 'contact'];

  return (
    <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory relative z-[999]">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900/50 snap-start snap-always relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-700/50 via-gray-600/50 to-gray-700/50 rounded-full blur-md"></div>
                <div className="absolute inset-1 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 rounded-full"></div>
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-gray-700/50">
                  <Image
                    src="/profile.jpg"
                    alt="Nurullah Demir"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Merhaba, Ben Nurullah Demir
            </h1>
            <p className="text-xl text-gray-200">
              Full Stack Web Geliştirici & Yazılım Mühendisi
            </p>
            <p className="text-gray-300 text-lg">
              Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum.
            </p>
            <div className="flex gap-6 justify-center">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}
                className="px-8 py-3 bg-gray-800/90 hover:bg-gray-700 text-white rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                İletişime Geç
              </a>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}
                className="px-8 py-3 border-2 border-gray-700 hover:border-gray-600 text-gray-200 hover:text-white rounded-lg transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                Projelerimi Gör
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center bg-gray-900/50 transition-all duration-700 snap-start snap-always">
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
              Hakkımda
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-gray-200 text-lg leading-relaxed">
                  7+ yıllık yazılım geliştirme deneyimine sahibim. Modern web teknolojileri konusunda uzmanlaşmış bir Full Stack geliştiriciyim.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="font-semibold text-gray-100 mb-4 text-lg">Frontend</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>React & Next.js</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                      <li>Redux & Context API</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                    <h3 className="font-semibold text-gray-100 mb-4 text-lg">Backend</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li>Node.js & Express</li>
                      <li>Python & Django</li>
                      <li>PostgreSQL & MongoDB</li>
                      <li>REST & GraphQL</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl text-white mb-2 font-bold">7+</div>
                  <div className="text-gray-300">Yıl Deneyim</div>
                </div>
                <div className="p-8 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl text-white mb-2 font-bold">50+</div>
                  <div className="text-gray-300">Proje Tamamlandı</div>
                </div>
                <div className="p-8 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl text-white mb-2 font-bold">30+</div>
                  <div className="text-gray-300">Mutlu Müşteri</div>
                </div>
                <div className="p-8 bg-gray-800/80 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                  <div className="text-4xl text-white mb-2 font-bold">100%</div>
                  <div className="text-gray-300">Müşteri Memnuniyeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center bg-gray-900/50 transition-all duration-700 snap-start snap-always">
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
              Projelerim
            </h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index}
                  className="bg-gray-800/80 rounded-lg p-8 shadow-lg transform transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                  <p className="text-gray-200 mb-6 text-lg">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}
                        className="px-4 py-2 text-sm bg-gray-700/80 text-gray-200 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors">
                        <i className="fab fa-github text-2xl"></i>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="text-gray-200 hover:text-white transition-colors">
                        <i className="fas fa-external-link-alt text-2xl"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center bg-gray-900/50 transition-all duration-700 snap-start snap-always">
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-white">
              İletişime Geç
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-800/80 shadow-lg transform transition-all duration-300 hover:scale-110">
                    <i className="fas fa-envelope text-gray-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 text-lg">Email</h3>
                    <a href="mailto:info@nurullahdemir.com"
                      className="text-gray-200 hover:text-white transition-colors text-lg">
                      info@nurullahdemir.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-800/80 shadow-lg transform transition-all duration-300 hover:scale-110">
                    <i className="fas fa-map-marker-alt text-gray-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 text-lg">Konum</h3>
                    <p className="text-gray-200 text-lg">İstanbul, Türkiye</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-800/80 shadow-lg transform transition-all duration-300 hover:scale-110">
                    <i className="fas fa-phone text-gray-200 text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-100 text-lg">Telefon</h3>
                    <a href="tel:+905555555555"
                      className="text-gray-200 hover:text-white transition-colors text-lg">
                      +90 555 555 55 55
                    </a>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız"
                    className="w-full px-6 py-4 bg-gray-800/80 border-2 border-gray-700 focus:border-gray-600 rounded-lg outline-none text-gray-100 text-lg transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Adresiniz"
                    className="w-full px-6 py-4 bg-gray-800/80 border-2 border-gray-700 focus:border-gray-600 rounded-lg outline-none text-gray-100 text-lg transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mesajınız"
                    rows={4}
                    className="w-full px-6 py-4 bg-gray-800/80 border-2 border-gray-700 focus:border-gray-600 rounded-lg outline-none text-gray-100 text-lg resize-none transition-all duration-300"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gray-800/90 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-3 z-[9999]">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => scrollToSection(e, section)}
            className={`nav-dot block ${activeSection === section ? 'active' : ''}`}
            aria-label={`Scroll to ${section} section`}
          >
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-gray-800/90 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
