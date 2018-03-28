import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-provider',
  templateUrl: './signup-provider.component.html',
  styleUrls: ['./signup-provider.component.css']
})
export class SignupProviderComponent implements OnInit {

  constructor(private httpClient:HttpClient, private router:Router) { }

  createAccount(frm){

    console.log(frm.value.username);
    this.httpClient.post(`https://jsonplaceholder.typicode.com/users/`,frm.value)
    .subscribe(
      (data:any) => {

        console.log(data);
      }
        

    )
  }

  ngOnInit() {
  }

}
