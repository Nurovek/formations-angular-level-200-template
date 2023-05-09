import { Component, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit {
  tiles: Tile[] = [];

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .subscribe(tiles => this.tiles = tiles);
  }
}
