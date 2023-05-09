import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { changeStateCell, Tile, TileCell } from './models';
import { Observable, fromEvent, interval, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit, AfterViewInit, AfterContentInit {
  timer$ !: Observable<number>;
  @ViewChild('timer') timer !: ElementRef<HTMLButtonElement>;

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  };
  cells: TileCell[] = [];



  ngAfterContentInit(): void {

  }

  ngAfterViewInit(): void {
    fromEvent(this.timer.nativeElement, 'click').pipe(
      tap(() => console.info('click')),
      switchMap(() => interval(1000)),
      tap(res => console.log('res : ', res))
    ).subscribe(ret => {
      console.info(ret)
    })
  }


  ngOnInit(): void {

  }

  logView() {
  }

  onClick() {
  }

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

  displayTime(time = 0) {
    console.log(time+1)
  }

  startTime(): void {
    this.timer$ = new Observable((subscriber) => {
      setInterval(() => {
        subscriber.next(0);
        this.displayTime()
      }, 1000)
    })
    // Page blanche sans regarder...
    // this.timer$.next(0)
  }

}
