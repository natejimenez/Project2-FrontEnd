import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credential } from 'src/app/models/credential'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) {}

  async clientLogin(credential:Credential){

    let clientJwt = await this.http.post("http://localhost:8081/client/login",credential).toPromise();  
    console.log(clientJwt)
    return clientJwt
  }
  async techLogin(credential:Credential){
    console.log(credential)
    let techJwt = await this.http.post<string>("http://localhost:8081/tech/login",credential,{responseType:'text' as 'json'}).toPromise();
    console.log(techJwt)
    return techJwt    
  }


}
