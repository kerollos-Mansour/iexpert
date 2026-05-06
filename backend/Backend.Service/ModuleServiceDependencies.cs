using Microsoft.Extensions.DependencyInjection;
using Backend.Service.Abstractions;
using Backend.Service.implementation;

namespace Backend.Service
{
    public static class ModuleServiceDependencies
    {
        public static IServiceCollection AddServiceDependencies(this IServiceCollection services)
        {
            services.AddTransient<ICourseService, CourseService>();
            services.AddTransient<IInstructorService, InstructorService>();
            services.AddTransient<IEnrollmentService, EnrollmentService>();
            
            return services;
        }
    }
}
