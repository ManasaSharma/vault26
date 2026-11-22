export default function Card({ as: Tag = 'div', panel = false, className = '', children, ...props }) {
  return <Tag {...props} className={`ui-card${panel ? ' ui-panel' : ''} ${className}`.trim()}>{children}</Tag>;
}
