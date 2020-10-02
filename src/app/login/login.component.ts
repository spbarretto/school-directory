import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSignedIn = false;
  isRegister = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public firebaseService : FirebaseService,
  ) { }
  ngOnInit() {
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignin(email:string,password:string){
    this.firebaseService.signin(email,password)
    //if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  handleLogout(){
    this.isSignedIn = false
  }
  showRegister(){
    this.isRegister = true;
    this.router.navigate(['register']);
  }
}
