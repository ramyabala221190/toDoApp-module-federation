import { Component } from '@angular/core';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.scss']
})
export class ToDoContainerComponent {
  constructor(private envConfigService:ModuleFederationConfigLibService){}

  config:configModel|undefined;

  ngOnInit(){
    this.config=this.envConfigService.getConfiguration()["todoApp"];
    }
}
