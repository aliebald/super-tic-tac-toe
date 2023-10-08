import { Player } from "../../state/players";
import type { GameWinner } from "../../state/types";

interface PlayerCheckmarkProps {
  player: GameWinner;
  className?: string;
}

export default function PlayerCheckmark({ player, className }: PlayerCheckmarkProps) {
  switch (player) {
    case null:
    case "draw":
      return <></>;
    case Player.X:
      return (
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}>
          <line
            x1="0.5"
            y1="0.5"
            x2="9.5"
            y2="9.5"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <line
            x1="0.5"
            y1="9.5"
            x2="9.5"
            y2="0.5"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      );
    case Player.O:
      return (
        <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" className={className}>
          <circle cx="5" cy="5" r="4.5" fill="none" stroke="black" strokeWidth="1" />
        </svg>
      );
  }
}
