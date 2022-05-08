import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkshopsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
