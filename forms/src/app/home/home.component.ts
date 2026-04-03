import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from "../directives/hughlight.directives";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
