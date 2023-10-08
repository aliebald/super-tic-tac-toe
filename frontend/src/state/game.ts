import { create } from "zustand";
import { Player } from "./players";
import { cloneDeep } from "lodash";
import { FieldPosition, NestedGameField, NineTupleIndex, OuterGameState } from "./types";
import { checkForWinner, getInitialState } from "./util";

interface GameStore {
  /** The next player that has to make a move */
  nextPlayer: Player;
  /** The next outer game where `nextPlayer` has to make a move */
  nextOuterGame: NineTupleIndex | null;
  game: OuterGameState;
  getField: (fieldPosition: FieldPosition) => NestedGameField;
  checkField: (fieldPosition: FieldPosition) => void;
}

const useGameStore = create<GameStore>((setState, getState) => ({
  nextPlayer: Player.X,
  nextOuterGame: null,
  game: getInitialState(),
  getField: ({ outerGameField, innerGameField }) => {
    return getState().game.fields[outerGameField].fields[innerGameField];
  },
  checkField: ({ outerGameField, innerGameField }) => setState((state) => {
    if (state.game.winner !== null) {
      console.error(`Cant check field, game is already won by ${state.game.winner}`);
      return state;
    }
    const newGame = cloneDeep(state.game);
    newGame.fields[outerGameField].fields[innerGameField].checkedBy = state.nextPlayer;
    newGame.fields[outerGameField].checkedBy = checkForWinner(newGame.fields[outerGameField].fields);
    if (newGame.fields[outerGameField].checkedBy !== null) {
      newGame.winner = checkForWinner(newGame.fields);
    }

    return {
      ...state,
      game: newGame,
      nextPlayer: state.nextPlayer === Player.X ? Player.O : Player.X,
      nextOuterGame: newGame.fields[innerGameField].checkedBy === null ? innerGameField : null,
    };
  }, true),

}));


export const useFieldState = (fieldPosition: FieldPosition) => useGameStore(
  ({ nextOuterGame, game, ...state }) => {
    const checkedBy = state.getField(fieldPosition).checkedBy;
    const nestedGameIsNotOver = game.fields[fieldPosition.outerGameField].checkedBy === null;
    const active = game.winner === null && (
      (nextOuterGame === null && nestedGameIsNotOver)
      || (checkedBy === null && nextOuterGame === fieldPosition.outerGameField)
    );

    return ({ active, checkedBy, checkField: () => state.checkField(fieldPosition), });
  },
  (oldState, newState) => oldState.active === newState.active && oldState.checkedBy === newState.checkedBy
);


export const useNestedGameState = (outerGameField: NineTupleIndex) => useGameStore((state) => {
  return ({ checkedBy: state.game.fields[outerGameField].checkedBy });
});

export const useGameState = () => useGameStore(({ nextPlayer, game }) => {
  return ({ winner: game.winner, nextPlayer });
});

