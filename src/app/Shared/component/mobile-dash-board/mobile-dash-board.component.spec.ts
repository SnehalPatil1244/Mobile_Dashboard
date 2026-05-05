import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashBoardComponent } from './mobile-dash-board.component';

describe('MobileDashBoardComponent', () => {
  let component: MobileDashBoardComponent;
  let fixture: ComponentFixture<MobileDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
