import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TechnicianPageComponent } from './components/technician-page/technician-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ClientPageComponent } from './components/client-page/client-page.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateTicketDialogComponent } from './components/create-ticket-dialog/create-ticket-dialog.component';
import { CreateTicketDialogContentComponent } from './components/create-ticket-dialog/create-ticket-dialog-content/create-ticket-dialog-content.component';
import { TechTicketTableComponent } from './components/tech-ticket-table/tech-ticket-table.component';
import { AdminTicketTableComponent } from './components/admin-ticket-table/admin-ticket-table.component';
import { TechTabGroupComponent } from './components/tech-tab-group/tech-tab-group.component';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import { TechTicketDetailsTableComponent } from './components/tech-ticket-details-table/tech-ticket-details-table.component';
import { MatTableModule } from '@angular/material/table';
import { CreateCommentDialogComponent } from './components/create-comment-dialog/create-comment-dialog.component';
import { CreateCommentContentComponent } from './components/create-comment-dialog/create-comment-content/create-comment-content.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TechnicianTableComponent } from 'src/app/components/technician-table/technician-table.component';
import { AdminTabGroupComponent } from './components/admin-tab-group/admin-tab-group.component';
import { AssignTicketDialogComponent } from './components/assign-ticket-dialog/assign-ticket-dialog.component';
import { AssignTicketDialogContentComponent } from './components/assign-ticket-dialog/assign-ticket-dialog-content/assign-ticket-dialog-content.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { PriorityPipe } from './priority.pipe';
import { LogoutBoxComponent } from './components/logout-box/logout-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TechnicianPageComponent,
    AdminPageComponent,
    ClientPageComponent,
    TicketTableComponent,
    LoginPageComponent,
    CreateTicketDialogComponent,
    CreateTicketDialogContentComponent,
    TechTicketTableComponent,
    AdminTicketTableComponent,
    TechTabGroupComponent,
    TechTicketDetailsTableComponent,
    CreateCommentDialogComponent,
    CreateCommentContentComponent,
    TechTicketDetailsTableComponent,
    TechnicianTableComponent,
    AdminTabGroupComponent,
    AssignTicketDialogComponent,
    AssignTicketDialogContentComponent,
    PriorityPipe,
    LogoutBoxComponent


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
