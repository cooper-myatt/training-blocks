export interface IExercise {
  exerciseName: string;
  minReps : number;
  maxReps : number;
  weight : number;
  restTimeMinutes : number;
  isBodyWeight : boolean;
}

export interface IWorkout{
  workoutName: string,
  exercises : IExercise[]
}

export interface IWorkoutList{
  workouts : IWorkout[]
}
