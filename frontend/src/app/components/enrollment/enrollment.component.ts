import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="enroll-section" id="enroll">
      <div class="enroll-container">
        <div class="enroll-left">
          <span class="section-badge">🎓 Get Started</span>
          <h2 class="enroll-title">Ready to <span class="gradient-text">Level Up?</span></h2>
          <p class="enroll-subtitle">Join hundreds of students already learning with iExperts Academy. Fill out the form and start your journey today.</p>
          <div class="enroll-perks">
            <div class="perk-item" *ngFor="let perk of perks">
              <span class="perk-icon">{{ perk.icon }}</span>
              <div>
                <strong>{{ perk.title }}</strong>
                <p>{{ perk.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="enroll-right">
          <div class="form-card">
            <div class="success-msg" *ngIf="successMessage">
              <span class="success-icon">✅</span>
              <h3>Enrollment Successful!</h3>
              <p>{{ successMessage }}</p>
            </div>
            <div class="error-msg" *ngIf="errorMessage">
              <span>⚠️ {{ errorMessage }}</span>
            </div>
            <form [formGroup]="enrollForm" (ngSubmit)="onSubmit()" *ngIf="!successMessage">
              <div class="form-group">
                <label for="fullName">Full Name *</label>
                <input id="fullName" type="text" formControlName="fullName" placeholder="Enter your full name" [class.invalid]="isInvalid('fullName')" />
                <span class="field-error" *ngIf="isInvalid('fullName')">Full name is required (min 3 characters)</span>
              </div>
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input id="email" type="email" formControlName="email" placeholder="your@email.com" [class.invalid]="isInvalid('email')" />
                <span class="field-error" *ngIf="isInvalid('email')">Please enter a valid email address</span>
              </div>
              <div class="form-group">
                <label for="phoneNumber">Phone Number *</label>
                <input id="phoneNumber" type="tel" formControlName="phoneNumber" placeholder="+20 1XX XXX XXXX" [class.invalid]="isInvalid('phoneNumber')" />
                <span class="field-error" *ngIf="isInvalid('phoneNumber')">Phone number is required</span>
              </div>
              <div class="form-group">
                <label for="courseId">Select Course *</label>
                <select id="courseId" formControlName="courseId" [class.invalid]="isInvalid('courseId')">
                  <option value="">-- Choose a course --</option>
                  <option *ngFor="let course of courses" [value]="course.courseId">{{ course.title }}</option>
                </select>
                <span class="field-error" *ngIf="isInvalid('courseId')">Please select a course</span>
              </div>
              <div class="form-group">
                <label for="experienceLevel">Experience Level *</label>
                <select id="experienceLevel" formControlName="experienceLevel" [class.invalid]="isInvalid('experienceLevel')">
                  <option value="">-- Select your level --</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
                <span class="field-error" *ngIf="isInvalid('experienceLevel')">Please select your experience level</span>
              </div>
              <button type="submit" class="submit-btn" [disabled]="loading">
                <span *ngIf="!loading">Enroll Now 🚀</span>
                <span *ngIf="loading" class="btn-loader">Submitting...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .enroll-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .enroll-container { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
    .section-badge { display: inline-block; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .enroll-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 800; color: #fff; margin-bottom: 1rem; line-height: 1.2; }
    .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .enroll-subtitle { color: rgba(255,255,255,0.6); font-size: 1rem; line-height: 1.7; margin-bottom: 2rem; }
    .enroll-perks { display: flex; flex-direction: column; gap: 1.2rem; }
    .perk-item { display: flex; gap: 1rem; align-items: flex-start; }
    .perk-icon { font-size: 1.5rem; flex-shrink: 0; }
    .perk-item strong { display: block; color: #fff; font-weight: 600; margin-bottom: 0.2rem; }
    .perk-item p { color: rgba(255,255,255,0.5); font-size: 0.88rem; margin: 0; }
    .form-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 24px; padding: 2.5rem; backdrop-filter: blur(20px); }
    .form-group { margin-bottom: 1.4rem; }
    label { display: block; color: rgba(255,255,255,0.8); font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem; }
    input, select {
      width: 100%; padding: 0.85rem 1rem;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 10px; color: #fff; font-size: 0.95rem;
      transition: all 0.3s; outline: none; box-sizing: border-box;
    }
    input::placeholder { color: rgba(255,255,255,0.3); }
    input:focus, select:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.2); }
    input.invalid, select.invalid { border-color: #ef4444; }
    select option { background: #1a1a2e; color: #fff; }
    .field-error { display: block; color: #f87171; font-size: 0.8rem; margin-top: 0.4rem; }
    .submit-btn {
      width: 100%; padding: 1rem;
      background: linear-gradient(135deg,#6366f1,#8b5cf6);
      color: #fff; border: none; border-radius: 50px;
      font-size: 1rem; font-weight: 700; cursor: pointer;
      transition: all 0.3s; margin-top: 0.5rem;
    }
    .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(99,102,241,0.5); }
    .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
    .success-msg { text-align: center; padding: 2rem; }
    .success-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
    .success-msg h3 { color: #10b981; font-size: 1.4rem; margin-bottom: 0.5rem; }
    .success-msg p { color: rgba(255,255,255,0.7); }
    .error-msg { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); color: #f87171; padding: 0.8rem 1.2rem; border-radius: 10px; margin-bottom: 1.2rem; font-size: 0.9rem; }
    @media (max-width: 900px) { .enroll-container { grid-template-columns: 1fr; } }
  `]
})
export class EnrollmentComponent implements OnInit {
  enrollForm!: FormGroup;
  courses: Course[] = [];
  loading = false;
  successMessage = '';
  errorMessage = '';

  perks = [
    { icon: '🎯', title: 'Expert-Led Training', desc: 'Learn directly from industry professionals' },
    { icon: '📜', title: 'Certificate of Completion', desc: 'Get a verified certificate upon finishing' },
    { icon: '💡', title: 'Lifetime Access', desc: 'Access course materials anytime, forever' },
  ];

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit() {
    this.enrollForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      courseId: ['', [Validators.required]],
      experienceLevel: ['', [Validators.required]]
    });

    this.courseService.getCourses().subscribe({
      next: (data) => this.courses = data,
      error: () => {}
    });
  }

  isInvalid(field: string): boolean {
    const ctrl = this.enrollForm.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }

  onSubmit() {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';

    const payload = {
      ...this.enrollForm.value,
      courseId: Number(this.enrollForm.value.courseId)
    };

    this.enrollmentService.enroll(payload).subscribe({
      next: (res) => {
        this.loading = false;
        this.successMessage = res.message || 'You have been enrolled successfully!';
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = err?.error?.message || 'Enrollment failed. Please try again.';
      }
    });
  }
}
