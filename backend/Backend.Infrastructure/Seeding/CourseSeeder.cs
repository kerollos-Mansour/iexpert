using Backend.Data.Entities;
using Backend.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.Seeding
{
    public class CourseSeeder
    {
        private readonly AppDbContext _context;

        public CourseSeeder(AppDbContext context)
        {
            _context = context;
        }

        public async Task SeedAsync()
        {
            if (await _context.Courses.AnyAsync()) return;

            var courses = new List<Course>
            {
                new Course 
                { 
                    Title = "Full Stack Web Development", 
                    Description = "Learn how to build modern web applications using .NET and Angular.",
                    Duration = 12,
                    Price = 500,
                    Level = "Intermediate",
                    ImageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                },
                new Course 
                { 
                    Title = "Mobile App Development", 
                    Description = "Build cross-platform mobile apps with Flutter.",
                    Duration = 8,
                    Price = 400,
                    Level = "Beginner",
                    ImageUrl = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
                },
                new Course 
                { 
                    Title = "Data Science & AI", 
                    Description = "Master data analysis and machine learning with Python.",
                    Duration = 16,
                    Price = 750,
                    Level = "Advanced",
                    ImageUrl = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                }
            };

            await _context.Courses.AddRangeAsync(courses);
            await _context.SaveChangesAsync();
        }
    }
}
