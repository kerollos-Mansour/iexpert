using Backend.Data.Entities;
using Backend.Infrastructure.Context;
using Backend.Infrastructure.GenericBases;
using Microsoft.EntityFrameworkCore;

namespace Backend.Infrastructure.implementation
{
    public class TestimonialRepository : GenericRepository<Testimonial>, ITestimonialRepository
    {
        private readonly DbSet<Testimonial> _testimonials;

        public TestimonialRepository(AppDbContext dbContext) : base(dbContext)
        {
            _testimonials = dbContext.Set<Testimonial>();
        }
    }
}
