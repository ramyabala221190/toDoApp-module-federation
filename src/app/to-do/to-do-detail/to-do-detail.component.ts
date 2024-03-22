import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, mergeMap } from 'rxjs';
import { ToDoService } from 'src/app/to-do.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent {
  constructor(private activeRoute:ActivatedRoute,private todoService:ToDoService){}

  todoDetail$:Observable<any>|undefined;

  ngOnInit(){
    this.todoDetail$=this.activeRoute.paramMap.pipe(
      mergeMap((params:any)=>{
      return this.todoService.fetchToDoDetail(params.get('id'))
    }))
  }
}
