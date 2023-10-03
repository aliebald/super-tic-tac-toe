import styles from "./gameField.module.css";
import { useFieldState } from "../../state/game";
import { FieldPosition } from "../../state/types";
import PlayerCheckmark from "../playerCheckmark/PlayerCheckmark";

export default function GameField(fieldPosition: FieldPosition) {
  const { checkedBy, checkField, active } = useFieldState(fieldPosition);
  const className = `${styles.field} ${checkedBy === null ? styles.empty : ""}`;
  // console.log('Render GameField', fieldPosition);

  return (
    <button
      className={className}
      disabled={!active}
      type="button"
      onClick={() => {
        checkField();
        console.log("click");
      }}
    >
      <PlayerCheckmark player={checkedBy} />
    </button>
  );
}
