import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent implements OnInit {

  tickets:Ticket[] = []
  
  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
    this.refreshTickets()
  }

  async refreshTickets(){
    this.tickets = await this.ticketService.getTicketsByClientId(1)
  }

}
