import './GalaxyBackground.scss';

// Seeded positions keep server/client markup identical and avoid a repeating tile.
const stars = Array.from({ length: 76 }, (_, index) => {
  const seed = (index * 7919 + 104729) % 65521;
  return { left: `${(seed % 1000) / 10}%`, top: `${((seed * 37) % 1000) / 10}%`, size: index % 17 === 0 ? '2px' : '1px', opacity: .16 + (index % 5) * .065 };
});

export default function GalaxyBackground() {
  return <div className="galaxy-background" aria-hidden="true">{stars.map((star, index) => <span key={index} style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity }} />)}</div>;
}
