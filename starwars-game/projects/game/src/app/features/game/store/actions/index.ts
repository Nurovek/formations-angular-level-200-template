import { createAction, props } from "@ngrx/store";
import { Games } from "../../models";

export type ActionGamesProp = {
  games: Games
}

// 1) action qui communique à l'effect
// Note : l'action est préfixée [UI] pour dire d'où elle vient (émission de l'action)
// Note : le nommage c'est l'habitude d'Evan
export const requestToLoadAllGamesAction = createAction('[GAME-UI] Request to load all games');

// 2) effect pour récupérer la liste des données avec un succes (possible avec erreur)
// Note : action préfixée EFFECT car vient de l'effect
// Note : pensée OPTIMISTIQUE
// Avec props, je définis la signature des paramètres de l'action.
export const requestToLoadAllGamesSuccessAction = createAction('[GAME-EFFECT] Request to load all games success', props<ActionGamesProp>());

// On pourrait aussi faire le failure avec le catchError de l'effect


// 3) action pour maj le reducer
