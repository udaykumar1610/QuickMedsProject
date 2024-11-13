import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username: string = 'JohnDoe';  // Replace with dynamic data as needed

  constructor(private router: Router) {}

  // Navigate to different routes based on card clicked
  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  // Logout functionality
  logout() {
    // Implement logout functionality
    console.log("User logged out");
    this.router.navigate(['/signin']);

}
}