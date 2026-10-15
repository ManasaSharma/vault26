
/**
 * sections.config.js
 *
 * HOW to display Hero Section
 * (Data comes from API, this controls appearance)
 *
 * No data values here - only layout/animation settings
 */

export const sectionsConfig = [
  // ============================================
  // SECTION 1: HERO
  // ============================================
  {
    id: 'hero',
    type: 'HeroSection',
    enabled: true,
    order: 1,
    props: {
      // What to show
      showMeta: true,               // Show location + years
      showBadge: true,              // Show rotating badge
      showCTA: true,                // Show CTA buttons

      // Badge animation
      badgeAnimationDuration: 20,   // seconds
      badgeAnimationEasing: 'linear',

      // Cards/Tiles layout
      showCards: true,
      cardsLayout: 'grid',          // grid layout
      cardsColumns: 4,              // 4 tiles per row max
      cardsGap: '1.5rem',           // spacing between cards

      // Card animations
      cardAnimation: 'hover-lift',  // 'hover-lift', 'scale', 'glow'
      cardStagger: true,            // Stagger on load
      cardStaggerDelay: 0.1         // delay (seconds)
    }
  }
];

