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
    const technicians:Technician[] = await this.http.get<Technician[]>(`https://nodal-pixel-309121.uc.r.appspot.com/tech`).toPromise();
    return technicians
  }

  async getTech(id:number):Promise<Technician>{
    try{
      const technician:Technician = await this.http.get<Technician>(`https://nodal-pixel-309121.uc.r.appspot.com/tech?id=${id}`).toPromise();
    return technician
    }catch(e : any) {
      alert("Technician not found");
    }
    return null as any;
  }


}
