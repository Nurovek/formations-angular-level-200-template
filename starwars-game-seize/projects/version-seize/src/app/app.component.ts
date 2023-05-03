import { Component } from '@angular/core';

@Component({
  standalone: true,
  // Pas d'import de CommonModule car c'est pour les composants (SCAM) enfants
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'version-seize';
}
