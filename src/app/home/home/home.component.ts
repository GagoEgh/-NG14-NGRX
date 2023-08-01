import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone:true,
  imports:[
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref,
    RouterModule
  ]
})
export class HomeComponent {

  
}
