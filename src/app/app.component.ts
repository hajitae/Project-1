import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [FullCalendarModule]
})
export class AppComponent {
  name = 'Sam';
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    height: '100%',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg: DateClickArg) => this.handleDateClick(arg),
    events: [
      { title: 'event 1', date: '2024-12-29' },
      { title: 'event 2', date: '2019-04-02' }
    ]
  };

  handleDateClick(arg: DateClickArg): void {
    alert(`Date clicked: ${arg.dateStr}`);
  }
}


