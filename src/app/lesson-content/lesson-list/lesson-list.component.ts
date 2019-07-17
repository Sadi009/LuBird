
import { Content } from './../../services&model/content.model';
import { Lesson } from './../../services&model/lesson.model';
import { LessonsService } from './../../services&model/lessons.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[];
  content: Content[];

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.lessons = this.lessonsService.getLessons();
  }
  
}