import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from "../directives/hughlight.directives";
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MyRouterLinkDirective, HighlightDirective, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  width = Math.floor(Math.random()*100);

}
