import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.css']
})
export class LoginProviderComponent implements OnInit {

  
  constructor(private httpClient:HttpClient,private router:Router) { }

  username:string = '';
  password:string;
  id:number;

  ngOnInit() {
  }


  login(username,password){
    
    this.username=username;
    this.password = password;
    console.log(username,password);
    this.httpClient.post(`https://jsonplaceholder.typicode.com/users/`,{
      username: this.username,
      password: this.password

    })
    .subscribe(
      (data:any) => {

        console.log(data.username);
        if(data.username == this.username){
          this.router.navigate(['./providerhome'])
        }
        else{
          this.router.navigate(['./loginconsumer'])
        }
      }

    )

    

    //this.router.navigate(['./signupconsumer'])
    

  }

}
