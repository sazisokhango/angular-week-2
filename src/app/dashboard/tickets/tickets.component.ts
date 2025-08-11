import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketModel } from './ticket.model';
import { TicketComponent } from "../ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: TicketModel[] = [];
  getTicket(ticketParam: { title: string; request: string }) {
    const ticket: TicketModel = {id: Math.random().toString(), title: ticketParam.title, request: ticketParam.request, status: 'open' }
    this.tickets.push(ticket);
  }

  changeTicketStatus(id: string) {
    this.tickets = this.tickets.map(ticket => {
      if(ticket.id === id) {
        return {...ticket, status: 'closed'}
      }
      return ticket;
    })
  }
}
