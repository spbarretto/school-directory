import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { School } from '../models/School';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit {

  @Input() schoolToEdit: School;

  school: School = {
    name: '',
    description: ''
  }
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.school.name != '' && this.school.description != '') {
      this.firebaseService.addSchool(this.school);
      this.school.name = '';
      this.school.description =  '';
    }
  }

  updateSchool(event, school) {
    this.firebaseService.updateSchool(school);
    this.school.name = '';
    this.school.description = '';
    this.schoolToEdit = null;
  }
}
