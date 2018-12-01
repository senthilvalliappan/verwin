import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Service } from '../../services/Service';
import { ClientVO } from '../../appVO/ClienVO';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  clients: ClientVO[];
  constructor(private _actRoute: ActivatedRoute,private router: Router,private _authService: AuthService, private myser: Service) {
   
    


    this._authService.getAuth().subscribe(res => {
      console.log(res ,'dashBoard'); 
      if(res) {
         
      }/*else{
        this.router.navigate(['/']);
      }*/
    })
   
    this.myser.getClients().subscribe(result => {
      this.clients = result;
      console.log("this.clients",this.clients)
    });
   }

  ngOnInit() {
  }

  logOut(){
    this._authService.logout();
    this.router.navigate(['/']);
  }

 // getData(){
    
  //}
}
