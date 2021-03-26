import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';
import { TicketService } from 'src/app/services/ticket.service';
import { CreateCommentContentComponent } from './create-comment-content/create-comment-content.component';

@Component({
  selector: 'app-create-comment-dialog',
  templateUrl: './create-comment-dialog.component.html',
  styleUrls: ['./create-comment-dialog.component.css']
})
export class CreateCommentDialogComponent{

  constructor(public dialog: MatDialog, private ticketService:TicketService,private commentService:CommentService) { }

  openDialog(){
    const dialogRef = this.dialog.open(CreateCommentContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`)

  
  });

}
}
