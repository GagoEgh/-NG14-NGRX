import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { currentUserSelect } from '../shared/helpers/currentUser.select';
import { settingsActionStart } from './store/setting.action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SettingsComponent {
  settingsForm!: FormGroup;
  private fb = inject(FormBuilder);
  private router = inject(Router)
  private store = inject(Store)

  constructor() {
    currentUserSelect().subscribe({
      next: (user) => {
        this.settingsForm = this.fb.group({
          url: [user?.image, [Validators.required]],
          name: [user?.username, [Validators.required]],
          aboutYou: [user?.bio],
          email: [user?.email, [Validators.required, Validators.email]],
          newPassword: ['',]
        })
      }
    })
  }

  updateData() {
    if (this.settingsForm.status === "VALID") {
      this.store.dispatch(settingsActionStart(this.settingsForm.value));
    }

  }

  logout(){
    localStorage.removeItem('accessToken');
    this.router.navigate(['./home/home/global'])

  }
}
