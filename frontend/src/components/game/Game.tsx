import { range } from "lodash";
import GameGrid from "../gameGrid/GameGrid";
import NestedGame from "../nestedGame/NestedGame";
import { NineTupleIndex } from "../../state/types";
import { useGameState } from "../../state/game";
import { getCheckedByChar } from "../../util/util";

export default function Game() {
  const { winner, nextPlayer } = useGameState();
  return (
    <div>
      <h2>{winner !== null ? `${getCheckedByChar(winner)} won the game!` : `${getCheckedByChar(nextPlayer)}'s move`}</h2>
      <GameGrid>
        {range(9).map((i) =>
          <NestedGame key={i} outerGameField={i as NineTupleIndex} />
        )}
      </GameGrid>
    </div>
  );
}
