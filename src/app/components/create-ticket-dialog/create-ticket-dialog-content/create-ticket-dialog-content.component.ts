import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';

import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-ticket-dialog-content',
  templateUrl: './create-ticket-dialog-content.component.html',
  styleUrls: ['./create-ticket-dialog-content.component.css']
})
export class CreateTicketDialogContentComponent {

  tickets:Ticket[] = []

  description:string = ""



  constructor(private ticketService:TicketService){}

  async createTicket(){
    let ticket:Ticket = new Ticket(0,this.description,0,0,0,[],1)

    ticket = await this.ticketService.createTicket(ticket);
  }



}
