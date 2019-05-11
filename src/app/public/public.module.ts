import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    // Impoter le SharedModule plutôt que le CommonModule :
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    LoginModule,
    RegisterModule
  ]
})
export class PublicModule {}
