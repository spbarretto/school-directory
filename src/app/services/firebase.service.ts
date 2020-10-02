import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { School } from '../models/school';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  schoolCollection: AngularFirestoreCollection<School>;
  schools: Observable<School[]>;
  schoolDoc: AngularFirestoreDocument<School>;

  isLoggedIn = false
  constructor(public firebaseAuth : AngularFireAuth, public afs : AngularFirestore) {
    //this.schools = this.afs.collection('schools').valueChanges();

    this.schoolCollection = this.afs.collection('schools');
    this.schools = this.schoolCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as School;
          data.id = a.payload.doc.id;
          return data;
        });
    }));
  }

  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
    this.isLoggedIn = false
  }

  getSchools() {
    return this.schools;
  }

  addSchool(school: School) {
    this.schoolCollection.add(school);
  }

  deleteSchool(school: School) {
    this.schoolDoc = this.afs.doc(`schools/${school.id}`);
    this.schoolDoc.delete();
  }

  updateSchool(school: School) {
    console.log(school.name)
    this.schoolDoc = this.afs.doc(`schools/${school.id}`);
    this.schoolDoc.update(school);
  }
}
