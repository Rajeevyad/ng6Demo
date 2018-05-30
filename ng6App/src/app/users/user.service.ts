
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
//import {do } from 'rxjs/operators'

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }
  url = 'http://localhost:4000';
  configUrl = 'http://localhost:54101' ;

  getUsers() {
    return this.http.get(`${this.url}/results`);
        }
  
  getConfiguration() {
      // call configuration service
      
  }     
}