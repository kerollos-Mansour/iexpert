using Microsoft.Extensions.DependencyInjection;

namespace Backend.Service
{
    public static class ModuleServiceDependencies
    {
        public static IServiceCollection AddServiceDependencies(this IServiceCollection services)
        {
            // Register application services here
            
            return services;
        }
    }
}
