import type { Player } from "./players";

export type NineTuple<T> = [T, T, T, T, T, T, T, T, T];
export type NineTupleIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface OuterGameState {
  /** Winner of the **complete** game */
  winner: Player | null,
  fields: NineTuple<NestedGameState>;
}

export interface NestedGameField {
  checkedBy: Player | null;
}

export interface NestedGameState {
  /** Winner of the **nested** game */
  checkedBy: Player | null,
  fields: NineTuple<NestedGameField>;
}

export interface FieldPosition {
  outerGameField: NineTupleIndex;
  innerGameField: NineTupleIndex;
}
