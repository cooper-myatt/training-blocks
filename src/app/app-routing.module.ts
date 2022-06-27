import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseInformationComponent } from './exercise-information/exercise-information.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BadLinkPageComponent } from './Shared/bad-link-page/bad-link-page.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { SignInComponent } from './firebase/sign-in/sign-in.component';
import { SignUpComponent } from './firebase/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './firebase/forgot-password/forgot-password.component';
import { DashboardComponent } from './firebase/dashboard/dashboard.component';
import { WelcomeComponent } from './firebase/Welcome/welcome.componenet';

import { AuthGuard } from './Shared/guard/authentication.guard';

const routes: Routes = [
  { path: '',   redirectTo: '/sign-in', pathMatch: 'full'},


  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent},
  {path:'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'workout-list', component: WorkoutListComponent, canActivate: [AuthGuard]},
  {path: 'workout-list/workout/:num/:wName', component: WorkoutComponent, canActivate: [AuthGuard]},
  {path: 'exercise-information', component: ExerciseInformationComponent, data : {}, canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: BadLinkPageComponent } //sets any bad link request to send to the bad link component html
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
