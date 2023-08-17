import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';

import { ProjectInterface } from '../../types/project-interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {

  @Input() images: ProjectInterface[] =[];
  @Input() projectName: string="";
  @Input() indicators = true;

  currentIndex: number = 0;
  timeoutId?: number;
  ngOnInit(): void{
    console.log(this.images[0]);
    console.log(this.getCurrentSlideUrl());
    this.resetTimer();
  }
  getCurrentSlideUrl() {
    return `${this.images[this.currentIndex]}`;
  }
  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.images.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }
  goToNext(): void {
    const isLastSlide = this.currentIndex === this.images.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }
  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

}
