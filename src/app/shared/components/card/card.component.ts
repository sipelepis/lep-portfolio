import { Component, Input, OnInit } from '@angular/core';
import { ProjectInterface } from '../../types/project-interface'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 @Input() project: any;
 ngOnInit(): void{
  console.log(this.project.url)
 }

}
