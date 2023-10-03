import styles from "./nestedGame.module.css";
import { range } from "lodash";
import GameField from "../gameField/GameField";
import GameGrid from "../gameGrid/GameGrid";
import { FieldPosition, NineTupleIndex } from "../../state/types";
import { useNestedGameState } from "../../state/game";
import PlayerCheckmark from "../playerCheckmark/PlayerCheckmark";

interface NestedGameProps
  extends Pick<FieldPosition, "outerGameField"> { }

export default function NestedGame({ outerGameField }: NestedGameProps) {
  const { checkedBy } = useNestedGameState(outerGameField);
  return (
    <div className={styles.container}>
      <PlayerCheckmark player={checkedBy} className={styles.checkedByOverlay} />
      <GameGrid className={`${styles.innerGrid} ${checkedBy !== null ? styles.background : ""}`}>
        {range(9).map((i) =>
          <GameField key={i} outerGameField={outerGameField} innerGameField={i as NineTupleIndex} />
        )}
      </GameGrid>
    </div>
  );
}
