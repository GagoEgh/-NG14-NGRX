import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { EditDTO } from './model/editDTO';

import { dispatchEditStart } from './helpers/dispatchEditStart';
import { LoadingComponent } from '../shared/loading/loading.component';
import { Observable } from 'rxjs';
import { getEditIsLoad } from './helpers/getEditIsLoad.select';
import { BackendErrorComponent } from '../shared/backend-error/backend-error.component';
import { IBackError } from '../shared/model/backendErrore.interface';
import { getEditBackError } from './helpers/getEditBackError';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackendErrorComponent,
    LoadingComponent]
})
export class EditComponent {
  articleForm!: FormGroup;
  isLoad$!: Observable<boolean>;
  backendErrore$!:Observable<IBackError|null>;
  private fb = inject(FormBuilder);
  private injector = inject(EnvironmentInjector);

  constructor() {
    this.initForm();
  }

  private initForm() {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      body: ['', [Validators.required]],
      tagList: ['',],
    })
  }

  public publishArticle() {
    const editDTO = new EditDTO(this.articleForm.value);

    this.injector.runInContext(() => {
      dispatchEditStart(editDTO)
      this.isLoad$ = getEditIsLoad();
      this.backendErrore$ = getEditBackError()
    })

  }
}
