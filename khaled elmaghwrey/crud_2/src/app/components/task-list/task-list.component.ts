import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="min-h-screen py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-8 text-center animate-fade-in-up">
          <h1 class="text-5xl font-black text-white mb-3 drop-shadow-lg">✨ Task Dashboard</h1>
          <p class="text-white text-lg font-medium opacity-90">
            Manage and track your tasks efficiently
          </p>
        </div>

        <!-- Search and Filter Section -->
        <div
          class="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-8 border border-white/20"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Search by ID -->
            <div>
              <label class="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                Search by Task ID
              </label>
              <div class="flex gap-2">
                <input
                  type="number"
                  [(ngModel)]="searchId"
                  placeholder="Enter task ID..."
                  class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  (click)="findById()"
                  class="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-bold"
                >
                  Find
                </button>
                <button
                  (click)="clearSearch()"
                  class="px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-bold"
                >
                  Clear
                </button>
              </div>
            </div>

            <!-- Filter by Status -->
            <div>
              <label class="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
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
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
                Filter by Status
              </label>
              <select
                [(ngModel)]="selectedStatus"
                (change)="filterByStatus()"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Tasks</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div
            class="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all text-white"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="text-4xl font-black">{{ totalTasks }}</div>
                <p class="text-blue-100 text-sm mt-2 font-semibold">Total Tasks</p>
              </div>
              <svg class="w-14 h-14 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all text-white"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="text-4xl font-black">{{ completedCount }}</div>
                <p class="text-green-100 text-sm mt-2 font-semibold">Completed</p>
              </div>
              <svg class="w-14 h-14 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all text-white"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="text-4xl font-black">{{ inProgressCount }}</div>
                <p class="text-yellow-100 text-sm mt-2 font-semibold">In Progress</p>
              </div>
              <svg class="w-14 h-14 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
          <div
            class="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all text-white"
          >
            <div class="flex items-center justify-between">
              <div>
                <div class="text-4xl font-black">{{ pendingCount }}</div>
                <p class="text-red-100 text-sm mt-2 font-semibold">Pending</p>
              </div>
              <svg class="w-14 h-14 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Task Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ng-container *ngIf="displayedTasks.length > 0; else noTasks">
            <div
              *ngFor="let task of displayedTasks; trackBy: trackByTaskId"
              class="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 border-l-4 transform hover:-translate-y-2 duration-300"
              [ngClass]="getPriorityBorderColor(task.priority)"
            >
              <!-- Task Header -->
              <div class="flex justify-between items-start mb-4">
                <div>
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-bold text-gray-900">{{ task.title }}</h3>
                    <span
                      class="px-3 py-1 rounded-full text-xs font-semibold"
                      [ngClass]="getStatusBadgeClass(task.status)"
                    >
                      {{ task.status | titlecase }}
                    </span>
                  </div>
                  <p class="text-xs text-gray-500 mt-1">ID: {{ task.id }}</p>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">{{ task.description }}</p>

              <!-- Priority and Dates -->
              <div class="space-y-2 mb-4">
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Priority:</span>
                  <span class="font-semibold" [ngClass]="getPriorityTextColor(task.priority)">
                    {{ task.priority | titlecase }}
                  </span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-gray-600">Due Date:</span>
                  <span class="font-semibold text-gray-900">{{ task.dueDate }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-3">
                <button
                  [routerLink]="['/edit', task.id]"
                  class="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-bold text-sm"
                >
                  <svg
                    class="w-4 h-4 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                  Edit
                </button>
                <button
                  (click)="deleteTask(task.id)"
                  class="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-bold text-sm"
                >
                  <svg
                    class="w-4 h-4 inline mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    ></path>
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          </ng-container>

          <ng-template #noTasks>
            <div
              class="col-span-full text-center py-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl"
            >
              <div class="text-7xl mb-6 animate-bounce">📭</div>
              <h3 class="text-2xl font-black text-gray-900 mb-3">No Tasks Found</h3>
              <p class="text-gray-600 text-lg">Try adjusting your search or filters</p>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  displayedTasks: Task[] = [];
  searchId: number | null = null;
  selectedStatus: string = '';
  totalTasks = 0;
  completedCount = 0;
  inProgressCount = 0;
  pendingCount = 0;
  private destroy$ = new Subject<void>();

  constructor(private taskService: TaskService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAllTasks();
  }

  loadAllTasks(): void {
    this.taskService
      .getAllTasks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((tasks) => {
        this.tasks = tasks;
        this.displayedTasks = tasks;
        this.updateStats();
        this.cdr.markForCheck();
      });
  }

  findById(): void {
    if (!this.searchId || this.searchId <= 0) {
      alert('Please enter a valid task ID');
      return;
    }

    this.taskService.getTaskById(this.searchId).subscribe((task) => {
      if (task) {
        this.displayedTasks = [task];
      } else {
        alert(`Task with ID ${this.searchId} not found`);
        this.displayedTasks = [];
      }
    });
  }

  filterByStatus(): void {
    if (!this.selectedStatus) {
      this.displayedTasks = this.tasks;
    } else {
      this.taskService.getTasksByStatus(this.selectedStatus as any).subscribe((tasks) => {
        this.displayedTasks = tasks;
      });
    }
  }

  deleteTask(id: number): void {
    if (!confirm('Are you sure you want to delete this task?')) {
      return;
    }

    this.taskService.deleteTask(id).subscribe((success) => {
      if (success) {
        alert('Task deleted successfully');
        this.loadAllTasks();
      } else {
        alert('Failed to delete task');
      }
    });
  }

  clearSearch(): void {
    this.searchId = null;
    this.selectedStatus = '';
    this.loadAllTasks();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  trackByTaskId(index: number, task: Task): number {
    return task.id;
  }

  updateStats(): void {
    this.totalTasks = this.tasks.length;
    this.completedCount = this.tasks.filter((t) => t.status === 'completed').length;
    this.inProgressCount = this.tasks.filter((t) => t.status === 'in-progress').length;
    this.pendingCount = this.tasks.filter((t) => t.status === 'pending').length;
  }

  getStatusBadgeClass(status: string): string {
    const baseClass = 'px-3 py-1 rounded-full text-xs font-semibold';
    switch (status) {
      case 'completed':
        return `${baseClass} bg-green-100 text-green-800`;
      case 'in-progress':
        return `${baseClass} bg-blue-100 text-blue-800`;
      case 'pending':
        return `${baseClass} bg-yellow-100 text-yellow-800`;
      default:
        return baseClass;
    }
  }

  getPriorityBorderColor(priority: string): string {
    switch (priority) {
      case 'high':
        return 'border-red-500';
      case 'medium':
        return 'border-yellow-500';
      case 'low':
        return 'border-green-500';
      default:
        return 'border-gray-300';
    }
  }

  getPriorityTextColor(priority: string): string {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      case 'low':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  }
}
