import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="pricing-section" id="pricing">
      <div class="section-container">
        <div class="section-header">
          <span class="section-badge">💎 Pricing</span>
          <h2 class="section-title">Simple, <span class="gradient-text">Transparent Pricing</span></h2>
          <p class="section-subtitle">Choose the plan that fits your learning goals. No hidden fees, ever.</p>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card" *ngFor="let plan of plans" [class.popular]="plan.popular">
            <div class="popular-badge" *ngIf="plan.popular">Most Popular ⭐</div>
            <div class="plan-icon">{{ plan.icon }}</div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <div class="plan-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span class="price-period" *ngIf="plan.period">{{ plan.period }}</span>
            </div>
            <p class="plan-desc">{{ plan.desc }}</p>
            <ul class="plan-features">
              <li *ngFor="let feature of plan.features">
                <span class="check">✓</span> {{ feature }}
              </li>
            </ul>
            <a href="#enroll" class="plan-btn" [class.plan-btn-primary]="plan.popular">{{ plan.cta }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .pricing-section { padding: 5rem 2rem; max-width: 1200px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 3rem; }
    .section-badge { display: inline-block; background: rgba(99,102,241,0.15); border: 1px solid rgba(99,102,241,0.3); color: #a5b4fc; padding: 0.4rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
    .section-title { font-size: clamp(2rem,4vw,2.8rem); font-weight: 800; color: #fff; margin-bottom: 1rem; }
    .gradient-text { background: linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .section-subtitle { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; }
    .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); gap: 1.5rem; align-items: start; }
    .pricing-card {
      background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px; padding: 2.5rem 2rem; position: relative;
      transition: all 0.3s;
    }
    .pricing-card:hover { transform: translateY(-6px); border-color: rgba(99,102,241,0.3); }
    .pricing-card.popular { border-color: rgba(99,102,241,0.5); background: rgba(99,102,241,0.08); }
    .popular-badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff; padding: 0.35rem 1.2rem; border-radius: 50px; font-size: 0.8rem; font-weight: 700; white-space: nowrap; }
    .plan-icon { font-size: 2.5rem; margin-bottom: 1rem; }
    .plan-name { color: #fff; font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; }
    .plan-price { display: flex; align-items: baseline; gap: 0.3rem; margin-bottom: 0.5rem; }
    .price-amount { color: #fff; font-size: 2.5rem; font-weight: 800; }
    .price-period { color: rgba(255,255,255,0.5); font-size: 0.9rem; }
    .plan-desc { color: rgba(255,255,255,0.5); font-size: 0.88rem; margin-bottom: 1.5rem; line-height: 1.6; }
    .plan-features { list-style: none; padding: 0; margin: 0 0 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
    .plan-features li { color: rgba(255,255,255,0.75); font-size: 0.9rem; display: flex; align-items: center; gap: 0.6rem; }
    .check { color: #10b981; font-weight: 700; }
    .plan-btn {
      display: block; text-align: center; padding: 0.85rem 1.5rem;
      border: 1px solid rgba(99,102,241,0.4); color: #a5b4fc;
      border-radius: 50px; font-weight: 600; font-size: 0.95rem;
      text-decoration: none; transition: all 0.3s;
    }
    .plan-btn:hover { background: rgba(99,102,241,0.1); }
    .plan-btn-primary { background: linear-gradient(135deg,#6366f1,#8b5cf6); color: #fff !important; border: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4); }
    .plan-btn-primary:hover { transform: scale(1.02); box-shadow: 0 8px 30px rgba(99,102,241,0.5); }
    @media (max-width: 768px) { .pricing-grid { grid-template-columns: 1fr; } }
  `]
})
export class PricingComponent {
  plans = [
    {
      icon: '🌱', name: 'Starter', price: 'Free', period: '', popular: false,
      desc: 'Perfect for exploring and getting started with tech education.',
      cta: 'Get Started Free',
      features: ['Access to 3 free courses', 'Community forum access', 'Basic learning materials', 'Email support']
    },
    {
      icon: '🚀', name: 'Professional', price: '$49', period: '/month', popular: true,
      desc: 'Everything you need to accelerate your career in tech.',
      cta: 'Enroll Now',
      features: ['Unlimited course access', 'Certificate of completion', 'Live Q&A sessions', 'Priority support', 'Project reviews']
    },
    {
      icon: '🏆', name: 'Enterprise', price: '$99', period: '/month', popular: false,
      desc: 'Full team access with dedicated mentorship and custom tracks.',
      cta: 'Contact Us',
      features: ['Everything in Professional', 'Dedicated mentor', 'Custom learning path', 'Team analytics dashboard', 'Invoiced billing']
    }
  ];
}
