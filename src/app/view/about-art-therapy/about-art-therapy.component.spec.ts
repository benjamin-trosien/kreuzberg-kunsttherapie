import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutArtTherapyComponent } from './about-art-therapy.component';

describe('AboutArtTherapyComponent', () => {
  let component: AboutArtTherapyComponent;
  let fixture: ComponentFixture<AboutArtTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutArtTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutArtTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
