import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Hero } from '../model';

@Component({
  selector: 'dashboard-hero',
  template: `
    <div (click)="click()" class="hero">
      {{
        hero.name  }}
    </div>`,
  styleUrls: [ './dashboard-hero.component.css' ]
})
export class DashboardHeroComponent {
  @Input() hero!: Hero;
  @Output() selected = new EventEmitter<Hero>();
  click() { this.selected.emit(this.hero); }
}
