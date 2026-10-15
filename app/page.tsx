'use client';

import { useEffect } from 'react';
import { useVaultStore } from '@/lib/store/vaultStore';
import Header from '@/components/layouts/Header';
import HeroSection from '@/components/sections/HeroSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  const fetchData = useVaultStore(state => state.fetchData);
  const loading = useVaultStore(state => state.loading);
  const error = useVaultStore(state => state.error);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-16">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="techstack">
          <TechStackSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="contact">
          <GetInTouchSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

