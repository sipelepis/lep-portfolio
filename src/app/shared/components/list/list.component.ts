import { Component, Input, OnInit } from '@angular/core';
import { SkillsInterface } from '../../types/skills-interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() skillsets: SkillsInterface[] = [];
}
