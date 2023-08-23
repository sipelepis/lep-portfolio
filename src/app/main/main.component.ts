import { Component, ElementRef  } from '@angular/core';
import { SlideInterface } from '../shared/types/slide.interface';
import { ProjectInterface } from '../shared/types/project-interface';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillsInterface } from '../shared/types/skills-interface';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('slideInFromLeftImage', [
      state('void', style({ opacity: 0,transform: 'translateX(-100%)' })),
      state('*', style({opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', animate('3000ms ease-out')),
    ]),
    trigger('slideInFromLeft', [
      state('void', style({ opacity: 0,transform: 'translateX(-100%)' })),
      state('*', style({opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', animate('2000ms ease-out')),
    ]),
    trigger('slideInFromRight', [
      state('void', style({opacity: 0, transform: 'translateX(100%)' })),
      state('*', style({opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', animate('2000ms ease-out')),
    ]),
    trigger('fadeIn', [
      state('void', style({opacity: 0, transform: 'scale(0.5)' })),
      state('*', style({opacity: 1, transform: 'scale(1)' })),
      transition(':enter', animate('2000ms ease-out')),
    ]),
  ],
})
export class MainComponent {
  constructor(private elementRef: ElementRef) {}
  isImageLoaded = false;
  bio: string = " A hard-working and career-driven person looking for a CS/IT job opportunity in your company where I can provide my services while training to improve my skills in a real-world working environment. ";
  skills: string = "A dynamic and results-oriented fresh graduate with a passion for innovation and technology. With a solid foundation in fullstack web development, cybersecurity, and android app development. His dedication to continuous learning and staying up-to-date with industry trends highlights his commitment to personal and professional growth.";
  skillsets: SkillsInterface[] = [
    {title: 'IDE', listItems: ['VSCode', 'Intellij Webstorm', 'NetBeans', 'Android Studio', 'Microsoft Visual Studio 2019']},
    {title: 'Frameworks', listItems: ['Angular14+', 'NodeJS', 'Android SDK', 'TailwindCSS', 'MDBootstrap', 'Bootstrap']},
    {title: 'Programming Languages', listItems: ['TypeScript', 'Python', 'JavaScript', 'C#', 'Java', 'Kotlin']},
  ]
  onImageLoad() {
    this.isImageLoaded = true;
  }
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnInit(): void{
  }
}
