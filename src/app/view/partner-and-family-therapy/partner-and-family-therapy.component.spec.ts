import {
    ComponentFixture,
    TestBed,
} from '@angular/core/testing';

import { PartnerAndFamilyTherapyComponent } from './partner-and-family-therapy.component';

describe('PartnerAndFamilyTherapyComponent', () => {
  let component: PartnerAndFamilyTherapyComponent;
  let fixture: ComponentFixture<PartnerAndFamilyTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerAndFamilyTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerAndFamilyTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
