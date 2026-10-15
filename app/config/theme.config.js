/**
 * theme.config.js
 *
 * Obsidian Engineering Design System
 * All colors, fonts, spacing, and styles for vault
 * Change these = entire site looks different
 *
 * Direct 1:1 mapping to what you SEE on screen
 */

export const themeConfig = {
  // ============================================
  // COLORS (Obsidian Engineering Palette)
  // ============================================
  colors: {
    // Surface Tiers (Deep Obsidian Substrates)
    canvasBase: '#0a0a0a',                      // Tier 0 - Canvas void
    canvas: '#131315',                          // Background of entire page
    surface: '#131315',                         // Tier 1 - Panels & Bento Grids
    surfaceContainer: '#201f21',                // Mid-tier container
    surfaceContainerHigh: '#2a2a2c',            // Higher tier containers
    surfaceHighest: '#353437',                  // Highest surface tier
    surfaceGlass: 'rgba(17, 17, 19, 0.75)',    // Glassmorphic overlay

    // Text colors (optimized for dark surfaces)
    text: '#EDEDED',                            // Primary text (not pure white)
    textMuted: '#888891',                       // Secondary text (muted)
    onSurface: '#e5e1e4',                       // On surface text
    onSurfaceVariant: '#cfc2d6',                // Variant text

    // Primary Brand Colors (Violet & Magenta)
    primary: '#7E22CE',                         // Rich royal violet
    primaryLight: '#ddb8ff',                    // Light violet
    primaryContainer: '#7e22ce',                // Darker purple
    onPrimaryContainer: '#e4c5ff',              // Text on primary container

    // Secondary Brand Color (Magenta)
    secondary: '#DB2777',                       // Vivid magenta
    secondaryContainer: '#be0062',              // Secondary container

    // Tertiary (Electric Cobalt)
    tertiary: '#2932CB',                        // Deep electric cobalt
    tertiaryContainer: '#3a44d9',               // Tertiary container

    // Status & System
    statusActive: '#10B981',                    // Active/availability green
    error: '#ffb4ab',                           // Error state

    // Borders & Hairlines
    hairline: 'rgba(255, 255, 255, 0.08)',      // Subtle micro-hairline
    hairlineBright: 'rgba(255, 255, 255, 0.12)', // Brighter hairline
    borderGlow: 'rgba(126, 34, 206, 0.35)',     // Glow accent border
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
      fontSize: '56px',
      fontWeight: '400',
      lineHeight: '64px',
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
      fontSize: '40px',
      fontWeight: '400',
      lineHeight: '48px',
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
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '26px'
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
      fontSize: '13px',
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
    marginDesktop: '3rem',                      // Desktop: 48px
    marginMobile: '1.25rem',                    // Mobile: 20px

    // Modular spacing (base-4 structure)
    xs: '0.25rem',                              // 4px
    sm: '0.5rem',                               // 8px
    md: '1rem',                                 // 16px
    lg: '1.5rem',                               // 24px
    xl: '2.5rem',                               // 40px
    '2xl': '4rem',                              // 64px

    // Component specific
    cardPadding: '1.5rem',
    componentGap: '1.5rem',
    sectionGap: '6rem'
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
  // LAYOUT WIDTHS (Grid bounded at 1200px)
  // ============================================
  maxWidth: {
    sm: '28rem',                                // 448px
    md: '42rem',                                // 672px
    lg: '56rem',                                // 896px
    xl: '64rem',                                // 1024px
    full: '75rem'                               // 1200px - max content width
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

/**
 * QUICK REFERENCE
 * What you'll see when you open vault:
 *
 * Background:  Dark (#09090b)
 * Text:        White (#ffffff)
 * Buttons:     Purple (#c084fc)
 * Accents:     Light blue (#38bdf8)
 * Cards:       Dark gray (#131315)
 * Borders:     Subtle gray lines
 *
 * Fonts:
 * - Titles:    Newsreader (serif)
 * - Text:      Bricolage Grotesque (sans)
 * - Code:      JetBrains Mono (mono)
 */