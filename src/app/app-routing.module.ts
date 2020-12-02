import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineAboutComponent } from './wine-about/wine-about.component';
import { WineContactComponent } from './wine-contact/wine-contact.component';
import { WineMainComponent } from './wine-main/wine-main.component';

const routes: Routes = [
  {
  path:'',
  component: WineMainComponent,
  pathMatch:'full'
  },
  {
  path:'wine',
  component: WineMainComponent,
  },
  {
  path:'about',
  component: WineAboutComponent,
  },
  {
  path:'contact',
  component: WineContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
