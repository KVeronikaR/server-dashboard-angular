import { Component, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormControlComponent } from '../../../shared/form-control/form-control.component';
import { FormsModule } from '@angular/forms';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  title = signal('');
  text = signal('');

  private ticketsService = inject(TicketsService);

  onSubmit() {
    this.ticketsService.addTicket(this.title(), this.text());

    this.title.set('');
    this.text.set('');
  }
}
