import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/posts/';

  headers = new HttpHeaders({
   'Content-Type':'application/json',
   Authorization:'Token 32f32230169bbb7f275e3002637ba59d4d0a9b2a'
  });

  // private _posts = ['There is still hope','Let us have faith'];

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts(){
    return this.httpClient.get(this.baseUrl, {headers: this.headers}); 
    // return this._posts;
  }

  getPost(id: number){
    return this.httpClient.get(`${this.baseUrl}${id}/`, {headers: this.headers}); 
    // return this._posts;
  }

  createPost(title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.post(`${this.baseUrl}`,body,{headers: this.headers}); 
    // return this._posts;
  }

  updatePost(id:number, title:string, description:string){
    const body = JSON.stringify({title, description});
    return this.httpClient.put(`${this.baseUrl}${id}/`,body,{headers: this.headers}); 
    // return this._posts;
  }

  deletePost(id:number){
    return this.httpClient.delete(`${this.baseUrl}${id}/`,{headers: this.headers}); 
    // return this._posts;
  }
   
  ratePost(rate: number, postId: number){
    const body = JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseUrl}${postId}/rate_post/`, body, {headers:this.headers});
  }


}
