import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  async getAllComments(ticketId:number):Promise<Comment[]>{
    const comments:Comment[] = await this.http.get<Comment[]>("http://localhost:8081/tickets").toPromise();
    return comments
  }
}
