import { Component, Inject } from '@angular/core';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';
import { appName } from '../to-do.module';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.scss']
})
export class ToDoContainerComponent {
  constructor(private envConfigService:ModuleFederationConfigLibService, @Inject(appName)public appName:string){}

  config:configModel|undefined;

  ngOnInit(){
    console.log(this.envConfigService.getConfiguration(this.appName))
    this.config=this.envConfigService.getConfiguration(this.appName);
    }
}
