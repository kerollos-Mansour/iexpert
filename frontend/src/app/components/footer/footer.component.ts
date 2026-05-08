import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <div class="brand-logo">⚡ iExperts <span>Academy</span></div>
            <p class="brand-tagline">Learn. Build. Grow.</p>
            <p class="brand-desc">Empowering the next generation of tech professionals through expert-led, practical, and industry-aligned education.</p>
            <div class="social-links">
              <a href="#" class="social-link">𝕏</a>
              <a href="#" class="social-link">in</a>
              <a href="#" class="social-link">f</a>
              <a href="#" class="social-link">▶</a>
            </div>
          </div>
          <div class="footer-links-group">
            <h4>Platform</h4>
            <ul>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#instructors">Instructors</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#enroll">Enroll</a></li>
            </ul>
          </div>
          <div class="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press Kit</a></li>
            </ul>
          </div>
          <div class="footer-links-group">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:HR@iexperts.uk">HR&#64;iexperts.uk</a></li>
              <li><a href="tel:01149030386">011 490 30386</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 iExperts Academy. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer { background: rgba(0,0,0,0.4); border-top: 1px solid rgba(255,255,255,0.06); padding: 4rem 2rem 2rem; margin-top: 3rem; }
    .footer-container { max-width: 1200px; margin: 0 auto; }
    .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
    .brand-logo { font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem; }
    .brand-logo span { color: #6366f1; }
    .brand-tagline { color: #6366f1; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.8rem; }
    .brand-desc { color: rgba(255,255,255,0.5); font-size: 0.88rem; line-height: 1.7; margin-bottom: 1.5rem; }
    .social-links { display: flex; gap: 0.75rem; }
    .social-link { width: 38px; height: 38px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); font-size: 0.9rem; font-weight: 700; text-decoration: none; transition: all 0.3s; }
    .social-link:hover { background: rgba(99,102,241,0.2); border-color: rgba(99,102,241,0.4); color: #6366f1; }
    .footer-links-group h4 { color: #fff; font-weight: 700; margin-bottom: 1.2rem; font-size: 0.95rem; }
    .footer-links-group ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
    .footer-links-group a { color: rgba(255,255,255,0.5); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
    .footer-links-group a:hover { color: #6366f1; }
    .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 2rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
    .footer-bottom p { color: rgba(255,255,255,0.4); font-size: 0.88rem; }
    .footer-legal { display: flex; gap: 1.5rem; }
    .footer-legal a { color: rgba(255,255,255,0.4); font-size: 0.88rem; text-decoration: none; transition: color 0.2s; }
    .footer-legal a:hover { color: #6366f1; }
    @media (max-width: 900px) { .footer-top { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 560px) { .footer-top { grid-template-columns: 1fr; } .footer-bottom { flex-direction: column; text-align: center; } }
  `]
})
export class FooterComponent {}
