import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from 'src/app/models/comment';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-create-comment-content',
  templateUrl: './create-comment-content.component.html',
  styleUrls: ['./create-comment-content.component.css']
})
export class CreateCommentContentComponent implements OnInit {

  comment:string = ""

  constructor(private commentService:CommentService, private ticketService:TicketService) { }

  ngOnInit(): void {
  }

  async createComment(){
    let saved = JSON.parse(localStorage.ticketId)
    let comment:Comment = new Comment(this.comment,saved)

    comment = await this.commentService.createComment(comment,saved)
 
  }


}
