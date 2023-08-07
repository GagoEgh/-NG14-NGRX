import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { getActiveRoute } from '../helpers/getActiveRoutes';

interface Page {
  paginations: any[],
  offset: number,
}
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent implements OnInit {
  private router = inject(Router);
  private injector = inject(EnvironmentInjector);
  paginations = new Array();


  page: Page = {
    paginations: new Array(),
    offset: 0,
  }

  constructor() { this.getActivePaage(); }

  ngOnInit(): void { }

  @Input() feed!: string;
  @Input() set counter(value: number | undefined) {
    if (value !== undefined) {
      this.page.paginations = new Array(Math.ceil(value / 10))
    }
  }


  nextPage(num: number) {
    this.page.offset = num * 10;

    this.router.navigate([`home/home/${this.feed}`], {
      queryParams: {
        offset: this.page.offset
      }
    });

  }


  getActivePaage() {
    this.injector.runInContext(() => {
      getActiveRoute().subscribe({
        next: (res) => {

          if (res['offset'] != undefined) {
            this.page.offset = res['offset']
          } else {
            this.page.offset = 0;
          }
        }
      })
    })

  }

}
