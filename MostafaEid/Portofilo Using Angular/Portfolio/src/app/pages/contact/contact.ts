import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Contact {
  submissionStatus = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get fullName() {
    return this.contactForm.get('fullName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submissionStatus.set('sending');
      console.log('Form Submitted:', this.contactForm.value);

      // Simulate API call
      setTimeout(() => {
        this.submissionStatus.set('success');
        this.contactForm.reset();

        setTimeout(() => {
          this.submissionStatus.set('idle');
        }, 5000);

      }, 1500);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
