import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EnrollmentRequest } from '../models/enrollment.model';
import { ApiResponse } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class EnrollmentService {
  private apiUrl = 'http://localhost:5085/api/enrollments';

  constructor(private http: HttpClient) {}

  enroll(data: EnrollmentRequest): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(this.apiUrl, data);
  }
}
