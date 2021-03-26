 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from 'src/app/models/ticket'
import { TechTicket } from 'src/app/models/techticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http:HttpClient) {}

  async getAllTickets():Promise<Ticket[]>{
    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    const tickets:Ticket[] = await this.http.get<Ticket[]>("http://localhost:8081/tickets",details).toPromise();
    return tickets
  }

  async getTicketById(id:number):Promise<Ticket>{
    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    const ticket:Ticket = await this.http.get<Ticket>(`http://localhost:8081/tickets/${id}`,details).toPromise();
    return ticket
  }

  async createTicket(ticket:Ticket):Promise<Ticket>{

    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    ticket = await this.http.post<Ticket>("http://localhost:8081/tickets",ticket,details).toPromise();
    return ticket
  }

  async getTicketsByClientId(id:number):Promise<Ticket[]>{
    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    const clientTickets:Ticket[] = await this.http.get<Ticket[]>(`http://localhost:8081/tickets/client/${id}`,details).toPromise();
    return clientTickets
  }

  async getTicketsByTechId(id:number):Promise<Ticket[]>{
    const techTickets:Ticket[] = await this.http.get<Ticket[]>(`http://localhost:8081/tech/ticket?id=${id}`).toPromise();
    return techTickets
  }

  async updateTicket(ticket:Ticket,id:number):Promise<Ticket>{
    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    ticket = await this.http.put<Ticket>(`http://localhost:8081/tickets/${id}`,ticket,details).toPromise();
    return ticket
  }


  async assignTicket(techTicket:TechTicket){
    const jwt = <string>localStorage.getItem('jwt')
        const details = {

            headers:{
                "Authorization": jwt
            }
        }

      await this.http.post(`http://localhost:8081/tech/ticket`,techTicket,details).toPromise();
    
  }

  async escalateTicket(ticket:Ticket):Promise<Ticket>{
    const jwt = <string>localStorage.getItem('jwt')
        const details = {
            headers:{
                "Authorization": jwt
            }
        }

    ticket = await this.http.put<Ticket>(`http://localhost:8081/tech/ticket`,ticket,details).toPromise();
        return ticket
  }

  async closeTicket(ticket:Ticket):Promise<Ticket>{
    const jwt = <string>localStorage.getItem('jwt')
        const details = {
            headers:{
                "Authorization": jwt
            }
        }

    ticket = await this.http.put<Ticket>(`http://localhost:8081/tech/ticket?closed=true`,ticket,details).toPromise();
        return ticket

  }
  
}

