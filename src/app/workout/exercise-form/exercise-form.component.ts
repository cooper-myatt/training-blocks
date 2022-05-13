import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IExercise } from 'src/app/Shared/workout.Interface';
import { WorkoutService } from 'src/app/Shared/workout.service';



@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {
  reactiveForm: FormGroup;
  newExercise: IExercise;
  workoutNum : number

  @Output() cancelControl = new EventEmitter<boolean>();

  constructor(private workoutService : WorkoutService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'WorkoutName': new FormControl(null, Validators.required),
      'minReps': new FormControl(null, Validators.required),
      'maxReps': new FormControl(null, Validators.required),
      'weight': new FormControl(null, Validators.required),
      'restTime': new FormControl(null, Validators.required),
      'bodyWeight': new FormControl(null, Validators.required),
    });
    this.workoutNum = this.route.snapshot.params['num']
  }
  cancelForm(){
    this.reactiveForm.reset
    this.cancelControl.emit(false);
  }
  onFormSubmit(){
    this.newExercise =
    {
      exerciseName: this.reactiveForm.value.WorkoutName,
      minReps : this.reactiveForm.value.minReps,
      maxReps : this.reactiveForm.value.maxReps,
      weight : this.reactiveForm.value.weight,
      restTimeMinutes : this.reactiveForm.value.restTime,
      isBodyWeight : this.reactiveForm.value.bodyWeight,
    }
    this.workoutService.addExercise(this.newExercise, this.workoutNum)
    this.cancelControl.emit(false);
    this.reactiveForm.reset();
  }
}
