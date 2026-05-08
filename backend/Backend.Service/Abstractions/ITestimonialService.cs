using Backend.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Service.Abstractions
{
    public interface ITestimonialService
    {
        Task<List<Testimonial>> GetListAsync();
    }
}
