import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './components/button/button.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { CardComponent } from './components/card/card.component';
@NgModule({
  declarations: [
    CarouselComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  exports: [
    CarouselComponent,
    ButtonComponent,
    CardComponent
  ]
})
export class SharedModule { }
