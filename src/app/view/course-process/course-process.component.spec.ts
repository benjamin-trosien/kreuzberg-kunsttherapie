import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseProcessComponent } from './course-process.component';

describe('CourseProcessComponent', () => {
  let component: CourseProcessComponent;
  let fixture: ComponentFixture<CourseProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
