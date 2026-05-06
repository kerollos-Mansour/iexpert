using Backend.Data.Entities;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Seeding
{
    public class InstructorSeeder
    {
        private readonly AppDbContext _context;

        public InstructorSeeder(AppDbContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            if (await _context.Instructors.AnyAsync()) return;

            var instructors = new List<Instructor>
            {
                new Instructor 
                { 
                    Name = "Dr. Ahmed Mansour", 
                    Specialization = "Software Architecture",
                    ExperienceYears = 15,
                    Bio = "Expert in Clean Architecture and Cloud Systems.",
                    ImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                },
                new Instructor 
                { 
                    Name = "Eng. Sarah Wilson", 
                    Specialization = "Frontend Development",
                    ExperienceYears = 8,
                    Bio = "UI/UX enthusiast and Angular expert.",
                    ImageUrl = "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                },
                new Instructor 
                { 
                    Name = "Prof. Michael Chen", 
                    Specialization = "Machine Learning",
                    ExperienceYears = 20,
                    Bio = "Researcher and industry consultant for AI systems.",
                    ImageUrl = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                }
            };

            await _context.Instructors.AddRangeAsync(instructors);
            await _context.SaveChangesAsync();
        }
    }
}
