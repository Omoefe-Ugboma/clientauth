import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _posts = ['There is still hope','Let us have faith'];

  constructor() { }

  getPosts(){
    return this._posts
  }
}
