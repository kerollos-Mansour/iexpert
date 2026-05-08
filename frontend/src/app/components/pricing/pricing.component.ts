import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [
    {
      icon: 'fa-solid fa-leaf',
      name: 'Starter',
      price: 'Free',
      period: '',
      popular: false,
      desc: 'Perfect for exploring and getting started with tech education.',
      cta: 'Get Started Free',
      features: [
        'Access to 3 free courses',
        'Community forum access',
        'Basic learning materials',
        'Email support'
      ]
    },
    {
      icon: 'fa-solid fa-rocket',
      name: 'Professional',
      price: '$49',
      period: '/month',
      popular: true,
      desc: 'Everything you need to accelerate your career in tech.',
      cta: 'Enroll Now',
      features: [
        'Unlimited course access',
        'Certificate of completion',
        'Live Q&A sessions',
        'Priority support',
        'Project reviews'
      ]
    },
    {
      icon: 'fa-solid fa-trophy',
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      popular: false,
      desc: 'Full team access with dedicated mentorship and custom tracks.',
      cta: 'Contact Us',
      features: [
        'Everything in Professional',
        'Dedicated mentor',
        'Custom learning path',
        'Team analytics dashboard',
        'Invoiced billing'
      ]
    }
  ];
}
