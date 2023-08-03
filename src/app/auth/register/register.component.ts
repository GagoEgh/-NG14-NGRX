import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BackendErrorComponent } from 'src/app/shared/backend-error/backend-error.component';
import { Observable } from 'rxjs';
import { IBackError } from 'src/app/shared/model/backendErrore.interface';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { backendError } from '../../shared/helpers/backendErrore.select';
import { registerStartAction } from '../helpers/registerStart.dispatch';
import { isLoadSelector } from '../../shared/helpers/isLoad.selector';



@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BackendErrorComponent,
    LoadingComponent
  ],

})
export class RegisterComponent {
  registerForm!: FormGroup;
  backendErrore$!: Observable<IBackError | null>;
  isLoad$!: Observable<boolean>;
  private fb = inject(FormBuilder);
  private injector = inject(EnvironmentInjector);

  constructor() {
    this.initRegisterForm();
  }

  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  public onSubmit() {
    const user = {
      user: this.registerForm.value
    }

    this.injector.runInContext(() => {
      registerStartAction(user);
      this.backendErrore$ = backendError();
      this.isLoad$ = isLoadSelector()
    })

  }
}

