import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from 'src/app/models/comment'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  async getAllComments(ticketId:number):Promise<Comment[]>{
    const comments:Comment[] = await this.http.get<Comment[]>(`https://nodal-pixel-309121.uc.r.appspot.com/tickets/${ticketId}/comments`).toPromise();
    return comments
  }

  async createComment(comment:Comment,ticketId:number):Promise<Comment>{
    try{
    const jwt = <string>localStorage.getItem('jwt')
    const details = {
        headers:{
            "Authorization": jwt
        }
    }
    comment = await this.http.post<Comment>(`https://nodal-pixel-309121.uc.r.appspot.com/tickets/${ticketId}/comments`,comment,details).toPromise();
    return comment
    }catch(e : any) {
      alert("Unauthorized");
    }
    return null as any;
  }
}
