import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../Shared/workout.service';
import { IWorkout } from '../Shared/workout.Interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit{
  workoutList = [];
  hideForm = true;
  //Enables type of form add or edit
  form : string = 'add';
  //Used for edit
  workoutLoc : number = -1;
  editWorkoutForm : boolean = false;
  selectedWorkout : IWorkout;
  constructor(private workoutService: WorkoutService, private router : Router) { }

  ngOnInit(): void {
        // 1. Set the local "workoutList" array with the global "workoutServiceList" array via the "getworkoutList" method
        this.workoutList = this.workoutService.viewWorkoutList()

        // 2. Listening for any changes to the "workoutServiceList" array and updated our local "workoutList" array when that occurs
        this.workoutService.workoutListChanged.subscribe((updatedWorkouts) => {
          this.workoutList = updatedWorkouts;
        })
  }
  removeWorkout(loc : number){
    this.workoutService.removeWorkout(loc)
  }
  formControl(type : string, loc : number){
    this.workoutLoc = loc;
    this.form = type;
    if(this.hideForm == true){
      this.hideForm = !this.hideForm
    }
    if(this.form === 'edit'){
      this.editWorkoutForm = true;
    }
  }
  cancelForm(control : boolean){
    if(!control){
      this.hideForm = true;
    }
  }
  addWorkout(workoutName : string){
    this.workoutService.addWorkout(workoutName);
    this.hideForm = true;
  }
  editWorkoutName(workoutName : string){
    this.workoutService.editWorkoutName(workoutName, this.workoutLoc)
    this.hideForm = true;
    this.editWorkoutForm = false;
  }
  viewSelectedWorkout(loc : number){
    //console.log(this.workoutService.viewWorkout(loc));
    this.selectedWorkout = this.workoutService.viewWorkout(loc);

  }
}
