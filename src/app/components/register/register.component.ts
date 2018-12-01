import { Component, OnInit } from '@angular/core';
//import {ClientVO  } from "../../appVO/ClienVO"
import { FormGroup ,FormControl,Validators} from "@angular/forms";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //register: ClientVO;
  myRegForm:FormGroup;
  constructor(private service: AuthService, private router: Router) {
   // this.register = new ClientVO()
  }

  ngOnInit() {
  }


  handleFormSubmit(form) {
    console.log("^^^^^" , form);
    console.log(form.value.email);

    this.service.emailSignUp(form.value).then(res => {
      alert("Registered Successfully /n Redirecting to Home by Default Logging In")
           this.router.navigate(['/']);

    }).catch(err => {
      
      console.log("res", err);
      alert("Invalid User");
      
    });






    }
}
