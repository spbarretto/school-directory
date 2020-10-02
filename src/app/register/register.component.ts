import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false;
  constructor(
    private route: ActivatedRoute,
    public firebaseService : FirebaseService
  ) { }

  ngOnInit(): void {
  }

  onSignup(email:string,password:string){
   this.firebaseService.signup(email,password)
   this.isSignedIn = true;
  }
  handleLogout(){
    this.isSignedIn = false
  }
}
