import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule,BookOpen } from 'lucide-angular';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="flex items-center gap-2">
      <div class="bg-indigo-600 p-2 rounded-xl group-hover:rotate-6 transition-transform">
        <lucide-icon [img]="bookOpen" class="w-6 h-6 text-white"></lucide-icon>
      </div>
      <span class="text-xl font-bold tracking-tight text-slate-900">
        Tutor<span class="text-indigo-600">Flow</span>
      </span>
    </div>
  `,
})
export class LogoComponent {
  bookOpen = BookOpen; 
}