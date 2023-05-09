import { ActionReducerMap } from "@ngrx/store";
import { GamesState, gamesReducer } from "../app/features/game/store";

// Aggrégateur d'états
export interface AppState {
  games: GamesState
}

export const reducers: ActionReducerMap<AppState> = {
  games: gamesReducer
};
