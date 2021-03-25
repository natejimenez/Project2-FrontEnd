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
import { TechTabGroupComponent } from './components/tech-tab-group/tech-tab-group.component';
import {MatTab, MatTabsModule} from '@angular/material/tabs';
import { TechTicketDetailsTableComponent } from './components/tech-ticket-details-table/tech-ticket-details-table.component';
import { CreateCommentDialogComponent } from './components/create-comment-dialog/create-comment-dialog.component';
import { CreateCommentContentComponent } from './components/create-comment-dialog/create-comment-content/create-comment-content.component';

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
    TechTabGroupComponent,
    TechTicketDetailsTableComponent,
    CreateCommentDialogComponent,
    CreateCommentContentComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
