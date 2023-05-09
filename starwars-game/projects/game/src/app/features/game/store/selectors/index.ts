// But des selectors : ramener les données

import { createSelector } from "@ngrx/store";
import { AppState } from "projects/game/src/store";

// Etape 1 : à faire une fois par feature module
// Je dis ce que je veux "fouiller" dans mon state (par feature)
export const selectState = (app: AppState) => app.games

// Liste des MES selectors
// Je fouille sur le state ce que je veux, puis je le recupère
export const selectAllGames = createSelector(selectState, state => state.items)
export const selectAllSucceeded = createSelector(selectAllGames, games => games.filter(game => game.success))

// On peut aussi faire des sélecteurs qui peuvent servir aux guards
// Les selectors sont des fonctions de projection

// 1) Définir le store global
// 2) Définir les stores par feature
// 3) Définir les actions (clé + valeur)
// 4) Définir les reducers
// 5) Définir les effects
// 6) Définir les selectors
