import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent implements AfterContentInit {
  // @HostListener('click') onClick() {
  //   console.log("clicked")
  // }

  @ContentChild('input') private content?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  ngAfterContentInit(): void {
    console.log('AFTER CONTENT');  
    console.log(this.content);
  }
  onClick() {
    console.log('CLICKED');
  }
  title = input.required<string>();
}
