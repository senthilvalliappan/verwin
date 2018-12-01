import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {ClientVO} from '../appVO/ClienVO'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isDisplay:Boolean;
  logedInUser:String;
  clientsCollection: AngularFirestoreCollection<ClientVO>;
  constructor(private afAuth: AngularFireAuth,private afs: AngularFirestore) { 
    this.clientsCollection = this.afs.collection('TBL_USERS');
  }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          console.log("userData");
          this.logedInUser=email;
          this.isDisplay =true;
          resolve(userData),
      err => reject(err)
    }).catch(err => {
      //if(err.code){
        this.isDisplay=false;
       console.log("res" , err);
       alert(err.message);
      //}
       });
    });
  }


  emailSignUp(client) {
  console.log("client",client)
    return this.afAuth.auth.createUserWithEmailAndPassword( client.email, client.password)
      .then((user) => {
        this.clientsCollection.add(client);
       
      })
      .catch(error => console.log(error)); 
  }

  getAuth() {
    return this.afAuth.authState;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isDisplay=false;
  }

}
