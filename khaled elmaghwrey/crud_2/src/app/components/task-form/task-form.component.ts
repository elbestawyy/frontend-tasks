import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Back Button -->
        <button
          routerLink="/"
          class="mb-6 flex items-center gap-2 text-white hover:text-pink-200 font-bold text-lg bg-white/20 px-6 py-3 rounded-xl backdrop-blur-md hover:bg-white/30 transition-all shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to Dashboard
        </button>

        <!-- Form Container -->
        <div
          class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
        >
          <div class="text-center mb-8">
            <h1
              class="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
            >
              {{ isEditMode ? '✏️ Edit Task' : '✨ Create New Task' }}
            </h1>
            <p class="text-gray-600 text-lg">
              {{ isEditMode ? 'Update task details' : 'Add a new task to your list' }}
            </p>
          </div>

          <!-- Loading State -->
          <div *ngIf="isLoading" class="text-center py-16">
            <div
              class="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600"
            ></div>
            <p class="text-gray-600 mt-6 text-lg font-semibold">Loading task...</p>
          </div>

          <!-- Form -->
          <form [formGroup]="taskForm" (ngSubmit)="onSubmit()" *ngIf="!isLoading">
            <!-- Title -->
            <div class="mb-6">
              <label class="block text-sm font-black text-gray-800 mb-3 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                Task Title *
              </label>
              <input
                type="text"
                formControlName="title"
                placeholder="Enter task title"
                class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-medium transition-all"
              />
              <div
                *ngIf="taskForm.get('title')?.invalid && taskForm.get('title')?.touched"
                class="text-red-600 text-sm mt-2"
              >
                Title is required
              </div>
            </div>

            <!-- Description -->
            <div class="mb-6">
              <label class="block text-sm font-black text-gray-800 mb-3 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  ></path>
                </svg>
                Description *
              </label>
              <textarea
                formControlName="description"
                placeholder="Enter detailed description"
                rows="4"
                class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-medium transition-all"
              ></textarea>
              <div
                *ngIf="taskForm.get('description')?.invalid && taskForm.get('description')?.touched"
                class="text-red-600 text-sm mt-2"
              >
                Description is required
              </div>
            </div>

            <!-- Grid Layout for Other Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <!-- Status -->
              <div>
                <label class="block text-sm font-black text-gray-800 mb-3 flex items-center gap-2">
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  Status *
                </label>
                <select
                  formControlName="status"
                  class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-medium transition-all"
                >
                  <option value="">Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
                <div
                  *ngIf="taskForm.get('status')?.invalid && taskForm.get('status')?.touched"
                  class="text-red-600 text-sm mt-2"
                >
                  Status is required
                </div>
              </div>

              <!-- Priority -->
              <div>
                <label class="block text-sm font-black text-gray-800 mb-3 flex items-center gap-2">
                  <svg
                    class="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Priority *
                </label>
                <select
                  formControlName="priority"
                  class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-medium transition-all"
                >
                  <option value="">Select Priority</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
                <div
                  *ngIf="taskForm.get('priority')?.invalid && taskForm.get('priority')?.touched"
                  class="text-red-600 text-sm mt-2"
                >
                  Priority is required
                </div>
              </div>
            </div>

            <!-- Due Date -->
            <div class="mb-8">
              <label class="block text-sm font-black text-gray-800 mb-3 flex items-center gap-2">
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                Due Date *
              </label>
              <input
                type="date"
                formControlName="dueDate"
                class="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-medium transition-all"
              />
              <div
                *ngIf="taskForm.get('dueDate')?.invalid && taskForm.get('dueDate')?.touched"
                class="text-red-600 text-sm mt-2"
              >
                Due date is required
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex gap-4 pt-8 border-t-2 border-gray-100">
              <button
                type="submit"
                [disabled]="taskForm.invalid || isSubmitting"
                class="flex-1 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl transition-all font-black text-lg disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <svg
                  class="w-5 h-5 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {{ isSubmitting ? 'Saving...' : isEditMode ? 'Update Task' : 'Create Task' }}
              </button>
              <button
                type="button"
                (click)="resetForm()"
                class="flex-1 px-6 py-4 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-xl hover:shadow-xl transition-all font-black text-lg transform hover:scale-105"
              >
                <svg
                  class="w-5 h-5 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
                Reset
              </button>
              <button
                type="button"
                routerLink="/"
                class="flex-1 px-6 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-xl transition-all font-black text-lg transform hover:scale-105"
              >
                <svg
                  class="w-5 h-5 inline mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                Cancel
              </button>
            </div>
          </form>
        </div>

        <!-- Info Box -->
        <div
          class="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-600 p-8 rounded-2xl shadow-lg"
        >
          <h3 class="font-black text-purple-900 mb-4 text-lg flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              ></path>
            </svg>
            💡 Pro Tips
          </h3>
          <ul class="text-purple-800 font-medium space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-purple-600">✓</span>
              <span>Set clear and descriptive titles for your tasks</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-purple-600">✓</span>
              <span>Provide detailed descriptions to avoid confusion</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-purple-600">✓</span>
              <span>Choose appropriate priority levels to manage workload</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-purple-600">✓</span>
              <span>Set realistic due dates to keep your schedule on track</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
})
export class TaskFormComponent implements OnInit {
  taskForm!: FormGroup;
  isEditMode = false;
  isLoading = false;
  isSubmitting = false;
  taskId: number | null = null;
  originalTask: Task | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.taskId = parseInt(id);
      this.loadTask();
    }
  }

  initializeForm(): void {
    this.taskForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      status: ['pending', Validators.required],
      priority: ['medium', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  loadTask(): void {
    if (!this.taskId) return;

    this.isLoading = true;
    this.cdr.markForCheck();
    this.taskService.getTaskById(this.taskId).subscribe({
      next: (task) => {
        if (task) {
          this.originalTask = task;
          this.populateForm(task);
        }
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        alert('Failed to load task');
        this.isLoading = false;
        this.cdr.markForCheck();
      },
    });
  }

  populateForm(task: Task): void {
    this.taskForm.patchValue({
      title: task.title,
      description: task.description,
      status: task.status,
      priority: task.priority,
      dueDate: task.dueDate,
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) {
      alert('Please fill in all required fields correctly');
      return;
    }

    this.isSubmitting = true;
    this.cdr.markForCheck();
    const formValue = this.taskForm.value;

    if (this.isEditMode && this.taskId) {
      // Update existing task
      this.taskService.updateTask(this.taskId, formValue).subscribe({
        next: (updatedTask) => {
          if (updatedTask) {
            alert('Task updated successfully');
            this.router.navigate(['/']);
          }
          this.isSubmitting = false;
          this.cdr.markForCheck();
        },
        error: () => {
          alert('Failed to update task');
          this.isSubmitting = false;
          this.cdr.markForCheck();
        },
      });
    } else {
      // Create new task
      this.taskService.createTask(formValue).subscribe({
        next: (newTask) => {
          alert('Task created successfully');
          this.router.navigate(['/']);
          this.isSubmitting = false;
          this.cdr.markForCheck();
        },
        error: () => {
          alert('Failed to create task');
          this.isSubmitting = false;
          this.cdr.markForCheck();
        },
      });
    }
  }

  resetForm(): void {
    if (this.isEditMode && this.originalTask) {
      this.populateForm(this.originalTask);
    } else {
      this.taskForm.reset({
        status: 'pending',
        priority: 'medium',
      });
    }
  }
}
