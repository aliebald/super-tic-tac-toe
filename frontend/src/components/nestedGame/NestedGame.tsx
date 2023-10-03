import styles from "./nestedGame.module.css";
import { range } from "lodash";
import GameField from "../gameField/GameField";
import GameGrid from "../gameGrid/GameGrid";
import { FieldPosition, NineTupleIndex } from "../../state/types";
import { useNestedGameState } from "../../state/game";
import { getCheckedByChar } from "../../util/util";

interface NestedGameProps
  extends Pick<FieldPosition, "outerGameField"> { }

export default function NestedGame({ outerGameField }: NestedGameProps) {
  const { checkedBy } = useNestedGameState(outerGameField);
  return (
    <div className={styles.container}>
      <div className={styles.checkedByOverlay}>{getCheckedByChar(checkedBy)}</div>
      <GameGrid className={styles.innerGrid}>
        {range(9).map((i) =>
          <GameField key={i} outerGameField={outerGameField} innerGameField={i as NineTupleIndex} />
        )}
      </GameGrid>
    </div>
  );
}
