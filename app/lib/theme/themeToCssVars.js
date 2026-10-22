/**
 * themeToCssVars.js
 *
 * Turns the theme object into CSS custom properties, so stylesheets can
 * read theme values with var(--...). The variable name is the key path,
 * joined with dashes and kebab-cased:
 *
 *   colors.textMuted                  -> --colors-text-muted
 *   typographyScale.labelMd.fontSize  -> --typography-scale-label-md-font-size
 *
 * Because names come from the path, adding a token to theme.config.js
 * needs no change here.
 */

const toKebab = (text) => text.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

export function themeToCssVars(theme, prefix = '') {
  const vars = {};

  for (const [key, value] of Object.entries(theme)) {
    const name = prefix ? `${prefix}-${toKebab(key)}` : toKebab(key);

    if (value && typeof value === 'object') {
      Object.assign(vars, themeToCssVars(value, name));
    } else {
      vars[`--${name}`] = value;
    }
  }

  return vars;
}

