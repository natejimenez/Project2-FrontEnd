import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/models/ticket'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) {}

  async getAllTickets():Promise<Ticket[]>{
    const tickets:Ticket[] = await this.http.get<Ticket[]>("http://localhost:8081/tickets").toPromise();
    return tickets
  }

  async getTicketById(id:number):Promise<Ticket>{
    const ticket:Ticket = await this.http.get<Ticket>(`http://localhost:8081/tickets/${id}`).toPromise();
    return ticket
  }

  async createTicket(ticket:Ticket):Promise<Ticket>{
    ticket = await this.http.post<Ticket>("http://localhost:8081/tickets",ticket).toPromise();
    return ticket
  }

  async getTicketsByClientId(id:number):Promise<Ticket[]>{
    const clientTickets:Ticket[] = await this.http.get<Ticket[]>(`http://localhost:8081/tickets/client/${id}`).toPromise();
    return clientTickets
  }

  async getTicketsByTechId(id:number):Promise<Ticket[]>{
    const techTickets:Ticket[] = await this.http.get<Ticket[]>(`http://localhost:8081/tickets/tech/${id}`).toPromise();
    return techTickets
  }

  async updateTicket(ticket:Ticket,id:number):Promise<Ticket>{
    ticket = await this.http.put<Ticket>(`http://localhost:8081/tickets/${id}`,ticket).toPromise();
    return ticket
  }
  
}
