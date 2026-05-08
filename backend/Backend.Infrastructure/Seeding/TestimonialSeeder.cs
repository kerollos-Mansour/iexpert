using Backend.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Seeding
{
    public static class TestimonialSeeder
    {
        public static void Seed(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Testimonial>().HasData(
                new Testimonial
                {
                    TestimonialId = 1,
                    Name = "Ahmed Hassan",
                    Role = "Junior Frontend Developer",
                    Text = "iExperts Academy transformed my career. The Angular course was incredibly practical and the instructor was always available for questions. Landed my first dev job within 2 months!",
                    Initials = "AH",
                    Color = "linear-gradient(135deg,#6366f1,#8b5cf6)"
                },
                new Testimonial
                {
                    TestimonialId = 2,
                    Name = "Sara Mohammed",
                    Role = "Backend Developer",
                    Text = "The .NET backend course was exactly what I needed. Clean architecture concepts were explained perfectly. Best investment I've made in my education this year.",
                    Initials = "SM",
                    Color = "linear-gradient(135deg,#06b6d4,#3b82f6)"
                },
                new Testimonial
                {
                    TestimonialId = 3,
                    Name = "Karim Adel",
                    Role = "Full Stack Developer",
                    Text = "I came in with zero coding experience and left with a full-stack portfolio. The instructors are top-tier professionals who genuinely care about student success.",
                    Initials = "KA",
                    Color = "linear-gradient(135deg,#10b981,#06b6d4)"
                },
                new Testimonial
                {
                    TestimonialId = 4,
                    Name = "Nour El-Din",
                    Role = "Software Engineer",
                    Text = "Flexible learning schedule combined with expert mentorship makes iExperts Academy stand out. I studied while working full-time and still managed to complete in 3 months.",
                    Initials = "NE",
                    Color = "linear-gradient(135deg,#f59e0b,#ef4444)"
                },
                new Testimonial
                {
                    TestimonialId = 5,
                    Name = "Fatma Ali",
                    Role = "Mobile Developer",
                    Text = "The quality of content here is on par with international platforms but with much more hands-on guidance. The community support is also outstanding.",
                    Initials = "FA",
                    Color = "linear-gradient(135deg,#8b5cf6,#6366f1)"
                },
                new Testimonial
                {
                    TestimonialId = 6,
                    Name = "Omar Khaled",
                    Role = "Cloud Engineer",
                    Text = "From enrollment to certificate, the experience was seamless. The real-world projects helped me build a portfolio that impressed recruiters immediately.",
                    Initials = "OK",
                    Color = "linear-gradient(135deg,#3b82f6,#06b6d4)"
                }
            );
        }
    }
}
