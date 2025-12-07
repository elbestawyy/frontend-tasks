import { Component, computed, effect, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../app/interfaces/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  
  user = input<User | null>(null);

  ngOnInit() {
  }
  
  save = output<User>();
  cancel = output<void>();

  private fb = inject(FormBuilder);

  formMode = computed(() => this.user() ? 'Edit' : 'Create');

  userForm = this.fb.group({
    id: [<number | null>null],
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  constructor() {
    effect(() => {
        const currentUser = this.user();
        if (currentUser) {
            this.userForm.patchValue(currentUser);
        } else {
            this.userForm.reset();
        }
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.save.emit(this.userForm.getRawValue() as User);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
