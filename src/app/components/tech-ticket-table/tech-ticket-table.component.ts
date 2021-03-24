import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { LoginService } from 'src/app/services/login.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tech-ticket-table',
  templateUrl: './tech-ticket-table.component.html',
  styleUrls: ['./tech-ticket-table.component.css']
})
export class TechTicketTableComponent implements OnInit {

  
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
   
  async assignTicket(ticket:Ticket){
   this.ticket = await this.ticketService.assignTicket(ticket)
  }

}

