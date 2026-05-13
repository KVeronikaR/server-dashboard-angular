import { Component, inject } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketsService } from './tickets.service';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  private ticketsService = inject(TicketsService);

  tickets = this.ticketsService.getTickets();
}
