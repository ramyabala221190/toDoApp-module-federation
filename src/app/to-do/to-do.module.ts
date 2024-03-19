import { APP_INITIALIZER, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { ToDoContainerComponent } from './to-do-container/to-do-container.component';
import { RouterModule, Routes } from '@angular/router';
import { ToDoDetailComponent } from './to-do-detail/to-do-detail.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { Observable } from 'rxjs';
import { EnvConfigService } from '../env-config.service';

function appInitialization(envConfigService:EnvConfigService) :()=>Observable<any>{
  return ()=>envConfigService.loadConfig();
}

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
      provide:APP_INITIALIZER,
      useFactory:appInitialization,
      deps:[EnvConfigService],
      multi:true
    }
  ]
})
export class ToDoModule { }
