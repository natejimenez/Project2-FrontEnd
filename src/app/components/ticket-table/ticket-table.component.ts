import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { LoginService } from 'src/app/services/login.service';
import { TicketService } from 'src/app/services/ticket.service';
import {Comment} from 'src/app/models/comment'
import { CommentService } from 'src/app/services/comment.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent implements OnInit {


  displayedColumns: string[] = ['ticketId', 'description', 'epochStart', 'epochEnd'];
  comments:Comment[] = []
  tickets:Ticket[] = []
  ticket:Ticket = {ticketId:0,description:'',priority:0,epochStart:0,epochEnd:0,comments:[],clientId:0}
  constructor(private ticketService:TicketService,private loginService:LoginService,private commentService:CommentService) { }
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
    this.tickets = await this.ticketService.getTicketsByClientId(decoded.id);
    this.dataSource = new MatTableDataSource(this.tickets);
    this.dataSource.sort = this.sort;
  }
  async getTicket(id:number){
    this.ticket = await this.ticketService.getTicketById(id)
    localStorage.ticketId = JSON.stringify(id)
    let saved = JSON.parse(localStorage.ticketId)
    this.comments = await this.commentService.getAllComments(saved)

  }
  async refreshTicket(){
    let saved = JSON.parse(localStorage.ticketId)
    console.log(saved)
    this.comments = await this.commentService.getAllComments(saved)

  }

}
