using Backend.Data.Entities;
using Backend.Infrastructure.Repositories;
using Backend.Service.Abstractions;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Service.implementation
{
    public class TestimonialService : ITestimonialService
    {
        private readonly ITestimonialRepository _testimonialRepository;

        public TestimonialService(ITestimonialRepository testimonialRepository)
        {
            _testimonialRepository = testimonialRepository;
        }

        public async Task<List<Testimonial>> GetListAsync()
        {
            return await _testimonialRepository.GetTableNoTracking().ToListAsync();
        }
    }
}
