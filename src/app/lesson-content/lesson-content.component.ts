import { Lesson } from 'src/app/services&model/lesson.model';
import { LessonsService } from './../services&model/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-content',
  templateUrl: './lesson-content.component.html',
  styleUrls: ['./lesson-content.component.scss']
})
export class LessonContentComponent implements OnInit {
  selectedLesson: Lesson;
  constructor(private lessonsServece: LessonsService) { }

  ngOnInit() {
    this.lessonsServece.lessonSelected.subscribe(
      (lesson: Lesson) => {
        this.selectedLesson = lesson;
      }
    );
  }

}
