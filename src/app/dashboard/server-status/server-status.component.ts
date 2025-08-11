import { Component, effect, Input, OnDestroy, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  private interval?: ReturnType<typeof setInterval>;
  constructor() {
    effect(()=> {
      console.log(this.currentStatus());
    })
  }
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        this.currentStatus.set('online');
      } else if (rand < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }
}
