import { Component } from '@angular/core';
import { ProjectInterface } from '../../types/project-interface';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0, transform: 'scale(0.5)' })),
      state('*', style({opacity: 1, transform: 'scale(1)' })),
      transition(':enter', animate('2000ms ease-out')),
    ]),
  ]
})
export class MultiItemCarouselComponent {
  images: { random: string; picture: string; }[] = []; 
  projects: ProjectInterface[] =[];
  responsiveOptions;

  constructor() {
      this.responsiveOptions = [{
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1,
    },
    {
      breakpoint: '1280px',
      numVisible: 2,
      numScroll: 1,
    }];
  }

  
  
  ngOnInit(): void {
    this.projects=[
      { img: ['assets/projects/lepmoran-proj-1.png', 'assets/projects/lepmoran-proj-2.png', 'assets/projects/lepmoran-proj-1.png'], title: 'Portfolio Website of Phillip Jan M. Moran', tech: 'Angular, Angular Material, EmailJS, Mailgun, Vercel', caption: 'As a project for our web development subject, we developed a basic registration system for GDSC UE Caloocan.', url: 'https://lepmoran.me', alt: "Photo of Philllip Moran's Website Portfolio"},
      { img: ['assets/projects/ecotreasure-proj-comp1.png', 'assets/projects/ecotreasure-proj-comp2.png'], title: 'EcoTreasure - A Waste Management app', tech: 'Figma, Adobe Photoshop and Adobe Illustrator', caption: ' We designed the UI/UX of a project proposal for an Ideathon, Smart 4.0.',url: '', alt: "Photo of EcoTreasure"},
      { img: ['assets/projects/gusi-proj-1.png','assets/projects/gusi-proj-2.png','assets/projects/gusi-proj-3.png','assets/projects/gusi-proj-4.png'], title: 'GUSI - A Digital Repository for a College at UE-Caloocan', tech: 'Angular 14+, Ubuntu 22.04, DSpace, Google Analytics, Figma and PostgreSQL', caption: 'We built a digital repository website using DSpace.',url: '', alt: "Photo of GUSI"},
      { img: ['assets/projects/relayver2-proj-1.png','assets/projects/relayver2-proj-2.png','assets/projects/relayver2-proj-3.png'], title: 'Relay Version 2', tech: 'Angular 14+, MDBootstrap, figma and @angular/pwa', caption: 'We developed a responsive web application with PWA using Figma and Angular.',url: '', alt: "Photo of Relay Version 2"},
      { img: ['assets/projects/idyip-proj-comp-1.png', 'assets/projects/idyip-proj-comp-2.png'], title: 'iDyip - A Mobile Based Fare Collection System', tech: 'Android Studio, Java, Cloud Firetstore, Android SDK and XML', caption: 'We are developing a mobile based fare collection system using Java.',url: '', alt: "Photo of iDyip"},
      { img: ['assets/projects/hotel-de-flora-proj-1.png', 'assets/projects/hotel-de-flora-proj-2.png', 'assets/projects/hotel-de-flora-proj-3.png'], title: 'Hotel de Flora - Hotel Management System', tech: 'C#, XAMPP', caption: 'We developed a Hotel Management System using C# and XAMPP.', url: '', alt: "Photo of Hotel De Flora"},
      { img: ['assets/projects/sample-gdscuec-registration-site-proj-1.png', 'assets/projects/sample-gdscuec-registration-site-proj-2.png', 'assets/projects/sample-gdscuec-registration-site-proj-3.png'], title: 'Google Developer Student Clubs UE Caloocan - Basic Registration System', tech: 'PHP, MySQL, 000WebHost', caption: 'As a project for our web development subject, we developed a basic registration system for GDSC UE Caloocan.', url: 'https://unfashioned-rack.000webhostapp.com/', alt: "Photo of GDSC UEC's Basic Registration Website"},
      { img: ['assets/projects/crysanthemum-hotel-proj-1.png', 'assets/projects/crysanthemum-hotel-proj-2.png', 'assets/projects/crysanthemum-hotel-proj-3.png'], title: 'Crysanthemum Hotel - Hotel Management System', tech: 'Java, NetBeans, Apache Derby', caption: 'We developed a Hotel Management System using Java and Apache Derby',url: '', alt: "Photo of Crysanthemum Hotel"},
    ]
    this.images = [
        {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
        {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
        {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
        {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
        {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
        {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
    ];
  }
}
