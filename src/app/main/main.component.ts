import { Component } from '@angular/core';
import { SlideInterface } from '../shared/types/slide.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  frameWork: SlideInterface[] =[
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/nodejs.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
  ]
  progLang: SlideInterface[] =[
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', caption: 'Frontend Web Development'},
  ]
  ngOnInit(): void{}
}
