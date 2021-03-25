import { Component, OnInit } from '@angular/core';
import { TechTicket } from '../models/techticket';
import { Ticket } from '../models/ticket';
import { LoginService } from '../services/login.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-admin-ticket-table',
  templateUrl: './admin-ticket-table.component.html',
  styleUrls: ['./admin-ticket-table.component.css']
})
export class AdminTicketTableComponent implements OnInit {

  tickets:Ticket[] = []
  ticket:Ticket = {ticketId:0,description:'',priority:0,epochStart:0,epochEnd:0,comments:[],clientId:0}
  
  constructor(private ticketService:TicketService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.refreshTickets()
  }

  async refreshTickets(){
    let id = 0
    let decoded;

    if(localStorage.getItem('jwt') != null){
       decoded = await this.loginService.parseJwt(<string>localStorage.getItem('jwt'))

    }
    this.tickets = await this.ticketService.getAllTickets()
  }
   
  async assignTicket(id:number){
    let decoded;
    let techId;
    if(localStorage.getItem('jwt') != null){
      decoded = await this.loginService.parseJwt(<string>localStorage.getItem('jwt'))
      techId = decoded.id
   }
    let techTicket:TechTicket = new TechTicket(techId,id)
   await this.ticketService.assignTicket(techTicket)
   alert("Ticket was successfully assigned to you.")
  }
}
