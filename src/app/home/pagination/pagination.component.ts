import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, Input, OnInit, inject } from '@angular/core';
import { globalStart } from '../helpers/globalStart.action';
import { isLoadSelect } from '../helpers/isLoad.select';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent implements OnInit {
  private injector = inject(EnvironmentInjector)
  pagination = new Array();

  @Input() set counter(value: number | undefined) {
    if (value !== undefined) {
      this.pagination = new Array(Math.ceil(value / 10))
    }
  }

  ngOnInit(): void { }

  nextPage(num: number) {
    this.injector.runInContext(() => {
      globalStart(num * 10);
      isLoadSelect()
    })
  }

}
