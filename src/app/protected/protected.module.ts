import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    // Impoter le SharedModule plutôt que le CommonModule :
    SharedModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule {}
