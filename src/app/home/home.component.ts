import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { School } from '../models/School';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  schools: School[];
  schoolToEdit: School;

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getSchools().subscribe(schools => {
      this.schools = schools;
    })
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

  deleteSchool(event, school) {
    this.firebaseService.deleteSchool(school);
  }

  editSchool(event, school) {
    this.schoolToEdit = school;
  }
}
