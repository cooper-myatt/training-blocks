import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AppNavbarComponent } from './navbar/app-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkoutFormComponent } from './workout-list/workout-form/workout-form.component';
import { ExerciseInformationComponent } from './exercise-information/exercise-information.component';
import { BadLinkPageComponent } from './Shared/bad-link-page/bad-link-page.component';
import { ExerciseFormComponent } from './workout/exercise-form/exercise-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    WorkoutComponent,
    ScheduleComponent,
    AppNavbarComponent,
    HomepageComponent,
    WorkoutFormComponent,
    ExerciseInformationComponent,
    BadLinkPageComponent,
    ExerciseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
