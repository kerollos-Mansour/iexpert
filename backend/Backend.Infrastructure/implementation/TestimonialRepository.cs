using Backend.Data.Entities;
using Backend.Infrastructure.Context;
using Backend.Infrastructure.GenericBases;
using Backend.Infrastructure.Repositories;

namespace Backend.Infrastructure.implementation
{
    public class TestimonialRepository : GenericRepositoryAsync<Testimonial>, ITestimonialRepository
    {
        public TestimonialRepository(AppDbContext dbContext) : base(dbContext)
        {
        }
    }
}
