import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualTherapyComponent } from './individual-therapy.component';

describe('IndividualTherapyComponent', () => {
  let component: IndividualTherapyComponent;
  let fixture: ComponentFixture<IndividualTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
