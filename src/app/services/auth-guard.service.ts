import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private ang:AngularFireAuth,private authService:AuthService) { }

  canActivate():boolean{
    console.log('/////authGuardService' , this.authService.getAuth());
    this.authService.getAuth().subscribe(res => {
      console.log(res ,'reDirectAuth'); 
      if(res) {
       
       console.log('trueAuthGuard');
       return true;
      }else{
        this.router.navigate(['/']);
      console.log('flase');
      return false;
      }
    })
    return true;

  }
}
