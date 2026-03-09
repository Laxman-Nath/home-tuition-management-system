import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <section class="py-24 bg-white" id="features">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 class="text-4xl font-bold tracking-tight">Everything you need</h2>
          <p class="text-slate-500">Powerful tools for tutors, parents, and students.</p>
        </div>

        <!-- BENTO GRID START -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Large Primary Feature -->
          <div class="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-between overflow-hidden relative group hover-card">
            <div class="relative z-10">
              <lucide-icon name="calendar" class="w-12 h-12 text-indigo-400 mb-6"></lucide-icon>
              <h3 class="text-3xl font-bold mb-4">Smart Scheduling</h3>
              <p class="text-slate-400 max-w-sm">
                Automate your entire calendar. Never miss a session with real-time SMS and Email alerts for parents.
              </p>
            </div>
            <div class="absolute bottom-0 right-0 w-1/2 translate-y-8 translate-x-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <div class="w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
            </div>
          </div>

          <!-- Small Feature 1 -->
          <div class="bg-indigo-50 rounded-[2.5rem] p-10 hover-card flex flex-col border border-indigo-100">
            <lucide-icon name="credit-card" class="w-10 h-10 text-indigo-600 mb-6"></lucide-icon>
            <h3 class="text-xl font-bold mb-2">Easy Payments</h3>
            <p class="text-slate-600">One-click fee collection with automated digital receipts.</p>
          </div>

          <!-- Small Feature 2 -->
          <div class="bg-white rounded-[2.5rem] p-10 hover-card flex flex-col border border-slate-100 shadow-soft">
            <lucide-icon name="bar-chart-3" class="w-10 h-10 text-purple-600 mb-6"></lucide-icon>
            <h3 class="text-xl font-bold mb-2">Detailed Analytics</h3>
            <p class="text-slate-600">Track student grades and attendance with visual charts.</p>
          </div>

          <!-- Feature 3 (Long/Wide) -->
          <div class="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 hover-card border border-slate-100 flex items-center justify-between">
            <div class="max-w-md">
              <lucide-icon name="shield-check" class="w-10 h-10 text-emerald-600 mb-6"></lucide-icon>
              <h3 class="text-xl font-bold mb-2">Verified Tutors</h3>
              <p class="text-slate-600">Every educator on our platform goes through a strict verification process for safety.</p>
            </div>
            <div class="hidden md:block bg-white p-4 rounded-2xl shadow-sm rotate-3">
              <span class="text-sm font-bold text-indigo-600">✓ Verified Profile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class FeaturesComponent {}