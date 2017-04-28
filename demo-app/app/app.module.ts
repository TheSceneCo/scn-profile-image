import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScnLoginModule, SocialLoginConfig } from  '@thescene/scn-login';
import { LoginComponent } from './pages/login/login.component';

import { SampleComponent } from './pages/sample/sample.component';
import { ScnImageUploadModule } from '../../src/scn-image-upload/scn-image-upload.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    ScnLoginModule.forRoot(),
    ScnImageUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
