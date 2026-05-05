import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MobileDashBoardComponent } from './Shared/component/mobile-dash-board/mobile-dash-board.component';
import { MobileCardComponent } from './Shared/component/mobile-card/mobile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileDashBoardComponent,
    MobileCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
