import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { registerStart } from '../store/action';
import { IRequestUser } from '../model/requestUser.interface';
import { backendErrore } from '../store/selectors';



@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule],

})
export class RegisterComponent {
  registerForm!: FormGroup;
  private fb = inject(FormBuilder);
  private injector = inject(EnvironmentInjector)
  private store = inject(Store)
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
      registerStartAction(user)
    })

    this.store.pipe(select(backendErrore))
    .subscribe({
      next:(res)=>{
        console.log('user',res);
      
      }
    })

  }
}


export const registerStartAction = (user: IRequestUser) => {
  const store = inject(Store);
  store.dispatch(registerStart(user))
}