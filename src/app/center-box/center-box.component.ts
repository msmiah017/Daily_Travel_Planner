import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelData } from '../traveldata';
import { TravelPlanService } from '../travel-plan.service';
import { UpdatePlanComponent } from '../update-plan/update-plan.component';
import { RouterLink } from '@angular/router';
// import { HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-center-box',
  standalone: true,
  imports: [CommonModule, UpdatePlanComponent, RouterLink],
  templateUrl: './center-box.component.html',
  styleUrl: './center-box.component.css', 

})
export class CenterBoxComponent {

  travelData: TravelData[] = [];
  isLoading: boolean = true;

  travelPlanService = inject(TravelPlanService);

  constructor(){
    this.travelPlanService.getAllTravelPlans().then((travelPlanList: TravelData[])=>{ 
      this.travelData = travelPlanList;
      // console.log(this.travelData)
      this.isLoading = false;
    }); 
  } 

  deletePlan(travelPlan: TravelData, id: string): void {
    // this.travelData = this.travelData.filter(plan => plan !== travelPlan);
    this.travelPlanService.deleteTravelPlan(id).subscribe(); 
  }

  pushUpdatePlanInfo(updatePlan: TravelData): void {
    this.travelPlanService.assignUpdatePlanInfo(updatePlan);
  }


} 









  // travelData: TravelData[] = [

  //   {
  //     travelDate: new Date().toISOString().substring(0, 10),
  //     leavingTime: '09:00 AM',
  //     arrivingTime: '02:00 PM',
  //     departureLocation: 'City A',
  //     destinationLocation: 'City B',
  //     travelReason: 'Business Trip',
  //     description: 'I am traveling to attend the Annual Tech Summit in Silicon Valley. During the conference, I will participate in workshops on emerging technologies, network with industry experts, and gain insights into the latest trends. Additionally, I plan to explore nearby tech hubs for potential collaborations and visit key clients to discuss ongoing projects.',
  //   },
  //   {
  //     travelDate: new Date().toISOString().substring(0, 10),
  //     leavingTime: '09:00 AM',
  //     arrivingTime: '02:00 PM',
  //     departureLocation: 'City A',
  //     destinationLocation: 'City B',
  //     travelReason: 'Business Trip',
  //     description: 'I am traveling to attend the Annual Tech Summit in Silicon Valley. During the conference, I will participate in workshops on emerging technologies, network with industry experts, and gain insights into the latest trends. Additionally, I plan to explore nearby tech hubs for potential collaborations and visit key clients to discuss ongoing projects.',
  //   },
  //   {
  //     travelDate: new Date().toISOString().substring(0, 10),
  //     leavingTime: '09:00 AM',
  //     arrivingTime: '02:00 PM',
  //     departureLocation: 'City A',
  //     destinationLocation: 'City B',
  //     travelReason: 'Business Trip',
  //     description: 'I am traveling to attend the Annual Tech Summit in Silicon Valley. During the conference, I will participate in workshops on emerging technologies, network with industry experts, and gain insights into the latest trends. Additionally, I plan to explore nearby tech hubs for potential collaborations and visit key clients to discuss ongoing projects.',
  //   }


  // ]; 