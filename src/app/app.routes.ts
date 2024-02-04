import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { UpdatePlanComponent } from "./update-plan/update-plan.component";

export const routes: Routes = [
    {
      path: '',
      component: HomePageComponent,
      title: 'Home page'
    },
    {
      path: 'updatePlanPage',
      component: UpdatePlanComponent,
      title: 'Home details'
    } 
  ];

export default routes; 
 

