import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TravelPlanService } from '../travel-plan.service';
import { TravelData } from '../traveldata';
import { UpdatePlanComponent } from '../update-plan/update-plan.component';
import { RouterLink } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-left-box',
  standalone: true,
  imports: [ReactiveFormsModule, UpdatePlanComponent, RouterLink],
  templateUrl: './left-box.component.html',
  styleUrl: './left-box.component.css'
})

export class LeftBoxComponent {

  constructor(private travelService: TravelPlanService) { }

  private formatTime(date: Date): string {
    return date.toTimeString().substring(0, 5);
  }
  newTravelPlan: TravelData[] = [];

  // travelService = inject(TravelPlanService); 



  applyForm = new FormGroup({
    travelDate: new FormControl(new Date().toISOString().substring(0, 10)),
    leavingTime: new FormControl(this.formatTime(new Date())),
    arrivingTime: new FormControl(this.formatTime(new Date(new Date().getTime() + 30 * 60000))),
    departureLocation: new FormControl(''),
    destinationLocation: new FormControl(''),
    travelReason: new FormControl(''),
    description: new FormControl('')

  });

  submitApplication() {
    const travelPlanInfo = {
      'travelDate': this.applyForm.value.travelDate ?? '',
      'leavingTime': this.applyForm.value.leavingTime ?? '',
      'arrivingTime': this.applyForm.value.arrivingTime ?? '',
      'departureLocation': this.applyForm.value.departureLocation ?? '',
      'destinationLocation': this.applyForm.value.destinationLocation ?? '',
      'travelReason': this.applyForm.value.travelReason ?? '',
      'description': this.applyForm.value.description ?? ''
    }

    this.travelService.onApplicationSubmission(travelPlanInfo).subscribe(travelP => this.newTravelPlan.push(travelP));
   
    // console.log(this.newTravelPlan);
      // Additional logic if needed
  }
  

  // makePost(){
  //   newTravelData:  TravelData = {
  //     travelDate: new Date().toISOString().substring(0, 10),
  //     leavingTime: '09:00 AM',
  //     arrivingTime: '02:00 PM',
  //     departureLocation: 'City A',
  //     destinationLocation: 'City B',
  //     travelReason: 'Business Trip',
  //     description: 'I am traveling to attend the Annual Tech Summit in Silicon Valley. During the conference, I will participate in workshops on emerging technologies, network with industry experts, and gain insights into the latest trends. Additionally, I plan to explore nearby tech hubs for potential collaborations and visit key clients to discuss ongoing projects.',
  //   }
  // }


}
