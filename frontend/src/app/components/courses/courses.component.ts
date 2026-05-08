import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="courses-section" id="courses">
      <div class="section-container">
        <div class="section-header">
          <span class="section-badge">📚 Our Courses</span>
          <h2 class="section-title">Learn From <span class="gradient-text">Industry Experts</span></h2>
          <p class="section-subtitle">Curated courses designed to take you from beginner to professional</p>
        </div>
        <div class="loading-state" *ngIf="loading"><div class="spinner"></div><p>Loading courses...</p></div>
        <div class="error-state" *ngIf="error && !loading"><p>⚠️ Could not load courses. Please try again later.</p></div>
        <div class="courses-grid" *ngIf="!loading && !error">
          <div class="course-card" *ngFor="let course of courses; let i = index">
            <div class="course-card-header" [class]="'header-' + (i % 4)">
              <span class="course-icon">{{ icons[i % icons.length] }}</span>
              <span class="course-level-badge">{{ course.level || 'All Levels' }}</span>
            </div>
            <div class="course-card-body">
              <h3 class="course-title">{{ course.title }}</h3>
              <p class="course-description">{{ course.description }}</p>
              <div class="course-footer">
                <span class="course-price">{{ course.price ? (course.price | currency:'USD':'symbol':'1.0-0') : 'Free' }}</span>
                <a href="#enroll" class="course-btn">Enroll →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .courses-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-badge { display: inline-block; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
    .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .section-subtitle { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; }
    .loading-state, .error-state { text-align: center; padding: 4rem; color: rgba(255,255,255,0.6); }
    .spinner { width: 50px; height: 50px; border: 3px solid rgba(99,102,241,0.2); border-top-color: #6366f1; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 1rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .courses-grid { display: grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); gap: 1.5rem; }
    .course-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; transition: all 0.3s; }
    .course-card:hover { transform: translateY(-6px); border-color: rgba(99,102,241,0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
    .course-card-header { height: 110px; display: flex; align-items: center; justify-content: space-between; padding: 1.5rem; }
    .header-0 { background: linear-gradient(135deg,rgba(99,102,241,0.5),rgba(139,92,246,0.5)); }
    .header-1 { background: linear-gradient(135deg,rgba(6,182,212,0.5),rgba(59,130,246,0.5)); }
    .header-2 { background: linear-gradient(135deg,rgba(16,185,129,0.5),rgba(6,182,212,0.5)); }
    .header-3 { background: linear-gradient(135deg,rgba(245,158,11,0.5),rgba(239,68,68,0.5)); }
    .course-icon { font-size: 2.2rem; }
    .course-level-badge { background: rgba(255,255,255,0.2); color: #fff; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
    .course-card-body { padding: 1.5rem; }
    .course-title { font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 0.6rem; line-height: 1.4; }
    .course-description { color: rgba(255,255,255,0.55); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.2rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .course-footer { display: flex; justify-content: space-between; align-items: center; }
    .course-price { color: #6366f1; font-weight: 700; font-size: 1.1rem; }
    .course-btn { background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; padding: 0.45rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: all 0.3s; }
    .course-btn:hover { transform: scale(1.05); box-shadow: 0 4px 15px rgba(99,102,241,0.4); }
    @media (max-width: 768px) { .courses-grid { grid-template-columns: 1fr; } }
  `]
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  loading = true;
  error = false;
  icons = ['💻', '☁️', '🔐', '📱', '🤖', '🧠', '🛠️', '📊'];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (data) => { this.courses = data; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }
}
