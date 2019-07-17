import { LessonIntroComponent } from './lesson-content/lesson-intro/lesson-intro.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LessonContentComponent } from './lesson-content/lesson-content.component';
import { LessonDetailComponent } from './lesson-content/lesson-detail/lesson-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lessons', component: LessonContentComponent, children: [
    { path: '', component: LessonIntroComponent },
    { path: ':id', component: LessonDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
