import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-50" id="process">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white rounded-[3rem] p-12 md:p-20 shadow-sm border border-slate-100">
          <h2 class="text-3xl font-bold mb-16 text-center">Get Started in 3 Steps</h2>
          <div class="grid md:grid-cols-3 gap-12">
            <ng-container *ngFor="let item of steps; let idx = index">
              <div class="relative space-y-4">
                <span class="text-6xl font-black text-slate-100 absolute -top-10 -left-4 z-0">{{ item.step }}</span>
                <div class="relative z-10">
                  <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                  <p class="text-slate-500">{{ item.desc }}</p>
                </div>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProcessComponent {
  steps = [
    { step: '01', title: 'Setup Profile', desc: 'Add your subjects, availability, and fee structure.' },
    { step: '02', title: 'Add Students', desc: 'Easily import student data and assign them to batches.' },
    { step: '03', title: 'Manage & Scale', desc: 'Automate your daily admin tasks and grow your brand.' }
  ];
}