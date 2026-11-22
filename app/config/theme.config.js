/**
 * theme.config.js
 *
 * Vault design system — visual source: abc.html
 * All colors, fonts, spacing, and styles for vault
 * Change these = entire site looks different
 *
 * Direct 1:1 mapping to what you SEE on screen
 */

export const themeConfig = {
  // ============================================
  // COLORS (reference palette)
  // ============================================
  colors: {
    // Surface Tiers (Deep Obsidian Substrates)
    canvasBase: '#09090b',
    canvas: '#09090b',
    surface: '#121217',
    surfaceContainer: '#17171e',
    surfaceContainerHigh: '#1a1a24',
    surfaceHighest: '#22222a',
    surfaceGlass: 'rgba(13, 13, 17, 0.88)',

    // Text colors (optimized for dark surfaces)
    text: '#ffffff',
    textMuted: '#9ca3af',
    onSurface: '#e5e7eb',
    onSurfaceVariant: '#d1d5db',

    // Primary Brand Color (Violet)
    primary: '#c084fc',
    primaryLight: '#c084fc',
    primaryContainer: '#7e22ce',                // Darker purple
    onPrimaryContainer: '#e4c5ff',              // Text on primary container

    // Secondary Brand Color (Cyan)
    secondary: '#38bdf8',
    secondaryContainer: '#be0062',              // Secondary container

    // Tertiary (Electric Cobalt)
    tertiary: '#2563eb',
    blueLight: '#60a5fa',
    blueMedium: '#3b82f6',
    indigo: '#4f46e5',
    amber: '#fbbf24',
    tertiaryContainer: '#3a44d9',               // Tertiary container

    // Status & System
    statusActive: '#34d399',
    error: '#ffb4ab',                           // Error state

    // Borders & Hairlines
    hairline: 'rgba(255, 255, 255, 0.08)',      // Subtle micro-hairline
    hairlineBright: 'rgba(255, 255, 255, 0.16)',
    borderGlow: 'rgba(192, 132, 252, 0.4)',
    outline: '#988d9f',                         // Outline color
    outlineVariant: '#4c4354'                   // Outline variant
  },

  // ============================================
  // TYPOGRAPHY (Editorial vs Technical Dichotomy)
  // ============================================
  fonts: {
    serif: 'Newsreader, serif',                 // Editorial: Titles/Hero
    sans: 'Bricolage Grotesque, sans-serif',    // Interface: Main text
    mono: 'JetBrains Mono, monospace',          // Technical: Metadata/Code
  },

  // Typography scale aligned with DESIGN.md
  typographyScale: {
    headlineXl: {
      fontFamily: 'Newsreader',
      fontSize: '60px',
      fontWeight: '400',
      lineHeight: '66px',
      letterSpacing: '-0.03em'
    },
    headlineXlMobile: {
      fontFamily: 'Newsreader',
      fontSize: '36px',
      fontWeight: '400',
      lineHeight: '44px',
      letterSpacing: '-0.02em'
    },
    headlineLg: {
      fontFamily: 'Newsreader',
      fontSize: '36px',
      fontWeight: '400',
      lineHeight: '44px',
      letterSpacing: '-0.02em'
    },
    headlineMd: {
      fontFamily: 'Bricolage Grotesque',
      fontSize: '24px',
      fontWeight: '600',
      lineHeight: '32px',
      letterSpacing: '-0.01em'
    },
    headlineSm: {
      fontFamily: 'Bricolage Grotesque',
      fontSize: '18px',
      fontWeight: '600',
      lineHeight: '24px',
      letterSpacing: '-0.005em'
    },
    bodyLg: {
      fontFamily: 'Bricolage Grotesque',
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '29px'
    },
    bodyMd: {
      fontFamily: 'Bricolage Grotesque',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px'
    },
    bodySm: {
      fontFamily: 'Bricolage Grotesque',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '18px'
    },
    labelMd: {
      fontFamily: 'JetBrains Mono',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '18px',
      letterSpacing: '0.02em'
    },
    labelSm: {
      fontFamily: 'JetBrains Mono',
      fontSize: '11px',
      fontWeight: '500',
      lineHeight: '14px',
      letterSpacing: '0.06em'
    }
  },

  // Font weights
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },

  // ============================================
  // SPACING (Architectural Grid System)
  // ============================================
  spacing: {
    // Gutter system
    gutterDesktop: '1.25rem',                   // Desktop: 20px
    gutterMobile: '0.75rem',                    // Mobile: 12px

    // Margins
    marginDesktop: '1.5rem',
    marginMobile: '1.25rem',

    // Modular spacing (base-4 structure)
    xs: '0.25rem',                              // 4px
    sm: '0.5rem',                               // 8px
    md: '1rem',                                 // 16px
    lg: '1.5rem',                               // 24px
    xl: '2.5rem',                               // 40px
    '2xl': '4rem',                              // 64px

    // Component specific
    cardPadding: '1.25rem',
    componentGap: '1rem',
    sectionGap: '6rem'
  },

  // ============================================
  // Boarder widths
  // ============================================
  borderWidth: {
    thin: '1px',
  },

  // ============================================
  // BORDER RADIUS (Balanced Curvature)
  // ============================================
  radius: {
    sm: '0.25rem',                              // 4px - minimal
    md: '0.5rem',                               // 8px - default
    lg: '0.75rem',                              // 12px - buttons/inputs
    xl: '1rem',                                 // 16px - embedded media
    '2xl': '1.5rem',                            // 24px - cards/bento
    full: '9999px'                              // Pill/circular
  },

  // ============================================
  // SHADOWS & GLOWS (Layered Translucency)
  // ============================================
  shadows: {
    none: 'none',
    // Atmospheric glow on hover
    glowPrimary: '0 0 24px -4px rgba(126, 34, 206, 0.25)',
    glowSecondary: '0 0 20px -4px rgba(219, 39, 119, 0.2)',
    glowTertiary: '0 0 25px -4px rgba(41, 50, 203, 0.15)',
    // Subtle depth
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    md: '0 4px 12px -2px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 24px -4px rgba(0, 0, 0, 0.4)'
  },

  // ============================================
  // TRANSITIONS & ANIMATIONS
  // ============================================
  transitions: {
    fast: '0.15s',
    base: '0.3s',
    slow: '0.5s'
  },

  easing: {
    ease: 'ease',
    easeInOut: 'ease-in-out',
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)'
  },

  // ============================================
  // BREAKPOINTS (Responsive Grid)
  // ============================================
  breakpoints: {
    mobile: '0px',                              // Mobile-first
    tablet: '768px',                            // 8-column
    desktop: '1024px',                          // 12-column
    wide: '1280px'                              // Extra wide
  },

  // ============================================
  // LAYOUT WIDTHS (reference max-w-6xl: 1152px)
  // ============================================
  maxWidth: {
    sm: '28rem',                                // 448px
    md: '42rem',                                // 672px
    lg: '56rem',                                // 896px
    xl: '64rem',                                // 1024px
    full: '72rem'                               // 1152px including gutters
  },

  // Layout and repeated component contracts extracted from abc.html.
  layout: {
    headerHeight: '4rem',
    sectionSpace: '4rem',
    sectionSpaceMobile: '3rem',
    homeSectionGap: '2.5rem',
    heroTop: '2.5rem',
    heroTitleWidth: '56rem',
    proseWidth: '48rem',
    badgeSize: '8rem',
    badgeSizeMobile: '6rem',
    anchorOffset: '5.5rem',
  },
  components: {
    button: { height: '2.75rem', paddingX: '1.5rem', fontSize: '12px' },
    pill: { background: '#15151b', paddingX: '0.875rem', paddingY: '0.375rem' },
    card: { background: '#121217', radius: '1rem', padding: '1.25rem' },
    panel: { background: '#0e0e13', radius: '1.5rem', padding: '2.5rem', paddingMobile: '1.5rem' },
    nav: { background: '#18181e', activeBackground: 'rgba(192,132,252,0.2)' },
    badge: { background: '#0a0a0d', center: '#121218', star: '#bfdbfe' },
    techTag: { background: '#17171f' },
  },

  // ============================================
  // Z-INDEX (Stacking Context)
  // ============================================
  zIndex: {
    base: '1',
    dropdown: '10',
    sticky: '20',
    modal: '30',
    tooltip: '40',
    notification: '50'
  },

  // ============================================
  // OPACITY & GLASS EFFECTS
  // ============================================
  opacity: {
    disabled: '0.5',
    glass: '0.75'
  },

  // ============================================
  // BACKDROP FILTER
  // ============================================
  backdrop: {
    blur: 'backdrop-blur-md'                    // 16px - 24px blur
  }
};

