import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-guides',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css'],
})
export class GuidesComponent {
  guides = [
    {
      title: 'For Students',
      desc: 'Find qualified tutors easily and start learning quickly.',
      icon: 'school',
    },
    {
      title: 'For Tutors',
      desc: 'Offer your expertise and connect with students worldwide.',
      icon: 'person',
    },
  ];
}