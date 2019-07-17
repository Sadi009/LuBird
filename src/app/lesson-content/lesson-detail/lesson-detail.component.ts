import { LessonsService } from 'src/app/services&model/lessons.service';

import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Lesson } from './../../services&model/lesson.model';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {
  // @Input() lessonDetail: Lesson; *** without Routing
  lessonDetail: Lesson;
  id: number;
  constructor(private lessonsService: LessonsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; 
         this.lessonDetail = this.lessonsService.getLessonsIndex(this.id);
      }
    )
  }

}
