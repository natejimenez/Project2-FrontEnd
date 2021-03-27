import { Component, OnInit } from '@angular/core';
import { Technician } from 'src/app/models/technician';
import { Ticket } from 'src/app/models/ticket';
import { LoginService } from 'src/app/services/login.service';
import { TechnicianService } from 'src/app/services/technician.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-technician-table',
  templateUrl: './technician-table.component.html',
  styleUrls: ['./technician-table.component.css']
})
export class TechnicianTableComponent implements OnInit {

  technicians:Technician[] = []
  tickets:Ticket[] = []
 
  technician:Technician = {id:0,displayName:'',userName:'',password:'',type:''}
  
  constructor(private ticketService:TicketService,private loginService:LoginService,private technicianService:TechnicianService) { }

  ngOnInit(): void {
    this.refreshTechs()
  }

  async refreshTechs(){
    let id = 0
    let decoded;

    if(localStorage.getItem('jwt') != null){
       decoded = await this.loginService.parseJwt(<string>localStorage.getItem('jwt'))

    }
    this.technicians = await this.technicianService.getAllTechs();
  }

  async getTicketsOfTech(id:number){
    this.technician = await this.technicianService.getTech(id)
   console.log(this.technician.id)
    this.tickets = await this.ticketService.getTicketsByTechId(id)
  }




   

}
