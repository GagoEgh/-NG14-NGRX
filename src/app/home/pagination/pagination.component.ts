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
export class PaginationComponent {
  private router = inject(Router);
  pagination = new Array();

  @Input() feed!: string;
  @Input() set counter(value: number | undefined) {
    if (value !== undefined) {
      this.pagination = new Array(Math.ceil(value / 10))
    }
  }


  nextPage(num: number) {
    console.log('feed++++++',this.feed);
    
    const offset = num * 10;
    this.router.navigate([`home/home/${this.feed}`], {
      queryParams: {
        offset: offset
      }
    })
  }

}
