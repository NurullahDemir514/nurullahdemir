'use client'

import Image from "next/image";
import { projects } from "@/data/projects";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isScrolling, setIsScrolling] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (isScrolling) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const sections = document.querySelectorAll('section');
    const currentSection = document.elementFromPoint(
      window.innerWidth / 2,
      window.innerHeight / 2
    )?.closest('section') as HTMLElement;
    const currentIndex = Array.from(sections).indexOf(currentSection);
    const nextIndex = currentIndex + direction;

    if (nextIndex >= 0 && nextIndex < sections.length) {
      setIsScrolling(true);
      const targetSection = sections[nextIndex] as HTMLElement;
      targetSection.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const main = mainRef.current;
    if (main) {
      main.addEventListener('wheel', handleWheel, { passive: false });
      return () => main.removeEventListener('wheel', handleWheel);
    }
  }, [isScrolling]);

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
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
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
          {/* ... diğer hero içeriği ... */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-light tracking-wider text-center mb-12">
            <span className="text-accent">Hakkımda</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-base">
              <h3 className="text-xl font-light text-accent mb-4">Eğitim & Deneyim</h3>
              {/* ... içerik ... */}
            </div>
            <div className="card-base">
              <h3 className="text-xl font-light text-accent mb-4">İlgi Alanları</h3>
              {/* ... içerik ... */}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-accent text-sm tracking-wider uppercase">Portföy</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mt-2 mb-4">
              <span className="text-text-primary">Seçkin</span>
              <span className="text-accent ml-3">Projelerim</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="card-base">
                {/* ... proje içeriği ... */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen flex items-center justify-center py-20 md:py-0">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-wider mb-4">
              <span className="text-accent">İletişim</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="card-base">
            {/* ... form içeriği ... */}
          </form>
        </div>
      </section>
    </main>
  );
}
