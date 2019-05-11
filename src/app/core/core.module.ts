import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, PublicModule, ProtectedModule],
  exports: [NavbarComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}

// annotation @Optional
// s’applique sur un paramètre de constructeur,
//  et permet d’indiquer qu’une dépendance est
//  optionnelle. Si la dépendance n’est pas renseignée,
//   alors c’est la valeur null qui est injectée.

// annotation @SkipSelf s’applique
// également sur un paramètre de constructeur.
//  Elle indique au mécanisme d’injection de
//   dépendance d’Angular que la résolution de
//   cette dépendance doit commencer à partir de
//    l’injecteur parent. Pour faire simple, le
//    CoreModule ne peut être instancié qu’une
//     fois, et depuis un module parent uniquement.
