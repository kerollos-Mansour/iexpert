import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CoursesComponent } from './components/courses/courses.component';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    CoursesComponent,
    InstructorsComponent,
    EnrollmentComponent,
    TestimonialsComponent,
    PricingComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-courses></app-courses>
      <app-instructors></app-instructors>
      <app-testimonials></app-testimonials>
      <app-pricing></app-pricing>
      <app-enrollment></app-enrollment>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
