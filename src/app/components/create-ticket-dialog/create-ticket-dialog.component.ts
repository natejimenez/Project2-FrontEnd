import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { CreateTicketDialogContentComponent } from './create-ticket-dialog-content/create-ticket-dialog-content.component';

@Component({
  selector: 'app-create-ticket-dialog',
  templateUrl: './create-ticket-dialog.component.html',
  styleUrls: ['./create-ticket-dialog.component.css']
})
export class CreateTicketDialogComponent{

   
  constructor(public dialog: MatDialog, private ticketService:TicketService) { }

  openDialog(){
    const dialogRef = this.dialog.open(CreateTicketDialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`)

  
  });
  
  

}

}
