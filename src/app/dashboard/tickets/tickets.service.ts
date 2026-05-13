import { Injectable, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private tickets = signal<Ticket[]>([]);

  getTickets() {
    return this.tickets.asReadonly();
  }

  addTicket(title: string, text: string) {
    this.tickets.update((tickets) => [
      ...tickets,
      {
        title,
        request: text,
        id: Math.random().toString(),
        status: 'open',
      },
    ]);
  }

  closeTicket(id: string) {
    this.tickets.update((tickets) =>
      tickets.map((ticket) => {
        if (ticket.id === id) {
          return {
            ...ticket,
            status: 'closed',
          };
        }
        return ticket;
      }),
    );
  }
}
