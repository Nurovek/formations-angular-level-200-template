import { createReducer, on } from "@ngrx/store";
import { Games } from "../models";
import { requestToLoadAllGamesSuccessAction } from "./actions";

// state de la feature games
// Importé dans AppState
export interface GamesState {
  items: Games;
}

const initialState: GamesState = {
  items: []
}

// Je créé mon reducer avec mon state
// Je m'abonne sur mes actions
export const gamesReducer = createReducer(initialState,
  // Je réagis sur une action et j'exécute cette fonction
  // Le but est de renvoyer une valeur transformée (l'action de l'effect)
  // Les 2 params : le type et l'instance (state, action);
  // L'action = ma clé, le state = ma valeur
  on(requestToLoadAllGamesSuccessAction, (state, action) =>
    // On clone le state avec le spread operator pour l'immutabilité
    ({...state, items: action.games})
  ),
);
