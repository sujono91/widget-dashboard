import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { reducers } from '../store';
import { DataEffects } from '../store/effect';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([DataEffects])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
