import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-logout-box',
  templateUrl: './logout-box.component.html',
  styleUrls: ['./logout-box.component.css']
})
export class LogoutBoxComponent implements OnInit {

  username:string = ''
  role:string = ''
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.getUser()
  }

  async getUser(){
    let id = 0
    let decoded;

    if(localStorage.getItem('jwt') != null){
       decoded = await this.loginService.parseJwt(<string>localStorage.getItem('jwt'))
    }
    this.username = decoded.userName
    this.role = decoded.role
  }

  async logout(){
    localStorage.clear()
    window.location.href = "./login"
  }

}
