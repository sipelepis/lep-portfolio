import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
  @Input() frameWork: SlideInterface[] = [];
  @Input() progLang: SlideInterface[] = [];
  slides: SlideInterface [] = [];
  currentIndex: number = 0;
  swapTabs(tab: number){
    switch(tab){
      case 1:
        this.slides = this.frameWork;break;
      case 2:
        this.slides = this.progLang;break;
      default:
        this.slides = this.frameWork;break;
    }
  }
  getCurrentSlideUrl() {
    return this.slides[this.currentIndex].url;
  }
  getTitle(){
    return this.slides[this.currentIndex].title;
  }
  getCaption(){
    return this.slides[this.currentIndex].caption;
  }
  goToPrevious(): void{
    const isLastSlide = this.currentIndex === 0;
    const newIndex = isLastSlide ? this.slides.length - 1 : this.currentIndex - 1;
    this.currentIndex = newIndex;
  }
  goToNext(): void{
    const isLastSlide = this.currentIndex === this.slides.length-1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  constructor(){

  }
  ngOnInit(): void{
    this.swapTabs(1);
    console.log(this.slides[0].url);
  }
}
