import { paths } from "../../paths";
import styles from "./layout.module.css";
import { Link, Outlet, useMatch } from "react-router-dom";

export default function Layout() {
  const isLandingPage = useMatch("") !== null;

  // TODO: improve layout, especially home button
  return (
    <div className={styles.container}>
      <h1>Super Tic Tac Toe</h1>
      <Outlet />
      <div className={styles.footer}>
        {!isLandingPage && (
          <Link to={paths.landingPage} className={styles.homeLink}>
            Home
          </Link>
        )}
      </div>
    </div>
  );
}
