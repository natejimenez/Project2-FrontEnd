import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from 'src/app/models/credential'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) {}

  async clientLogin(credential:Credential){

    try{
      let clientJwt = await this.http.post<string>("http://localhost:8081/client/login",credential,{responseType:'text' as 'json'}).toPromise();
      console.log(clientJwt);
      return clientJwt
    }catch(e : any) {
      alert("Incorrect credentials");
    }
    return "";

  }
  async techLogin(credential:Credential){

    console.log(credential);
    try{
      let techJwt = await this.http.post<string>("http://localhost:8081/tech/login",credential,{responseType:'text' as 'json'}).toPromise();
      console.log(techJwt);
      return techJwt;    
    }catch(e : any) {
      alert("Incorrect credentials");
    }
    return "";
  }

  async parseJwt (token:string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

    return JSON.parse(jsonPayload);

}



}
