using Microsoft.Extensions.DependencyInjection;
using Backend.Infrastructure.implementation;
using Backend.Infrastructure.Repositories;
using Backend.Infrastructure.GenericBases;

namespace Backend.Infrastructure
{
    public static class ModuleInfrastructureDependencies
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services)
        {
            services.AddTransient(typeof(IGenericRepositoryAsync<>), typeof(GenericRepositoryAsync<>));
            
            services.AddTransient<ICourseRepository, CourseRepository>();
            services.AddTransient<IInstructorRepository, InstructorRepository>();
            services.AddTransient<IEnrollmentRepository, EnrollmentRepository>();
            
            return services;
        }
    }
}
