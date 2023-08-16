import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';

import { ProjectInterface } from '../../types/project-interface';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {

  // @Input() projects: ProjectInterface[] = [];
  @Input() indicators = true;
  
  selectedIndex: number = 0;
  currentIndex: number = 0;

  timeoutId?: number;

  // ngOnDestroy() {
  //   window.clearTimeout(this.timeoutId);
  // }
  // resetTimer() {
  //   if (this.timeoutId) {
  //     window.clearTimeout(this.timeoutId);
  //   }
  //   this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  // }
  // goToNext(): void {
  //   const isLastSlide = this.currentIndex === this.projects.length - 1;
  //   const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

  //   this.resetTimer();
  //   this.currentIndex = newIndex;
  // }

  // ngOnInit(): void{
  //   this.resetTimer();
  // }
}
