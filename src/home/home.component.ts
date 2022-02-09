import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email :any;
  password :any;
  validMessage : any;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goRegister() {
    this.route.navigateByUrl("/register");

  }

  goHome() {
    let mail = localStorage.getItem('email');
    let pass = localStorage.getItem('password');
    let convert =String(mail);
    
    if(this.email == String(mail) && this.password == String(pass))
        this.route.navigateByUrl("/activity-page");
    else
     this.validMessage = "Kullanıcı adı veya Şifre hatalı !";

  }

}
