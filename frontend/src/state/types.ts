import type { Player } from "./players";

export type NineTuple<T> = [T, T, T, T, T, T, T, T, T];
export type NineTupleIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type GameWinner = Player | 'draw' | null;

export interface OuterGameState {
  /** Winner of the **complete** game */
  winner: GameWinner,
  fields: NineTuple<NestedGameState>;
}

export interface NestedGameField {
  checkedBy: Player | null;
}

export interface NestedGameState {
  /** Winner of the **nested** game */
  checkedBy: GameWinner,
  fields: NineTuple<NestedGameField>;
}

export interface FieldPosition {
  outerGameField: NineTupleIndex;
  innerGameField: NineTupleIndex;
}
