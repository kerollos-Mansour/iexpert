import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="nav-container">
        <a class="nav-brand" href="#">
          <span class="brand-icon">⚡</span>
          <span class="brand-text">iExperts <span class="brand-accent">Academy</span></span>
        </a>
        <button class="nav-toggle" (click)="toggleMenu()" [class.open]="menuOpen" aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" [class.open]="menuOpen">
          <li><a href="#hero" (click)="closeMenu()">Home</a></li>
          <li><a href="#courses" (click)="closeMenu()">Courses</a></li>
          <li><a href="#instructors" (click)="closeMenu()">Instructors</a></li>
          <li><a href="#testimonials" (click)="closeMenu()">Reviews</a></li>
          <li><a href="#pricing" (click)="closeMenu()">Pricing</a></li>
          <li><a href="#enroll" class="nav-cta" (click)="closeMenu()">Enroll Now</a></li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; padding: 1.2rem 0; transition: all 0.3s ease; background: transparent; }
    .navbar.scrolled { background: rgba(10,10,30,0.95); backdrop-filter: blur(12px); box-shadow: 0 2px 30px rgba(99,102,241,0.15); padding: 0.8rem 0; }
    .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; font-size: 1.4rem; font-weight: 800; color: #fff; }
    .brand-accent { color: #6366f1; }
    .nav-links { display: flex; list-style: none; gap: 2rem; margin: 0; padding: 0; align-items: center; }
    .nav-links a { color: rgba(255,255,255,0.85); text-decoration: none; font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
    .nav-links a:hover { color: #6366f1; }
    .nav-cta { background: linear-gradient(135deg,#6366f1,#8b5cf6) !important; color: #fff !important; padding: 0.5rem 1.4rem; border-radius: 50px; font-weight: 600 !important; }
    .nav-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
    .nav-toggle span { display: block; width: 25px; height: 2px; background: #fff; border-radius: 4px; transition: all 0.3s; }
    .nav-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .nav-toggle.open span:nth-child(2) { opacity: 0; }
    .nav-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
    @media (max-width: 768px) {
      .nav-toggle { display: flex; }
      .nav-links { position: fixed; top: 70px; left: 0; width: 100%; background: rgba(10,10,30,0.98); backdrop-filter: blur(12px); flex-direction: column; gap: 0; padding: 1rem 0; max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
      .nav-links.open { max-height: 400px; }
      .nav-links a { display: block; padding: 0.9rem 2rem; }
    }
  `]
})
export class NavbarComponent {
  scrolled = false;
  menuOpen = false;

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 50; });
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
