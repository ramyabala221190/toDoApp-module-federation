import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const appName=new InjectionToken("appName");

const routes: Routes = [{
  path:"",
  component:ToDoContainerComponent,
  children:[
  {
    path:"list",
    component:ToDoListComponent
  },
  {
    path:"detail/:id",
    component:ToDoDetailComponent
  }
]
}
];


@NgModule({
  declarations: [
    ToDoContainerComponent,
    ToDoDetailComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers:[
    {
      provide:appName,
      useValue:"toDoApp"
    }
  ]
})
export class ToDoModule { }
