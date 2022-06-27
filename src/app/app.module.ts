import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './Shared/services/auth.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';

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
import { DashboardComponent } from './firebase/dashboard/dashboard.component';
import { SignInComponent } from './firebase/sign-in/sign-in.component';
import { SignUpComponent } from './firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './firebase/forgot-password/forgot-password.component';
import { WelcomeComponent } from './firebase/Welcome/welcome.componenet';



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
    ExerciseFormComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
