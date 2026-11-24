import './NavPillLink.scss';
export default function NavPillLink({ href, label, active = false, onClick }) {
  return <a href={href} className="navPillLink" aria-current={active ? 'location' : undefined} onClick={onClick}>{label}</a>;
}
