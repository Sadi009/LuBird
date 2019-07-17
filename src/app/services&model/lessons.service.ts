
import { Lesson } from './lesson.model';
import { EventEmitter } from '@angular/core';


export class LessonsService {
    lessonSelected = new EventEmitter<Lesson>();

    private lessons: Lesson[] = [
        new Lesson('Lesson 1', '01', 'Lesson for chapter 1'),
        new Lesson('Lesson 2', '02', 'Lesson for chapter 2'),
        new Lesson('Lesson 3', '03', 'Lesson for chapter 3'),
        new Lesson('Lesson 4', '04', 'Lesson for chapter 4'),
        new Lesson('Lesson 5', '01', 'Lesson for chapter 5'),
        new Lesson('Lesson 6', '02', 'Lesson for chapter 6'),
        new Lesson('Lesson 7', '03', 'Lesson for chapter 7'),
        new Lesson('Lesson 8', '04', 'Lesson for chapter 8')
    ];
    getLessons() {
        return this.lessons.slice();
    }
    getLessonsIndex(index: number) {
        return this.lessons[index];
    }

}