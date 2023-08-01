import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.scss'],
  standalone:true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    RouterModule]
})
export class RegisterComponent {
  registerForm!: FormGroup;
  private fb = inject(FormBuilder);

  constructor(){
    this.initRegisterForm()
  }

  private initRegisterForm(): void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  public onSubmit() {}
}
