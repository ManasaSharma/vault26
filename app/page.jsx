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
  }, [fetchData]);

  return (
    <>
      <Header />
      <main className="portfolio-main">
        {loading && <p className="portfolio-status" role="status">Loading navigation data…</p>}
        {error && <p className="portfolio-status" role="status">Navigation data could not load. The layout is still available.<button type="button" onClick={fetchData}>Retry</button></p>}
        <HeroSection />
        <TechStackSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </>
  );
}

