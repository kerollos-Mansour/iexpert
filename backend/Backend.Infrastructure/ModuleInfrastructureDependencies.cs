using Microsoft.Extensions.DependencyInjection;
using Backend.Infrastructure.GenericBases;

namespace Backend.Infrastructure
{
    public static class ModuleInfrastructureDependencies
    {
        public static IServiceCollection AddInfrastructureDependencies(this IServiceCollection services)
        {
            services.AddTransient(typeof(IGenericRepositoryAsync<>), typeof(GenericRepositoryAsync<>));
            
            // Add other repositories here
            
            return services;
        }
    }
}
