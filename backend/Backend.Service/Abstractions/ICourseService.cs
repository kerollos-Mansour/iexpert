using Backend.Data.Entities;

namespace Backend.Service.Abstractions
{
    public interface ICourseService
    {
        Task<IEnumerable<Course>> GetAllAsync();
        Task<Course?> GetByIdAsync(int id);
    }
}
