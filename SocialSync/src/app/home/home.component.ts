import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: './home.component.html',
  styles: './home.component.css'
})
export class HomeComponent {}
