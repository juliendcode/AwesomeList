import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    // Impoter le SharedModule plutôt que le CommonModule :
    SharedModule
  ]
})
export class PlanningModule {}
