import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseInformationComponent } from './exercise-information/exercise-information.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BadLinkPageComponent } from './Shared/bad-link-page/bad-link-page.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutComponent } from './workout/workout.component';

const routes: Routes = [
  {path:'homepage', component: HomepageComponent},
  {path: 'workout-list', component: WorkoutListComponent},
  {path: 'workout-list/workout/:num/:wName', component: WorkoutComponent},
  {path: 'exercise-information', component: ExerciseInformationComponent, data : {} },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' }, //sets default route to homepage
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
