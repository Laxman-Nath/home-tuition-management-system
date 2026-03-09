import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { LucideAngularModule } from "lucide-angular"

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
<div
  class="relative flex flex-col h-full p-8 md:p-12 rounded-[2rem] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  [ngClass]="[
    customClass
      ? customClass
      : dark
      ? 'bg-slate-900 text-white border border-slate-800'
      : 'bg-white border border-slate-200'
  ]"
>

  <!-- MOST POPULAR -->
  <div *ngIf="popular"
    class="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-sm px-4 py-1 rounded-full shadow">
    Most Popular
  </div>

  <!-- HEADER -->
  <div class="flex justify-between items-start mb-8">

    <div
      class="p-4 rounded-xl"
      [ngClass]="dark ? 'bg-white/10 text-indigo-400' : 'bg-indigo-100 text-indigo-600'"
    >
      <lucide-icon *ngIf="icon" [name]="icon"></lucide-icon>
    </div>

    <div
      class="px-3 py-1 rounded-full font-medium text-sm"
      [ngClass]="dark ? 'bg-indigo-500/20 text-indigo-300' : 'bg-green-100 text-green-700'"
    >
      {{ badge }}
    </div>

  </div>

  <!-- TITLE -->
  <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>

  <p
    class="mb-6"
    [ngClass]="dark ? 'text-slate-400' : 'text-slate-500'"
  >
    {{ description }}
  </p>

  <!-- PRICE -->
  <div *ngIf="price" class="text-2xl font-semibold mb-6">
    {{ price }}
  </div>

  <!-- FEATURES -->
  <div class="space-y-4 mb-10 flex-grow">

    <div
      *ngFor="let feature of features"
      class="flex items-start gap-3"
      [ngClass]="dark ? 'text-slate-300' : 'text-slate-700'"
    >
      <lucide-icon
        name="check-circle-2"
        class="w-5 h-5 mt-1 flex-shrink-0"
        [ngClass]="dark ? 'text-indigo-400' : 'text-indigo-500'"
      ></lucide-icon>

      <span class="leading-relaxed">
        {{ feature }}
      </span>

    </div>

  </div>

  <!-- CTA BUTTON -->
  <button
    class="w-full h-14 rounded-xl text-lg font-semibold transition-all cursor-pointer"
    [ngClass]="
      dark
        ? 'bg-white text-slate-900 hover:bg-slate-100'
        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
    "
  >
    {{ buttonText }}
  </button>

</div>
`
})
export class PricingCardComponent {

  @Input() title!: string
  @Input() description!: string
  @Input() icon: string = 'book-open'
  @Input() badge: string = ''
  @Input() price?: string
  @Input() features: string[] = []
  @Input() buttonText: string = 'Get Started'
  @Input() dark: boolean = false
  @Input() popular: boolean = false
  @Input() customClass: string = ''

}