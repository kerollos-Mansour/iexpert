import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="instructors-section" id="instructors">
      <div class="section-container">
        <div class="section-header">
          <span class="section-badge">👨‍🏫 Meet the Team</span>
          <h2 class="section-title">Learn From <span class="gradient-text">The Best</span></h2>
          <p class="section-subtitle">Our instructors are industry practitioners with years of real-world experience</p>
        </div>
        <div class="loading-state" *ngIf="loading"><div class="spinner"></div><p>Loading instructors...</p></div>
        <div class="error-state" *ngIf="error && !loading"><p>⚠️ Could not load instructors.</p></div>
        <div class="instructors-grid" *ngIf="!loading && !error">
          <div class="instructor-card" *ngFor="let instructor of instructors; let i = index">
            <div class="instructor-avatar" [class]="'avatar-' + (i % 4)">
              <span class="avatar-initials">{{ getInitials(instructor.name) }}</span>
            </div>
            <div class="instructor-info">
              <h3 class="instructor-name">{{ instructor.name }}</h3>
              <p class="instructor-spec">{{ instructor.specialization }}</p>
              <p class="instructor-exp">{{ instructor.experienceYears }}+ years experience</p>
              <p class="instructor-bio" *ngIf="instructor.bio">{{ instructor.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .instructors-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-badge { display: inline-block; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
    .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .section-subtitle { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; }
    .loading-state, .error-state { text-align: center; padding: 3rem; color: rgba(255,255,255,0.6); }
    .spinner { width: 50px; height: 50px; border: 3px solid rgba(99,102,241,0.2); border-top-color: #6366f1; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 1rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .instructors-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(260px,1fr)); gap: 1.5rem; }
    .instructor-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; padding: 2rem; text-align: center; transition: all 0.3s; }
    .instructor-card:hover { transform: translateY(-6px); border-color: rgba(99,102,241,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
    .instructor-avatar { width: 90px; height: 90px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem; font-size: 1.8rem; font-weight: 800; color: #fff; }
    .avatar-0 { background: linear-gradient(135deg,#6366f1,#8b5cf6); }
    .avatar-1 { background: linear-gradient(135deg,#06b6d4,#3b82f6); }
    .avatar-2 { background: linear-gradient(135deg,#10b981,#06b6d4); }
    .avatar-3 { background: linear-gradient(135deg,#f59e0b,#ef4444); }
    .avatar-initials { font-size: 1.6rem; font-weight: 800; }
    .instructor-name { font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 0.3rem; }
    .instructor-spec { color: #6366f1; font-size: 0.88rem; font-weight: 600; margin-bottom: 0.3rem; }
    .instructor-exp { color: rgba(255,255,255,0.5); font-size: 0.82rem; margin-bottom: 0.8rem; }
    .instructor-bio { color: rgba(255,255,255,0.55); font-size: 0.85rem; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    @media (max-width: 768px) { .instructors-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 480px) { .instructors-grid { grid-template-columns: 1fr; } }
  `]
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];
  loading = true;
  error = false;

  constructor(private instructorService: InstructorService) {}

  ngOnInit() {
    this.instructorService.getInstructors().subscribe({
      next: (data) => { this.instructors = data; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }
}
