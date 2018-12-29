import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab = 'students'
  enableTab(tab) {
    switch (tab) {
      case 'students':
        this.tab = 'students';
        break;
      case 'employees':
        this.tab = 'employees';
        break;
    }
  }
  arr = [
    { 'name': 'aravind' },
    { 'name': 'ravi' },
    { 'name': 'rakesh' },
    { 'name': 'kiran' }
  ];
}
