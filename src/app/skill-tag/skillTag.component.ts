import { Component, Input } from '@angular/core';


@Component({
  selector: 'skillTag',
  templateUrl: './skillTag.component.html',
  styleUrl: './skillTag.component.css'
})
export class skillTagComponent {
  @Input() skillName: string = '';
  @Input() hasSkill: boolean = false;
  @Input() isRequire: boolean = true
}
