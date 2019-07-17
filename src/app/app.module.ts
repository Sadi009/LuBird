import { ContentService } from './services&model/content.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LessonContentComponent } from './lesson-content/lesson-content.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LessonDetailComponent } from './lesson-content/lesson-detail/lesson-detail.component';
import { LessonListComponent } from './lesson-content/lesson-list/lesson-list.component';
import { LessonItemComponent } from './lesson-content/lesson-list/lesson-item/lesson-item.component';
import { LessonsService } from './services&model/lessons.service';
import { LessonIntroComponent } from './lesson-content/lesson-intro/lesson-intro.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    LessonContentComponent,
    HomeContentComponent,
    LessonDetailComponent,
    LessonListComponent,
    LessonItemComponent,
    LessonIntroComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContentService, LessonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
