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
  const data = useVaultStore(state => state.data);
  const loading = useVaultStore(state => state.loading);
  const error = useVaultStore(state => state.error);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" className="portfolio-main" tabIndex={-1}>
        {loading && <p className="portfolio-status" role="status">Loading portfolio…</p>}
        {error && <p className="portfolio-status" role="status">Portfolio data could not load. The layout is still available.<button type="button" onClick={fetchData}>Retry</button></p>}
        <HeroSection profile={data?.metadata} hero={data?.hero} callToAction={data?.callToAction} />
        <TechStackSection dailyDrivers={data?.dailyDrivers ?? []} filters={data?.driverFilters ?? []} />
        {data?.projects?.length > 0 && (
          <ProjectsSection projects={data.projects} />
        )}
        {data?.experiences?.length > 0 && (
          <ExperienceSection experiences={data.experiences} />
        )}
        {data?.skills?.length > 0 && (
          <SkillsSection skills={data.skills} />
        )}

        <GetInTouchSection
          profile={data?.metadata}
          social={data?.social ?? []}
          callToAction={data?.callToAction}
        />
      </main>
      <Footer />
    </>
  );
}

