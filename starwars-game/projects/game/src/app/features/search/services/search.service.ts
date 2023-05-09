import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchValue$ = new BehaviorSubject<string>('');

  constructor() { }

  setSearch(value: string) : void {
    this.searchValue$.next(value);
  }

  get asObservable(): Observable<string> {
    return this.searchValue$.asObservable();
  }
}
