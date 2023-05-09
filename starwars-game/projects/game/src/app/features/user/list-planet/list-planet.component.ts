import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomListComponent } from '../../../shared/ui/custom-list/custom-list.component';

@Component({
  selector: 'game-list-planet',
  standalone: true,
  imports: [CommonModule, CustomListComponent],
  templateUrl: './list-planet.component.html',
  styleUrls: ['./list-planet.component.css']
})
export class ListPlanetComponent {

}
