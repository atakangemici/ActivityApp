import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName :any;
  email :any;
  password :any;
  retryPassword :any;

  constructor(private router: Router) {}

  userRegister() {
    localStorage.setItem('userName', this.userName);
    localStorage.setItem('email', this.email);
    localStorage.setItem('password', this.password);
    localStorage.setItem('retryPassword', this.retryPassword);

    this.router.navigateByUrl("");

  }

  ngOnInit(): void {
  }

}
