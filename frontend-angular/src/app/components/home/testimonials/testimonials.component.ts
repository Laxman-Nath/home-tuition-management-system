import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote:
        "TutorFlow made it so easy to find a qualified math tutor for my daughter. Her grades improved within weeks!",
      name: "Fatima Rahman",
      role: "Parent",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima",
    },
    {
      quote:
        "As a tutor, the scheduling and payment tools save me hours every week. I can finally focus on what I love — teaching.",
      name: "Arif Hossain",
      role: "Tutor",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arif",
    },
    {
      quote:
        "I love being able to choose between online and home sessions. The progress dashboard is really motivating!",
      name: "Nadia Chowdhury",
      role: "Student",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nadia",
    },
  ];
}