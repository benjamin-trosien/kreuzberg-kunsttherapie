import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerAndFamiliyTherapyComponent } from './partner-and-familiy-therapy.component';

describe('PartnerAndFamiliyTherapyComponent', () => {
  let component: PartnerAndFamiliyTherapyComponent;
  let fixture: ComponentFixture<PartnerAndFamiliyTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAndFamiliyTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAndFamiliyTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
