import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoService } from 'src/app/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {
  constructor(private todoService:ToDoService){}

  todos$:Observable<any> | undefined;

  ngOnInit(){
    this.todos$=this.todoService.fetchToDos();
  }

}
