using Backend.Data.Entities;
using Backend.Infrastructure.Context;
using Backend.Infrastructure.GenericBases;
using Backend.Infrastructure.Repositories;

namespace Backend.Infrastructure.implementation
{
    public class CourseRepository : GenericRepositoryAsync<Course>, ICourseRepository
    {
        public CourseRepository(AppDbContext context) : base(context)
        {
        }
    }
}
