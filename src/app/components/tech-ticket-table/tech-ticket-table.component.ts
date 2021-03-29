import { Component, OnInit, ViewChild } from '@angular/core';
import { TechTicket } from 'src/app/models/techticket';
import { Ticket } from 'src/app/models/ticket';
import { CommentService } from 'src/app/services/comment.service';
import { LoginService } from 'src/app/services/login.service';
import { TicketService } from 'src/app/services/ticket.service';
import { Comment } from 'src/app/models/comment'
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-tech-ticket-table',
  templateUrl: './tech-ticket-table.component.html',
  styleUrls: ['./tech-ticket-table.component.css']
})

export class TechTicketTableComponent implements OnInit {

  displayedColumns: string[] = ['clientId', 'ticketId', 'description', 'priority', 'epochStart', 'epochEnd', 'assign'];
 
  comments:Comment[] = []
  tickets:Ticket[] = []
  ticket:Ticket = {ticketId:0,description:'',priority:0,epochStart:0,epochEnd:0,comments:[],clientId:0}
  
  constructor(private ticketService:TicketService,private loginService:LoginService, private commentService:CommentService) { }
  dataSource:any
  @ViewChild(MatSort) sort: MatSort;
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
    this.dataSource = new MatTableDataSource(this.tickets);
    this.dataSource.sort = this.sort;
  }
  async getTicket(id:number){
    this.ticket = await this.ticketService.getTicketById(id)
    localStorage.ticketId = JSON.stringify(id)
    let saved = JSON.parse(localStorage.ticketId)
    console.log(saved)
    this.comments = await this.commentService.getAllComments(saved)

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
    this.tickets = await this.ticketService.getAllTickets()

  }
  async closeTicket(ticket:Ticket){
    await this.ticketService.closeTicket(ticket)
    this.tickets = await this.ticketService.getAllTickets()

  }


}

