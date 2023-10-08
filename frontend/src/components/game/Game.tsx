import { range } from "lodash";
import GameGrid from "../gameGrid/GameGrid";
import NestedGame from "../nestedGame/NestedGame";
import type { NineTupleIndex } from "../../state/types";
import { useGameState } from "../../state/game";
import { Player } from "../../state/players";

export default function Game() {
  const { winner, nextPlayer } = useGameState();
  const subtitle =
    winner !== null ? getWinnerOrDrawMessage(winner) : `${getPlayerAsString(nextPlayer)}'s move`;
  return (
    <div>
      <h2>{subtitle}</h2>
      <GameGrid>
        {range(9).map((i) => (
          <NestedGame key={i} outerGameField={i as NineTupleIndex} />
        ))}
      </GameGrid>
    </div>
  );
}

function getPlayerAsString(player: Player) {
  return player === Player.X ? "X" : "O";
}

function getWinnerOrDrawMessage(winner: Player | "draw"): string {
  switch (winner) {
    case Player.X:
    case Player.O:
      return `${getPlayerAsString(winner)} won the game!`;
    case "draw":
      return "The game ended in a draw";
  }
}
