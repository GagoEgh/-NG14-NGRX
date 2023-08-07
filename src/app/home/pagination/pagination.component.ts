import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent{
  private router = inject(Router);
  pagination = new Array();

  @Input() set counter(value: number | undefined) {
    if (value !== undefined) {
      this.pagination = new Array(Math.ceil(value / 10))
    }
  }


  nextPage(num: number) {
    const offset = num*10;
      this.router.navigate(['home/home/global'],{
        queryParams:{
          offset:offset
        }
      })
  }

}
