import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { requestToLoadAllGamesAction, requestToLoadAllGamesSuccessAction } from "../actions";
import { GameService } from "../../services/game.service";
import { concatMap, map } from "rxjs";

@Injectable()
export class GamesEffect {
  // On récupère toutes les actions (qui spawnent via dispatch)
  // Note: ce ne sont pas les actions qu'on a définies dans actions.ts
  private readonly actions$ = inject(Actions);
  // Normalement on va vers le GameBusiness en terme d'archi
  private readonly service = inject(GameService);

  // Création/définition de l'effect
  listGames$ = createEffect(() => this.actions$.pipe(
    // 1) Filtrer sur l'action venant du component
    // Le ofType renvoie un Observable (il faut le garder vivant)
    ofType(requestToLoadAllGamesAction),

    // 2) Requête vers l'api
    // On utilise le concatMap pour créer un autre observable (on attend que l'enfant soit terminé pour créer)
    concatMap(() => this.service.getAll(3)),

    // 3) Dispatch d'une action vers le reducer
    // On manipule l'observable précédent pour l'envoyer à l'action
    map(items => requestToLoadAllGamesSuccessAction({games: items}))
  ))

  // On gère aussi la maj du localStorage ici
}
