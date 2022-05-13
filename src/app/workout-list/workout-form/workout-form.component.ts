import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkoutService } from '../../Shared/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {
  reactiveForm: FormGroup;
  @Output() WorkoutName = new EventEmitter<string>();
  @Output() cancelControl = new EventEmitter<boolean>();
  @Input() editForm: boolean = false;

  constructor(private workoutService : WorkoutService) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'WorkoutName': new FormControl(null, Validators.required)
    });
  }

onFormSubmit() {
  this.WorkoutName.emit(this.reactiveForm.value.WorkoutName);
  this.cancelControl.emit(true);
  this.reactiveForm.reset();
}
cancel(){
  this.cancelControl.emit(false);
  this.reactiveForm.reset();
}
}
