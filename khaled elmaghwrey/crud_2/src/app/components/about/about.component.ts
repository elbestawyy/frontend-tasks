import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
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

        <!-- About Content -->
        <div
          class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-white/20"
        >
          <div class="text-center mb-10">
            <div
              class="inline-block p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl mb-4"
            >
              <svg
                class="w-16 h-16 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h1
              class="text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3"
            >
              About TaskMaster
            </h1>
            <p class="text-gray-500 text-lg">Your Ultimate Productivity Companion</p>
          </div>

          <div class="space-y-8 text-gray-600">
            <section class="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
              <h2 class="text-3xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span class="text-3xl">🎯</span>
                Welcome to TaskMaster
              </h2>
              <p class="leading-relaxed text-lg">
                TaskMaster is a modern, efficient task management application built with Angular 21
                and Tailwind CSS. Designed to help you organize, track, and complete your tasks with
                ease and style!
              </p>
            </section>

            <section>
              <h2 class="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span class="text-3xl">✨</span>
                Key Features
              </h2>
              <div class="grid md:grid-cols-2 gap-4">
                <div
                  class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border-l-4 border-blue-600"
                >
                  <h3 class="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Full CRUD Operations
                  </h3>
                  <p class="text-blue-700 text-sm">
                    Create, read, update, and delete tasks effortlessly
                  </p>
                </div>
                <div
                  class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border-l-4 border-green-600"
                >
                  <h3 class="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Smart Search
                  </h3>
                  <p class="text-green-700 text-sm">Search tasks by ID for quick access</p>
                </div>
                <div
                  class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-l-4 border-purple-600"
                >
                  <h3 class="font-bold text-purple-900 mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Advanced Filtering
                  </h3>
                  <p class="text-purple-700 text-sm">Filter by status and priority levels</p>
                </div>
                <div
                  class="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl border-l-4 border-pink-600"
                >
                  <h3 class="font-bold text-pink-900 mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Real-time Stats
                  </h3>
                  <p class="text-pink-700 text-sm">Beautiful dashboard with live statistics</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span class="text-3xl">🚀</span>
                Technology Stack
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div
                  class="bg-gradient-to-br from-red-500 to-red-700 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">Angular 21</h3>
                  <p class="text-sm text-red-100 mt-2">Frontend Framework</p>
                </div>
                <div
                  class="bg-gradient-to-br from-cyan-500 to-blue-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">Tailwind CSS</h3>
                  <p class="text-sm text-cyan-100 mt-2">Styling</p>
                </div>
                <div
                  class="bg-gradient-to-br from-purple-500 to-purple-700 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">RxJS</h3>
                  <p class="text-sm text-purple-100 mt-2">Reactive Programming</p>
                </div>
                <div
                  class="bg-gradient-to-br from-blue-500 to-blue-700 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">TypeScript</h3>
                  <p class="text-sm text-blue-100 mt-2">Language</p>
                </div>
                <div
                  class="bg-gradient-to-br from-yellow-500 to-orange-600 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">Reactive Forms</h3>
                  <p class="text-sm text-yellow-100 mt-2">Form Handling</p>
                </div>
                <div
                  class="bg-gradient-to-br from-pink-500 to-pink-700 p-6 rounded-2xl text-white transform hover:scale-105 transition-all shadow-lg"
                >
                  <h3 class="font-black text-xl">Standalone</h3>
                  <p class="text-sm text-pink-100 mt-2">Components</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                <span class="text-3xl">📱</span>
                Navigation Guide
              </h2>
              <div class="space-y-4">
                <div class="border-l-4 border-blue-600 bg-blue-50 pl-6 py-4 rounded-r-xl">
                  <h3 class="font-black text-blue-900 flex items-center gap-2 mb-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                      ></path>
                    </svg>
                    Dashboard
                  </h3>
                  <p class="text-blue-700">View all tasks, search by ID, and filter by status</p>
                </div>
                <div class="border-l-4 border-green-600 bg-green-50 pl-6 py-4 rounded-r-xl">
                  <h3 class="font-black text-green-900 flex items-center gap-2 mb-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    New Task
                  </h3>
                  <p class="text-green-700">Create a brand new task with all details</p>
                </div>
                <div class="border-l-4 border-purple-600 bg-purple-50 pl-6 py-4 rounded-r-xl">
                  <h3 class="font-black text-purple-900 flex items-center gap-2 mb-1">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                      ></path>
                    </svg>
                    Edit Task
                  </h3>
                  <p class="text-purple-700">Click on edit button to modify task details</p>
                </div>
              </div>
            </section>

            <section
              class="bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 p-8 rounded-2xl border-2 border-orange-200"
            >
              <h2 class="text-2xl font-black text-orange-900 mb-4 flex items-center gap-2">
                <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                💡 Pro Tips
              </h2>
              <ul class="space-y-3 text-orange-800 font-medium">
                <li class="flex items-start gap-3">
                  <span class="text-orange-600 font-black">✓</span>
                  <span>Set priorities appropriately to focus on important tasks first</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-orange-600 font-black">✓</span>
                  <span>Keep task descriptions detailed for future reference</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-orange-600 font-black">✓</span>
                  <span>Regularly update task status to track progress</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-orange-600 font-black">✓</span>
                  <span>Use due dates to plan your schedule effectively</span>
                </li>
              </ul>
            </section>
          </div>

          <!-- Contact Section -->
          <div class="mt-10 pt-8 border-t-2 border-gray-100">
            <p class="text-center text-gray-600 font-bold text-lg">
              Built with <span class="text-red-500 text-2xl">❤️</span> using Angular 21 and Tailwind
              CSS
            </p>
            <p
              class="text-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-black text-xl mt-3"
            >
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AboutComponent {}
