import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technician } from '../models/technician';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private http:HttpClient) { }

  async getAllTechs():Promise<Technician[]>{
    const technicians:Technician[] = await this.http.get<Technician[]>(`http://localhost:8081/tech`).toPromise();
    return technicians
  }

  async getTech(id:number):Promise<Technician>{
    const technician:Technician = await this.http.get<Technician>(`http://localhost:8081/tech?id=${id}`).toPromise();
    return technician
  }


}