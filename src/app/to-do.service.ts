import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  fetchToDos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }

  fetchToDoDetail(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos?id=${id}`)

  }
}
