import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimpleLoginComponent } from './components/simple-login/simple-login.component';
import { CaptchaLoginComponent } from './components/captcha-login/captcha-login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
{path:'', redirectTo:'/home', pathMatch:'full'},
{path:'home', component: HomeComponent},
{path:'simple-login', component: SimpleLoginComponent},
{path:'captcha-login', component: CaptchaLoginComponent},
{path:'registration', component: RegistrationComponent},
{path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [HomeComponent, SimpleLoginComponent, CaptchaLoginComponent, RegistrationComponent, PageNotFoundComponent];
