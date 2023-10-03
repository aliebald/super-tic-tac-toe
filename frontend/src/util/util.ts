import { Player } from "../state/players";

export function getCheckedByChar(checkedBy: null | Player) {
  switch (checkedBy) {
    case Player.X:
      return "X";
    case Player.O:
      return "O";
    default:
      return "";
  }
}
