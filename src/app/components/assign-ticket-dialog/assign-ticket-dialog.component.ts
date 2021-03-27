import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TicketService } from 'src/app/services/ticket.service';
import { AssignTicketDialogContentComponent } from './assign-ticket-dialog-content/assign-ticket-dialog-content.component';

@Component({
  selector: 'app-assign-ticket-dialog',
  templateUrl: './assign-ticket-dialog.component.html',
  styleUrls: ['./assign-ticket-dialog.component.css']
})
export class AssignTicketDialogComponent {

  constructor(public dialog: MatDialog, private ticketService:TicketService) { }

  openDialog(){
    const dialogRef = this.dialog.open(AssignTicketDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`)

  
  });
}
}
