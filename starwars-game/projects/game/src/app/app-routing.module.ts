import { NgModule, isDevMode } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { environment } from '../environments/environment';
import { WithFlagLazyLoadingModuleStrategy } from './shared/tools';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'user',
  // "Quand tu chargeras ce path, tu auras ce module à disposition"*
  // On le voit dans lazy chunk files
  // ATTENTION : import = promesse, pas import de classe/fonction/...
  loadChildren: () => import('./features/user/user.module').then(m => m.UserModule),
  // Variables globales de la route/du module
  data: {
    preload: true
  }
}
];

@NgModule({
  // isDevMode plutôt que vérifier si pas env prod. Se base sur une variable lors de la compil
  // preloadingStrategy: PreloadAllModules. Moins écoconception, mais plus rapide
  // Design Pattern strategy
  // INFO: implémentation Angular 13-. TODO: Angular 14+
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: WithFlagLazyLoadingModuleStrategy})],
  exports: [RouterModule],
  providers: [
    WithFlagLazyLoadingModuleStrategy
  ]
})
export class AppRoutingModule { }
