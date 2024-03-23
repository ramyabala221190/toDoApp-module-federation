import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';
import { Observable, map } from 'rxjs';
import { appName } from '../to-do.module';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.scss']
})
export class ToDoContainerComponent {
  constructor(private activeRoute:ActivatedRoute,@Inject(appName)public appName:string,private envConfigLibService:ModuleFederationConfigLibService){}

  //config:Observable<any>|undefined; //for lazy method
  config:configModel|undefined; //for eager method

  ngOnInit(){
    this.config=this.envConfigLibService.getConfiguration(this.appName) //for eager method
    //this.config=this.activeRoute.data; //for lazy method
    }
}
