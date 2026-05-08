import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Instructor } from '../models/instructor.model';
import { ApiResponse } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class InstructorService {
  private apiUrl = 'http://localhost:5085/api/instructors';

  constructor(private http: HttpClient) {}

  getInstructors(): Observable<Instructor[]> {
    return this.http.get<ApiResponse<Instructor[]>>(this.apiUrl).pipe(
      map(res => res.data)
    );
  }
}
