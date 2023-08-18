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
import { CarouselModule } from 'primeng/carousel';
import { MultiItemCarouselComponent } from './components/multi-item-carousel/multi-item-carousel.component';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [
    CarouselComponent,
    ButtonComponent,
    CardComponent,
    MultiItemCarouselComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    CarouselModule
  ],
  exports: [
    CarouselComponent,
    ButtonComponent,
    CardComponent,
    MultiItemCarouselComponent,
    ListComponent
  ]
})
export class SharedModule { }
