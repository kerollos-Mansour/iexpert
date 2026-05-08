import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Testimonial } from '../models/testimonial.model';
import { ApiResponse } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class TestimonialService {
  private apiUrl = 'http://localhost:5085/api/testimonials';

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<ApiResponse<Testimonial[]>>(this.apiUrl).pipe(
      map(res => res.data)
    );
  }
}
