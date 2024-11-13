import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Added Validators

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected styleUrls to styleUrls
})
export class LoginComponent {

  data = new FormGroup({
    userId: new FormControl('', [
      Validators.required, // Email is required
      Validators.email     // Valid email format
    ]),
    password: new FormControl('', [
      Validators.required,  // Password is required
      Validators.minLength(6) // Password must be at least 6 characters long
    ])
  });

  constructor(private httpClient: HttpClient) {}

  public handleSubmit() {
    if (this.data.invalid) {
      alert("Please fill out the form correctly.");
      return;
    }

    console.log(this.data.value);

    this.httpClient.post('http://localhost:8082/loginUser', this.data.value).subscribe((data: any) => {
      console.log(data);
      if (data === true) {
        alert("Login successful!");
      } else {
        alert("Wrong credentials. Please try again.");
      }
    });
  }

  // Getter to easily access form controls in the template
  get formControls() {
    return this.data.controls;
  }
}
