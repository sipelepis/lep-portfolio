import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CarouselComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    CarouselComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
