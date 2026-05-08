import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.css'
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];
  loading = true;
  error = false;

  constructor(private instructorService: InstructorService) {}

  ngOnInit() {
    this.instructorService.getInstructors().subscribe({
      next: (data) => {
        this.instructors = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
