import { Component } from '@angular/core';
import { RestService, RestConfig } from '@thescene/thescene-api-library';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
const {version: moduleVersion, name: moduleName} = require('../../package.json');

export class MyRestConfig extends RestConfig {
  clientId = environment.scnApiLibrary.clientId;
  secret = environment.scnApiLibrary.secret;
  authHost = environment.scnApiLibrary.authHost;
  apiHost = environment.scnApiLibrary.apiHost;
}

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  moduleVersion: string;
  moduleName: string;

  constructor(
    private titleService: Title,
    private translate: TranslateService
  ) {
    this.moduleVersion = moduleVersion;
    this.moduleName = moduleName;

    translate.setDefaultLang('en');
    titleService.setTitle(moduleName);
    RestService.setCredentials(new MyRestConfig());
  }
}
