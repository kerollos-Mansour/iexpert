import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enrollment.component.html',
  styleUrl: './enrollment.component.css'
})
export class EnrollmentComponent implements OnInit {
  enrollForm!: FormGroup;
  courses: Course[] = [];
  loading = false;
  successMessage = '';
  errorMessage = '';

  // Custom Dropdown State
  courseDropdownOpen = false;
  levelDropdownOpen = false;
  selectedCourseName = 'Choose a course';
  selectedLevelName = 'Select level';

  toggleCourseDropdown() {
    this.courseDropdownOpen = !this.courseDropdownOpen;
    this.levelDropdownOpen = false;
  }

  toggleLevelDropdown() {
    this.levelDropdownOpen = !this.levelDropdownOpen;
    this.courseDropdownOpen = false;
  }

  selectCourse(course: Course) {
    this.enrollForm.patchValue({ courseId: course.courseId });
    this.selectedCourseName = course.title;
    this.courseDropdownOpen = false;
  }

  selectLevel(level: string) {
    this.enrollForm.patchValue({ experienceLevel: level });
    this.selectedLevelName = level;
    this.levelDropdownOpen = false;
  }

  perks = [
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Expert-Led Training',
      desc: 'Learn directly from industry professionals'
    },
    {
      icon: 'fa-solid fa-certificate',
      title: 'Certificate of Completion',
      desc: 'Get a verified certificate upon finishing'
    },
    {
      icon: 'fa-solid fa-lightbulb',
      title: 'Lifetime Access',
      desc: 'Access course materials anytime, forever'
    }
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
      next: (data) => (this.courses = data),
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
        this.successMessage =
          res.message || 'You have been enrolled successfully!';
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.message || 'Enrollment failed. Please try again.';
      }
    });
  }
}
