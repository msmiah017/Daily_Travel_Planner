import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


const routeConfig: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data:{title: 'Daily Travel Planner'}
  },
  
  {
    path: 'register',
    component: RegistrationPageComponent,
    title: 'Register' 
  }, 
  {
    path:'',
    component: LoginComponent,
    title: 'Login'
  }

];

export default routeConfig; 
