import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { TicketModel } from '../tickets/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) ticket!: TicketModel;
  @Output() updatedTicketStatus = new EventEmitter();
  isTicketVisible = signal(false);

  toggleVisibility() {
    // this.isTicketVisible.set(!this.isTicketVisible())
    this.isTicketVisible.update((prevVisible) => !prevVisible);
  }

  markTicketAsDone() {
    this.updatedTicketStatus.emit();
  }
}
