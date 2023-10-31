import { Link } from "react-router-dom";
import styles from "./about.module.css";
import { paths } from "../../paths";

export default function About() {
  // TODO implement
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>About</h2>
      <p>This page is work in progress</p>
      <Link to={paths.landingPage}>Go Back</Link>
    </div>
  );
}
