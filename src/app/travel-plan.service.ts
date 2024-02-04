import { Injectable, Inject} from '@angular/core';
import { TravelData } from './traveldata';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class TravelPlanService {
  
  constructor(private http: HttpClient) {} 

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getUrl = 'http://127.0.0.1:5000/api/v1.0/travelplans/all'

  async getAllTravelPlans(): Promise<TravelData[]> {
    const data = await fetch(this.getUrl);
    return await data.json() ?? [];
  }

  postUrl = 'http://127.0.0.1:5000/api/v1.0/travelplans/addnewplan';

  postPlanData(data: any): Observable<any> {
    return this.http.post<any>(this.postUrl, data, this.httpOptions).pipe(
    );
  }

  onApplicationSubmission(travelPlanInfo: any): Observable<any> {
    return this.postPlanData(travelPlanInfo);
  }

  deleteTravelPlan(id: string): Observable<TravelData> {
    const url = `${this.getUrl}/${id}`;
    return this.http.delete<TravelData>(url, this.httpOptions).pipe(); 
  }

  existingUpdatePlanInfo: TravelData = {
    _id: '',
    travelDate: '',
    leavingTime: '',
    arrivingTime: '',
    departureLocation: '',
    destinationLocation: '',
    travelReason: '',
    description: ''
  };


  // Update Plan codes
  assignUpdatePlanInfo(updatePlan: TravelData): void {
    this.existingUpdatePlanInfo._id = updatePlan._id;
    this.existingUpdatePlanInfo.travelDate = updatePlan.travelDate;
    this.existingUpdatePlanInfo.leavingTime = updatePlan.leavingTime;
    this.existingUpdatePlanInfo.arrivingTime = updatePlan.arrivingTime;
    this.existingUpdatePlanInfo.departureLocation = updatePlan.departureLocation;
    this.existingUpdatePlanInfo.destinationLocation = updatePlan.destinationLocation;
    this.existingUpdatePlanInfo.travelReason = updatePlan.travelReason;
    this.existingUpdatePlanInfo.description = updatePlan.description;
  }

}
  






