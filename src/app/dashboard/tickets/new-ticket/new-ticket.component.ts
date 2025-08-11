import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  @Output() AddTicket = new EventEmitter<{ title: string; request: string }>();

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.form?.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('AFTER VIEW');
    console.log(this.form?.nativeElement);
  }
  // private form = viewChild.required<ElementRef<HTMLInputElement>>('form');
  onSubmit(titleInput: string, textArea: string) {
    this.form?.nativeElement.reset();
    this.AddTicket.emit({ title: titleInput, request: textArea });
  }
}
