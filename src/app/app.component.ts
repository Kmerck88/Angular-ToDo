import { Component } from '@angular/core';
import { Todo } from './todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularTodo';

  // The component must add an array of sample todo objects to the view.Each todo object should match the Todo interface.Include a mix of complete and incomplete items.
todos: Todo[] = [
    {
    
      task: 'Learn Angular',
      completed: true
  
    },    
    {  
    task: 'Build an Angular app',
      completed: false
    }
    ];
}