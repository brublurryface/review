import { Component } from '@angular/core';
import { LANDPAGE } from '../../shared/content';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  landpage = LANDPAGE;
}
