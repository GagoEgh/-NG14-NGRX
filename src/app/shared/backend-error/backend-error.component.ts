import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IBackError } from '../model/backendErrore.interface';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-backend-error',
  templateUrl: './backend-error.component.html',
  styleUrls: ['./backend-error.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class BackendErrorComponent {
  errors: string[] = [];

  @Input() set backendErrore(error: IBackError | null) {
    this.errors = [];
    for (let key in error) {

      if (key !== 'type') {
        const errorArray = error[key];
        for (let i = 0; i < errorArray.length; i++) {
          let erroeString = `${key} ${errorArray[i]}`;
          this.errors.push(erroeString)
        }
      }

    }
  }
}
