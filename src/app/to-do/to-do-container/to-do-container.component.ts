import { Component } from '@angular/core';
import { EnvConfigService, envConfigModel } from 'src/app/env-config.service';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.scss']
})
export class ToDoContainerComponent {
  constructor(private envConfigService:EnvConfigService){}

  config:envConfigModel|undefined;

  ngOnInit(){
    console.log("ngOnInit in todocontainer")
    this.config=this.envConfigService.fetchEnvConfig();
    }
}
