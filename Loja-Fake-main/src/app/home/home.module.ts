import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PipesModule } from '../pipes/pipes.module';
import { DestaqueDirective } from '../directives/destaque.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PipesModule
  ],
  declarations: [HomePage, DestaqueDirective ]
})
export class HomePageModule {}
