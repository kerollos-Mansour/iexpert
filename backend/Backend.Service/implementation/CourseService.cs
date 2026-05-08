using Backend.Data.Entities;
using Backend.Infrastructure.Repositories;
using Backend.Service.Abstractions;
using Microsoft.EntityFrameworkCore;

namespace Backend.Service.implementation
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _courseRepository;

        public CourseService(ICourseRepository courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public async Task<IEnumerable<Course>> GetAllAsync()
        {
            return await _courseRepository.GetTableNoTracking().ToListAsync();
        }
        
        public async Task<Course?> GetByIdAsync(int id)
        {
            return await _courseRepository.GetByIdAsync(id);
        }
    }
}
