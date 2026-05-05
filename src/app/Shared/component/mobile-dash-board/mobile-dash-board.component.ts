import { Component, OnInit } from '@angular/core';
import { IMobile } from '../../Models/Mobile';
import { MobileData } from '../../consts/mobile';

@Component({
  selector: 'app-mobile-dash-board',
  templateUrl: './mobile-dash-board.component.html',
  styleUrls: ['./mobile-dash-board.component.scss']
})
export class MobileDashBoardComponent implements OnInit {
   MobileArr : Array<IMobile> = []
  constructor() { }

  ngOnInit(): void {
    this.MobileArr = MobileData

  }



}
