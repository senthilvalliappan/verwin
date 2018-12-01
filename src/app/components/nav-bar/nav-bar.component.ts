import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientVO } from '../../appVO/ClienVO';
//import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isDisplay:Boolean;
  loginUserName:String;
  clients: ClientVO[];
  constructor(private service: AuthService,private router: Router) { }

  ngOnInit() {
    this.service.getAuth().subscribe(res => {
      console.log(res, 'reDirect');
      if(res){
      //  this.isDisplay = this.service.isDisplay;
      this.isDisplay = true;
        this.loginUserName =this.service.logedInUser;
    }else{
      this.isDisplay = false;
    }
  
  });
    
   
  }
  logOut(){
    this.service.logout();
    // this.isDisplay = this.service.isDisplay;
    this.isDisplay = false;
    this.router.navigate(['/']);
  }
}
  
