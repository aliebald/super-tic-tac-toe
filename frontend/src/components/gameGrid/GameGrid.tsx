import type { ReactNode } from "react";
import styles from "./gameGrid.module.css";

interface GameGridProps {
  children: ReactNode;
  className?: string;
}

export default function GameGrid({ children, className = "" }: GameGridProps) {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
}
