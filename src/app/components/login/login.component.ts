import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Service } from '../../services/Service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) {
    console.log(window.location.href, 'window URL');
  }

  ngOnInit() {
    console.log(this.service.getAuth());
    this.service.getAuth().subscribe(res => {
      console.log(res, 'reDirect');
      if(res){
     // if (localStorage.getItem('url') !='') {
      //   console.log(`localStorage.getItem('')` ,localStorage.getItem('ur').substring(21,31));
      //   this.router.navigate([localStorage.getItem('url').substring(21,50)]);
      // } else {
        console.log('else navigate');
        this.router.navigate(['/dashBoard']);

      //}
    }
    })

  }



  handleFormSubmit(form) {
    console.log(form);
    console.log(form.value.email);
    this.service.login(form.value.email, form.value.password).then(res => {
      console.log("%%%%%%", res);
      // if (localStorage.getItem('url') != '') {
      //   console.log(`localStorage.getItem('u')` ,localStorage.getItem('url').substr(21,31));
      //   this.router.navigate([localStorage.getItem('url').substring(21,50)]);
      // } else {
      //   console.log('else navigate');
        this.router.navigate(['/dashBoard']);

     // }

    }).catch(err => {
      
      console.log("res", err);
      alert("Invalid User");
      
    });


  }
}
