import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: 'iExperts Academy transformed my career. The Angular course was incredibly practical and the instructor was always available for questions. Landed my first dev job within 2 months!',
      name: 'Ahmed Hassan',
      role: 'Junior Frontend Developer',
      initials: 'AH',
      color: 'linear-gradient(135deg,#6366f1,#8b5cf6)'
    },
    {
      text: "The .NET backend course was exactly what I needed. Clean architecture concepts were explained perfectly. Best investment I've made in my education this year.",
      name: 'Sara Mohammed',
      role: 'Backend Developer',
      initials: 'SM',
      color: 'linear-gradient(135deg,#06b6d4,#3b82f6)'
    },
    {
      text: 'I came in with zero coding experience and left with a full-stack portfolio. The instructors are top-tier professionals who genuinely care about student success.',
      name: 'Karim Adel',
      role: 'Full Stack Developer',
      initials: 'KA',
      color: 'linear-gradient(135deg,#10b981,#06b6d4)'
    },
    {
      text: 'Flexible learning schedule combined with expert mentorship makes iExperts Academy stand out. I studied while working full-time and still managed to complete in 3 months.',
      name: 'Nour El-Din',
      role: 'Software Engineer',
      initials: 'NE',
      color: 'linear-gradient(135deg,#f59e0b,#ef4444)'
    },
    {
      text: 'The quality of content here is on par with international platforms but with much more hands-on guidance. The community support is also outstanding.',
      name: 'Fatma Ali',
      role: 'Mobile Developer',
      initials: 'FA',
      color: 'linear-gradient(135deg,#8b5cf6,#6366f1)'
    },
    {
      text: 'From enrollment to certificate, the experience was seamless. The real-world projects helped me build a portfolio that impressed recruiters immediately.',
      name: 'Omar Khaled',
      role: 'Cloud Engineer',
      initials: 'OK',
      color: 'linear-gradient(135deg,#3b82f6,#06b6d4)'
    }
  ];
}
