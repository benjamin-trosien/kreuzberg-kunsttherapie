import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTherapyComponent } from './online-therapy.component';

describe('OnlineTherapyComponent', () => {
  let component: OnlineTherapyComponent;
  let fixture: ComponentFixture<OnlineTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
