import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-course-process',
  templateUrl: './course-process.component.html',
  styleUrls: ['./course-process.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseProcessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
