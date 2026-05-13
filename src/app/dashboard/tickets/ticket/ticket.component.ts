import { Component, inject, input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  private ticketsService = inject(TicketsService);

  onToggleDetails() {
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted() {
    this.ticketsService.closeTicket(this.data().id);
  }
}
