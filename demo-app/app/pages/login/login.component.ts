import { Component, OnInit } from '@angular/core';
import { OAuth2Service } from '@thescene/thescene-api-library';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private oAuth2Service: OAuth2Service) { }

  ngOnInit() {
  }

}
