import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-consumer',
  templateUrl: './signup-consumer.component.html',
  styleUrls: ['./signup-consumer.component.css']
})
export class SignupConsumerComponent implements OnInit {

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
