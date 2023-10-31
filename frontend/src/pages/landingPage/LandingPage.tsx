import { Link } from "react-router-dom";
import styles from "./landingPage.module.css";

export interface LandingPageLink {
  label: string;
  path: string;
}

interface LandingPageProps {
  links: LandingPageLink[];
}

export default function LandingPage({ links }: LandingPageProps) {
  return (
    <div className={styles.container}>
      <nav>
        <ul className={styles.list}>
          {links.map(({ label, path }) => (
            <li key={path}>
              <Link to={path} className={styles.item}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
