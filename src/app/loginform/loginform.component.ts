import { Component, OnInit } from '@angular/core';
//import RouterModule from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router) { 
   
     
  }

  
  username:string = '';
  password:string;
  formValid:boolean = true;

  ngOnInit() {
  }


  login(username,password){
    
    this.username=username;
    this.password = password;
    console.log(username,password);
    this.httpClient.post(`http://c37db6cc.ngrok.io/login`,{
      username: this.username,
      password: this.password

    })
    .subscribe(
      (data:any) => {

        console.log(data);
        if(data.username != null){
          this.router.navigate(['./consumerhome'])
        }
        else{
          this.formValid = false;
          
          this.router.navigate(['./loginconsumer'])
        }
      }

    )

    

    //this.router.navigate(['./signupconsumer'])
    

  }
  

}
