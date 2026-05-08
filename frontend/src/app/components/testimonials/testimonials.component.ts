import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section" id="testimonials">
      <div class="section-container">
        <div class="section-header">
          <span class="section-badge">💬 Reviews</span>
          <h2 class="section-title">What Our <span class="gradient-text">Students Say</span></h2>
          <p class="section-subtitle">Real feedback from real learners who transformed their careers</p>
        </div>
        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let t of testimonials">
            <div class="stars">⭐⭐⭐⭐⭐</div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar" [style.background]="t.color">{{ t.initials }}</div>
              <div>
                <strong class="author-name">{{ t.name }}</strong>
                <span class="author-role">{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-badge { display: inline-block; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
    .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .section-subtitle { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; }
    .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); gap: 1.5rem; }
    .testimonial-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 2rem; transition: all 0.3s; }
    .testimonial-card:hover { transform: translateY(-4px); border-color: rgba(99,102,241,0.3); }
    .stars { font-size: 1rem; margin-bottom: 1rem; letter-spacing: 2px; }
    .testimonial-text { color: rgba(255,255,255,0.75); font-size: 0.95rem; line-height: 1.7; margin-bottom: 1.5rem; font-style: italic; }
    .testimonial-author { display: flex; align-items: center; gap: 1rem; }
    .author-avatar { width: 45px; height: 45px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; color: #fff; flex-shrink: 0; }
    .author-name { display: block; color: #fff; font-weight: 700; font-size: 0.95rem; }
    .author-role { display: block; color: rgba(255,255,255,0.5); font-size: 0.82rem; }
    @media (max-width: 768px) { .testimonials-grid { grid-template-columns: 1fr; } }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    { text: 'iExperts Academy transformed my career. The Angular course was incredibly practical and the instructor was always available for questions. Landed my first dev job within 2 months!', name: 'Ahmed Hassan', role: 'Junior Frontend Developer', initials: 'AH', color: 'linear-gradient(135deg,#6366f1,#8b5cf6)' },
    { text: 'The .NET backend course was exactly what I needed. Clean architecture concepts were explained perfectly. Best investment I\'ve made in my education this year.', name: 'Sara Mohammed', role: 'Backend Developer', initials: 'SM', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)' },
    { text: 'I came in with zero coding experience and left with a full-stack portfolio. The instructors are top-tier professionals who genuinely care about student success.', name: 'Karim Adel', role: 'Full Stack Developer', initials: 'KA', color: 'linear-gradient(135deg,#10b981,#06b6d4)' },
    { text: 'Flexible learning schedule combined with expert mentorship makes iExperts Academy stand out. I studied while working full-time and still managed to complete in 3 months.', name: 'Nour El-Din', role: 'Software Engineer', initials: 'NE', color: 'linear-gradient(135deg,#f59e0b,#ef4444)' },
    { text: 'The quality of content here is on par with international platforms but with much more hands-on guidance. The community support is also outstanding.', name: 'Fatma Ali', role: 'Mobile Developer', initials: 'FA', color: 'linear-gradient(135deg,#8b5cf6,#6366f1)' },
    { text: 'From enrollment to certificate, the experience was seamless. The real-world projects helped me build a portfolio that impressed recruiters immediately.', name: 'Omar Khaled', role: 'Cloud Engineer', initials: 'OK', color: 'linear-gradient(135deg,#3b82f6,#06b6d4)' },
  ];
}
