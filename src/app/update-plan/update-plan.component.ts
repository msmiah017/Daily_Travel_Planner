import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TravelData } from '../traveldata';
import { TravelPlanService } from '../travel-plan.service';

@Component({
  selector: 'app-update-plan',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './update-plan.component.html',
  styleUrl: './update-plan.component.css'
})
export class UpdatePlanComponent {

  //Styling Codes
  

  private formatTime(date: Date): string {
    return date.toTimeString().substring(0, 5);
  }

  travelService = inject(TravelPlanService);

  applyUpdateForm = new FormGroup({
    travelDate: new FormControl(new Date().toISOString().substring(0, 10)),
    leavingTime: new FormControl(this.formatTime(new Date())),
    arrivingTime: new FormControl(this.formatTime(new Date(new Date().getTime() + 30 * 60000))),
    departureLocation: new FormControl(''),
    destinationLocation: new FormControl(''),
    travelReason: new FormControl(''),
    description: new FormControl('')
  }); 

  obtainedTravelPlanInfo: TravelData = this.travelService.existingUpdatePlanInfo;

}
