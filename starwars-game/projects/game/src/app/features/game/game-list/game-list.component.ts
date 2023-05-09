import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { Store, select } from '@ngrx/store';
import { requestToLoadAllGamesAction } from '../store/actions';
import { selectAllSucceeded } from '../store/selectors';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: GameDto[] = [];
  searchItem = '';
  private readonly store = inject(Store);
  searchInput$ = new Observable<string>;

  // games$ = this.store.select(selectAllGames);
  games$ = this.store.pipe(select(selectAllSucceeded));

  // constructor(private gameService: GameService) { }

  ngOnInit(): void {
    // J'envoie l'information qui dit que je veux mettre à jour les données
    // Mais c'est l'effect qui fait la récupération des données
    // EN GROS : je demande de mettre le state à jour, mais cette Action-là NE MET PAS A JOUR
    this.store.dispatch(requestToLoadAllGamesAction());
  }




}
