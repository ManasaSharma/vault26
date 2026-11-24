// Enable when the workshop content is ready. Keeps the section and navigation in sync.
export const showWorkshop = false;

// The current Calendly event returns 404. Enable after replacing it with a working link.
export const bookingEnabled = false;

export function isPublicHttpsUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && Boolean(url.hostname) && !url.username && !url.password;
  } catch { return false; }
}

// A flag alone cannot expose an empty lab or unfinished project.
export function getVisibleAiProjects(data) {
  if (data?.featureFlags?.aiLab !== true || !Array.isArray(data?.aiLab?.projects)) return [];
  return data.aiLab.projects.filter(project =>
    project && project.status === 'published' && typeof project.id === 'string' && project.id.trim() &&
    typeof project.title === 'string' && project.title.trim() && isPublicHttpsUrl(project.demoUrl)
  );
}

export function isNavigationItemVisible(item, aiLabVisible) {
  if (item.href === '#projects') return showWorkshop;
  if (item.href === '#ai-lab') return aiLabVisible;
  return true;
}
