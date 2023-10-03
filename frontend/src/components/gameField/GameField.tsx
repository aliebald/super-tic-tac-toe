import styles from "./gameField.module.css";
import { useFieldState } from "../../state/game";
import { FieldPosition } from "../../state/types";
import { getCheckedByChar } from "../../util/util";

export default function GameField(fieldPosition: FieldPosition) {
  const { checkedBy, checkField, active } = useFieldState(fieldPosition);
  const icon = getCheckedByChar(checkedBy);
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
      {icon}
    </button>
  );
}
