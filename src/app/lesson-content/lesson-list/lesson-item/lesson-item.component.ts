

import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/services&model/lesson.model';

@Component({
  selector: 'app-lesson-item',
  templateUrl: './lesson-item.component.html',
  styleUrls: ['./lesson-item.component.scss']
})
export class LessonItemComponent implements OnInit {
  @Input() lessons: Lesson;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
    
  }

}
