import { Component } from '@angular/core';
import { SlideInterface } from '../shared/types/slide.interface';
import { ProjectInterface } from '../shared/types/project-interface';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { SkillsInterface } from '../shared/types/skills-interface';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  bio: string = " A hard-working and career-driven person looking for a CS/IT job opportunity in your company where I can provide my services while training to improve my skills in a real-world working environment. ";
  skills: string = "A dynamic and results-oriented fresh graduate with a passion for innovation and technology. With a solid foundation in fullstack web development, cybersecurity, and android app development. His dedication to continuous learning and staying up-to-date with industry trends highlights his commitment to personal and professional growth.";
  skillsets: SkillsInterface[] = [
    {title: 'IDE', listItems: ['VSCode', 'Intellij Webstorm', 'NetBeans', 'Android Studio', 'Microsoft Visual Studio 2019']},
    {title: 'Frameworks', listItems: ['Angular14+', 'NodeJS', 'Android SDK', 'TailwindCSS', 'MDBootstrap', 'Bootstrap']},
    {title: 'Programming Languages', listItems: ['TypeScript', 'Python', 'JavaScript', 'C#', 'Java', 'Kotlin']},
  ]
  ngOnInit(): void{
  }
}
