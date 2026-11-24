import { copy, defaultProfile } from '@/lib/content';
import VisitorCount from '@/components/common/VisitorCount/VisitorCount';


export default function Footer() {
  return <footer className="skeleton-footer"><div className="vault-container skeleton-footer-inner"><strong>{defaultProfile.name}</strong><p>{copy.footer.description}</p><VisitorCount /><a href="#hero">{copy.footer.backToTop}</a></div></footer>;
}
