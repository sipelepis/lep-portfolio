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
    { img: ['assets/projects/relayver2-proj-1.png','assets/projects/relayver2-proj-2.png','assets/projects/relayver2-proj-3.png'], title: 'Relay Version 2', tech: 'Angular 14+, MDBootstrap, figma and @angular/pwa', caption: 'We developed a responsive web application with PWA using Figma and Angular.',url: '', alt: "Photo of Relay Version 2"},
    { img: ['assets/projects/gusi-proj-1.png','assets/projects/gusi-proj-2.png','assets/projects/gusi-proj-3.png','assets/projects/gusi-proj-4.png'], title: 'GUSI - A Digital Repository for a College at UE-Caloocan', tech: 'Angular 14+, Ubuntu 22.04, DSpace, Figma and PostgreSQL', caption: 'We built a digital repository website using DSpace.',url: '', alt: "Photo of GUSI"},
    { img: ['assets/projects/crysanthemum-hotel-proj-1.png', 'assets/projects/crysanthemum-hotel-proj-2.png', 'assets/projects/crysanthemum-hotel-proj-3.png'], title: 'Crysanthemum Hotel - Hotel Management System', tech: 'Java, NetBeans, Apache Derby', caption: 'We developed a Hotel Management System using Java and Apache Derby',url: '', alt: "Photo of Crysanthemum Hotel"},
    { img: ['assets/projects/idyip-proj-comp-1.png', 'assets/projects/idyip-proj-comp-2.png'], title: 'iDyip - A Mobile Based Fare Collection System', tech: 'Android Studio, Java, Cloud Firetstore, Android SDK and XML', caption: 'We are developing a mobile based fare collection system using Java.',url: '', alt: "Photo of iDyip"},
    { img: ['assets/projects/ecotreasure-proj-comp1.png', 'assets/projects/ecotreasure-proj-comp2.png'], title: 'EcoTreasure - A Waste Management app', tech: 'Figma, Adobe Photoshop and Adobe Illustrator', caption: ' We designed the UI/UX of a project proposal for an Ideathon, Smart 4.0.',url: '', alt: "Photo of EcoTreasure"},
    { img: ['assets/projects/hotel-de-flora-proj-1.png', 'assets/projects/hotel-de-flora-proj-2.png', 'assets/projects/hotel-de-flora-proj-3.png'], title: 'Hotel de Flora - Hotel Management System', tech: 'C#, XAMPP', caption: 'We developed a Hotel Management System using C# and XAMPP.', url: '', alt: "Photo of Hotel De Flora"},
    { img: ['assets/projects/sample-gdscuec-registration-site-proj-1.png', 'assets/projects/sample-gdscuec-registration-site-proj-2.png', 'assets/projects/sample-gdscuec-registration-site-proj-3.png'], title: 'Google Developer Student Clubs UE Caloocan - Basic Registration System', tech: 'PHP, MySQL, 000WebHost', caption: 'As a project for our web development subject, we developed a basic registration system for GDSC UE Caloocan.', url: 'https://unfashioned-rack.000webhostapp.com/', alt: "Photo of GDSC UEC's Basic Registration Website"},
  ]
  ngOnInit(): void{
    // console.log(this.projects[0].url)
  }
}
