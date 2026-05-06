using Backend.Infrastructure.Context;
using Backend.Infrastructure.Seeding;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Infrastructure
{
    public static class DatabaseInitializer
    {
        public static async Task InitializeAsync(IServiceProvider serviceProvider)
        {
            using var scope = serviceProvider.CreateScope();
            var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            // Run seeders
            await new CourseSeeder(context).SeedAsync();
            await new InstructorSeeder(context).SeedAsync();
        }
    }
}
