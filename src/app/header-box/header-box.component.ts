import { Component } from '@angular/core';

@Component({
  selector: 'app-header-box',
  standalone: true,
  imports: [],
  templateUrl: './header-box.component.html',
  styleUrl: './header-box.component.css'
})
export class HeaderBoxComponent {
  userName: string = 'Mohammad';
  userProfilePicPath: string = 'assets/mohammad.jpg';
}
