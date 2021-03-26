import { Component, OnInit } from '@angular/core';
import { TechTicket } from 'src/app/models/techticket';
import { Ticket } from 'src/app/models/ticket';
import { LoginService } from 'src/app/services/login.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-tech-ticket-details-table',
  templateUrl: './tech-ticket-details-table.component.html',
  styleUrls: ['./tech-ticket-details-table.component.css']
})
export class TechTicketDetailsTableComponent implements OnInit {

  displayedColumns: string[] = ['clientId', 'ticketId', 'description', 'priority', 'epochStart', 'epochEnd', 'escalate', 'close'];


  tickets:Ticket[] = []
  ticket:Ticket = {ticketId:0,description:'',priority:0,epochStart:0,epochEnd:0,comments:[],clientId:0}
  
  constructor(private ticketService:TicketService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.refreshTickets();
  }

  async refreshTickets(){
    let id = 0
    let decoded;

    if(localStorage.getItem('jwt') != null){
       decoded = await this.loginService.parseJwt(<string>localStorage.getItem('jwt'))
       

    }
    this.tickets = await this.ticketService.getTicketsByTechId(decoded.id)
  }
  async getTicket(id:number){
    this.ticket = await this.ticketService.getTicketById(id)
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

  async escalateTicket(ticket:Ticket){
    await this.ticketService.escalateTicket(ticket)
    alert("Ticket was successfully escalated")
    this.refreshTickets()

  }
  async closeTicket(ticket:Ticket){
    await this.ticketService.closeTicket(ticket)
    alert("Ticket was successfully closed.")
    this.tickets = await this.ticketService.getAllTickets()

  }
}
