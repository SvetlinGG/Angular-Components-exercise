import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from "../directives/hughlight.directives";
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyRouterLinkDirective, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
