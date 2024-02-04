import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { HeaderBoxComponent } from '../header-box/header-box.component';
import { LeftBoxComponent } from '../left-box/left-box.component';
import { CenterBoxComponent } from '../center-box/center-box.component';
import { RightBoxComponent } from '../right-box/right-box.component';
import { FooterBoxComponent } from '../footer-box/footer-box.component';
import { UpdatePlanComponent } from '../update-plan/update-plan.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TravelPlanService } from '../travel-plan.service';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeaderBoxComponent, HeaderBoxComponent, LeftBoxComponent, CenterBoxComponent, RightBoxComponent, FooterBoxComponent, HttpClientModule, UpdatePlanComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
