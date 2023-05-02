import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

// Fonction anonyme & typage. "Délégué" (délégation)
export type LazyLoadFunction = () => Observable<any>;

export class WithFlagLazyLoadingModuleStrategy implements PreloadingStrategy {
  // TODO: enlever les any
  preload(route: Route, lazyLoadedRouteAction: LazyLoadFunction): Observable<any> {
    let result = of(null);

    if (route.data && route.data.preload) {
      result = lazyLoadedRouteAction();
    }

    return result;
  }
}
