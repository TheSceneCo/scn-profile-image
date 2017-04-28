import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleComponent } from './pages/sample/sample.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/sample',
    pathMatch: 'full',
  },
  {
    path: 'sample',
    component: SampleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
