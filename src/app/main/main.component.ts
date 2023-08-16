import { Component } from '@angular/core';
import { SlideInterface } from '../shared/types/slide.interface';
import { ProjectInterface } from '../shared/types/project-interface';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  frameWork: SlideInterface[] =[
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/nodejs.png', title: 'NodeJS', tech:"Angular 14+", caption: 'Backend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/frameworks/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
  ]
  progLang: SlideInterface[] =[
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
    { url: 'assets/proglang/angular.png', title: 'Angular 14+', tech:"Angular 14+", caption: 'Frontend Web Development'},
  ]
  projects: ProjectInterface[]=[
    { img: 'assets/projects/relayver2-proj.png', title: 'Relay Version 2', tech: 'Angular 14+, MDBootstrap, figma and @angular/pwa', caption: 'We developed a responsive web application with PWA using Figma and Angular.',url: 'assets/projects/crysanthemum-hotel-proj-1.png'},
    { img: 'assets/projects/gusi-proj.png', title: 'GUSI - A Digital Repository for a College at UE-Caloocan', tech: 'Angular 14+, Ubuntu 22.04, DSpace, Figma and PostgreSQL', caption: 'We built a digital repository website using DSpace.',url: 'assets/projects/crysanthemum-hotel-proj-1.png'},
    // { img: '', title: '', tech: '', caption: '',url: ''},
    // { img: '', title: '', tech: '', caption: '',url: ''},
  ]
  ngOnInit(): void{
    // console.log(this.projects[0].url)
  }
}
