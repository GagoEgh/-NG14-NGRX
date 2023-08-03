import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { BackendErrorComponent } from 'src/app/shared/backend-error/backend-error.component';
import { isLoadSelector } from 'src/app/shared/helpers/isLoad.selector';
import { IBackError } from 'src/app/shared/model/backendErrore.interface';
import { backendError } from 'src/app/shared/helpers/backendErrore.select';
import { loginStartAction } from '../helpers/loginStart.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BackendErrorComponent,
    LoadingComponent
  ]
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoad$!: Observable<boolean>;
  backendErrore$!: Observable<IBackError | null>;
  private fb = inject(FormBuilder);
  private injector = inject(EnvironmentInjector);
  constructor() {
    this.initLoginForm();
  }

  private initLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public onSubmit(): void {
    const user = {
      user: this.loginForm.value
    }

    this.injector.runInContext(() => {
      loginStartAction(user)
      this.backendErrore$ = backendError();
      this.isLoad$ = isLoadSelector()
    })
  }

}
