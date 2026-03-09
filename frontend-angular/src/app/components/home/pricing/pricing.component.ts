import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingCardComponent } from '../pricingcard/pricingcard.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, PricingCardComponent],
  template: `
    <section class="py-24 bg-slate-50" id="pricing">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div class="border border-indigo-200 text-indigo-600 bg-indigo-50/50 px-4 py-1 rounded-full inline-block font-medium">
            Transparent Pricing
          </div>
          <h2 class="text-4xl font-bold tracking-tight md:text-5xl">
            Simple plans for <span class="text-indigo-600">everyone</span>
          </h2>
          <p class="text-slate-500 text-lg">
            No hidden fees. Choose the plan that fits your role in the learning ecosystem.
          </p>
        </div>

<div class="grid md:grid-cols-3 gap-8 items-stretch">
          <app-pricing-card
            *ngFor="let plan of plans"
            [title]="plan.title"
            [description]="plan.description"
            [icon]="plan.icon"
            [badge]="plan.badge"
            [price]="plan.price"
            [features]="plan.features"
            [buttonText]="plan.buttonText"
            [dark]="plan.dark"
            [customClass]="plan.customClass"
          >
          </app-pricing-card>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {
 plans = [
  {
    title: "Teachers & Tutors",
    description: "Perfect for independent tutors looking to scale.",
    badge: "For Educators",
    icon: 'graduation-cap',
    dark: false,
    price: 'Free / 2 Enrollments',
    features: [
      "Next enrollments: Rs. 1,000 each",
      "Unlimited Progress Reports",
      "Automated Fee Reminders",
    ],
    buttonText: "Register as Tutor",
    customClass: '',
  },

  {
    title: "Students & Guardians",
    description: "Track academic progress with verified tutors.",
    badge: "For Parents",
    icon: 'user',
    dark: true,
    popular: true,   // ⭐ highlight this plan
    price: 'Rs. 500 / per course',
    features: [
      "Access to verified Tutors",
      "Real-time Attendance Tracking",
      "Monthly Grade Analytics",
    ],
    buttonText: "Find a Tutor",
    customClass: '',
  },

  {
    title: "Institutes & SaaS Owners",
    description: "Buy the complete system and manage your own academy.",
    badge: "Enterprise",
    icon: 'building',
    dark: false,
    price: 'Custom Pricing',
    features: [
      "White-label platform",
      "Full Admin Control",
      "Student & Teacher Management",
      "Custom Branding",
      "Priority Support",
    ],
    buttonText: "Contact Sales",
    customClass:
      "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-2xl",
  }
]
}