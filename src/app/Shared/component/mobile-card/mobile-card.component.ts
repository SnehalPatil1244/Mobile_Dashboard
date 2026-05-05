import { Component, Input, OnInit } from '@angular/core';
import { IMobile } from '../../Models/Mobile';

@Component({
  selector: 'app-mobile-card',
  templateUrl: './mobile-card.component.html',
  styleUrls: ['./mobile-card.component.scss']
})
export class MobileCardComponent implements OnInit {
@Input() MobileObj !: IMobile
  constructor() { }

  ngOnInit(): void {
  }

}
