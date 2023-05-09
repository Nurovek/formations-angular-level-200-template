import { Injectable, inject } from "@angular/core";
import { SearchService } from "../../search/services/search.service";
import { GameService } from "./game.service";
import { Observable, switchMap } from "rxjs";
import { Games } from "../models";

@Injectable({
  providedIn: 'root'
})
export class GameBusiness {
  private readonly searchService = inject(SearchService);
  private readonly gameService = inject(GameService);

  searchAll(): Observable<Games> {
    return this.searchService.asObservable.pipe(
      switchMap(item => this.gameService.getAll(3))
    )
  }
}
