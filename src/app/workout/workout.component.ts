import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IWorkout } from '../Shared/workout.Interface';
import { WorkoutService } from '../Shared/workout.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})

export class WorkoutComponent implements OnInit {
  showForm : boolean = false;
  constructor(private route: ActivatedRoute, private workoutService: WorkoutService) { }
  workoutNum : number;
  workout;
  ngOnInit(): void {
    this.workoutNum = this.route.snapshot.params['num']
    this.workout = this.workoutService.viewWorkout(this.workoutNum)

    this.workoutService.exerciseListChanged.subscribe((updatedExcercises) => {
      this.workout = updatedExcercises;
    })
  }
  cancelForm(control : boolean){
    this.showForm = control;
  }
  removeExercise(exLoc : number){

    this.workoutService.removeExercise(this.workoutNum, exLoc)
  }
  drop(event: CdkDragDrop<IWorkout[]>) {
    moveItemInArray(this.workout.exercises, event.previousIndex, event.currentIndex);
  }
}
