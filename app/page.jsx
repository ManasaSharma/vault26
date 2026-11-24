'use client';

import { copy } from '@/lib/content';

import { useEffect } from 'react';
import { showWorkshop, getVisibleAiProjects } from '@/config/sections.config';
import AILabSection from '@/components/sections/AILabSection/AILabSection';
import { useVaultStore } from '@/lib/store/vaultStore';
import Header from '@/components/layouts/Header';
import HeroSection from '@/components/sections/HeroSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';
import Footer from '@/components/layouts/Footer';
import ResumeDownload from '@/components/common/ResumeDownload/ResumeDownload';

export default function Home() {
  const fetchData = useVaultStore(state => state.fetchData);
  const data = useVaultStore(state => state.data);
  const loading = useVaultStore(state => state.loading);
  const error = useVaultStore(state => state.error);
  const aiProjects = getVisibleAiProjects(data);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.common.skip}</a>
      <Header />
      <main id="main-content" className="portfolio-main" tabIndex={-1}>
        {loading && <p className="portfolio-status" role="status">{copy.common.loading}</p>}
        {error && <p className="portfolio-status" role="status">{copy.common.loadError}<button type="button" onClick={fetchData}>{copy.common.retry}</button></p>}
        <HeroSection profile={data?.metadata} hero={data?.hero} callToAction={data?.callToAction} social={data?.social ?? []} />
        <TechStackSection dailyDrivers={data?.dailyDrivers ?? []} filters={data?.driverFilters ?? []} />
        {showWorkshop && data?.projects?.length > 0 && (
          <ProjectsSection projects={data.projects} />
        )}
        {data?.experiences?.length > 0 && (
          <ExperienceSection experiences={data.experiences} />
        )}

        {aiProjects.length > 0 && <AILabSection lab={data.aiLab} projects={aiProjects} />}

        <GetInTouchSection
          profile={data?.metadata}
          social={data?.social ?? []}
          callToAction={data?.callToAction}
        />
      </main>
      <ResumeDownload />
      <Footer />
    </>
  );
}

