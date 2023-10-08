import { range } from "lodash";
import type { GameWinner, NineTuple, OuterGameState } from "./types";

export function checkForWinner(fields: NineTuple<{ checkedBy: GameWinner }>): GameWinner {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  for (const [a, b, c] of winningCombinations) {
    if (
      fields[a].checkedBy !== null &&
      fields[a].checkedBy === fields[b].checkedBy &&
      fields[a].checkedBy === fields[c].checkedBy
    ) {
      return fields[a].checkedBy;
    }
  }
  const isDraw = !fields.some((field) => field.checkedBy === null);
  return isDraw ? "draw" : null;
}

function getNineTuple<T>(elementConstructor: (index: number) => T): NineTuple<T> {
  return range(9).map((i) => elementConstructor(i)) as NineTuple<T>;
}

export function getInitialState(): OuterGameState {
  return {
    winner: null,
    fields: getNineTuple(() => ({
      checkedBy: null,
      fields: getNineTuple(() => ({ checkedBy: null })),
    })),
  };
}
