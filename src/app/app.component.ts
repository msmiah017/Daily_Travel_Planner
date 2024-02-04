// Built-in import statements
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule} from '@angular/common/http';

//Developed import Statements
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderBoxComponent } from './header-box/header-box.component';
import { FooterBoxComponent } from './footer-box/footer-box.component';
import { UpdatePlanComponent } from './update-plan/update-plan.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TravelPlanService } from './travel-plan.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HttpClientModule, RouterOutlet, UpdatePlanComponent, FooterBoxComponent,HeaderBoxComponent, HomePageComponent, LoginComponent, RegistrationPageComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpClient, TravelPlanService]
})


export class AppComponent {


  //Styling Codes

  title = 'DTP_Web_App';


} 
