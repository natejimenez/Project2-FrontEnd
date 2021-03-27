import { Component, OnInit } from '@angular/core';
import { Technician } from 'src/app/models/technician';
import { TechTicket } from 'src/app/models/techticket';
import { TechnicianService } from 'src/app/services/technician.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-assign-ticket-dialog-content',
  templateUrl: './assign-ticket-dialog-content.component.html',
  styleUrls: ['./assign-ticket-dialog-content.component.css']
})
export class AssignTicketDialogContentComponent implements OnInit {

  techId:string=''
  technicians:Technician[] = []

  constructor(private ticketService:TicketService,private technicianService:TechnicianService) { }

  ngOnInit(): void {
    this.getTechs()
  }

  async assignTicket(){
    let saved = JSON.parse(localStorage.ticketId)
    let technicianId = Number(this.techId)
    let techTicket:TechTicket = new TechTicket(technicianId,saved)
   await this.ticketService.assignTicket(techTicket)
   alert("Ticket was successfully assigned this technician.")
  }

  async getTechs(){
    this.technicians = await this.technicianService.getAllTechs();
  }

}
