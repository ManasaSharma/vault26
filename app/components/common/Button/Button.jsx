/** Semantic link for navigation, button for an action; shared visuals use theme tokens. */
export default function Button({ href, variant = 'primary', compact = false, className = '', children, ...props }) {
  const Tag = href ? 'a' : 'button';
  return <Tag {...(href ? { href } : { type: 'button' })} {...props} className={`ui-button ui-button--${variant}${compact ? ' ui-button--compact' : ''} ${className}`.trim()}>{children}</Tag>;
}
