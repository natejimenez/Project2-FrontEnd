import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Credential } from 'src/app/models/credential'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  userName:string = ''
  password:string = ''

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  async loginClient(){
    let credential:Credential = new Credential(this.userName,this.password)
    const jwt = await this.loginService.clientLogin(credential); 
    localStorage.setItem('jwt',jwt);
    var decoded = await this.loginService.parseJwt(jwt);
    localStorage.setItem('role',decoded.role)
    localStorage.setItem('id',decoded.id)

    if(decoded.role == 'client'){
      window.location.href = "./client"
    }
  }
  async loginTech(){
    let credential:Credential = new Credential(this.userName,this.password)
    const jwt = await this.loginService.techLogin(credential);
    localStorage.setItem('jwt',jwt);
    var decoded = await this.loginService.parseJwt(jwt)
    localStorage.setItem('role',decoded.role)
    localStorage.setItem('id',decoded.id)
    if(decoded.role == 'TECH'){
      window.location.href = "./technician"
    }
    if(decoded.role =='ADMIN'){
      window.location.href = "./admin"
    }
    
  }



}
