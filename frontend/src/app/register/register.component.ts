import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; // Import Validators

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class RegisterComponent {

  register  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), // Added email validation
    name: new FormControl('', [Validators.required]), // Name should be required
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$') // Mobile number should be 10 digits
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6) // Password should have at least 6 characters
    ])
  });

  constructor(private httpClient: HttpClient) {}

  public handleSubmit() {
    if (this.register.invalid) {
      // If form is invalid, show alert
      alert("Please fill in the form correctly!");
      return;
    }

    console.log(this.register.value);

    this.httpClient.post('http://localhost:8082/addUser', this.register.value).subscribe((data:any) => {
      alert("Registration Successfully !!");
    }, error => {
      console.log(error);
    });
  }

  // Getter for easy access to form controls in template
  get formControls() {
    return this.register.controls;
  }
}
