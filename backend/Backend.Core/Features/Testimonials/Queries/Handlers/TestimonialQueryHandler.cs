using Backend.Core.Features.Testimonials.Queries.Models;
using Backend.Core.Features.Testimonials.Queries.Results;
using Backend.Core.ResponseBases;
using Backend.Service.Abstractions;
using MediatR;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Backend.Core.Features.Testimonials.Queries.Handlers
{
    public class TestimonialQueryHandler : ResponseHandler,
        IRequestHandler<GetTestimonialListQuery, Response<List<GetTestimonialListResponse>>>
    {
        private readonly ITestimonialService _testimonialService;

        public TestimonialQueryHandler(ITestimonialService testimonialService)
        {
            _testimonialService = testimonialService;
        }

        public async Task<Response<List<GetTestimonialListResponse>>> Handle(GetTestimonialListQuery request, CancellationToken cancellationToken)
        {
            var testimonials = await _testimonialService.GetListAsync();
            var response = testimonials.Select(x => new GetTestimonialListResponse
            {
                TestimonialId = x.TestimonialId,
                Name = x.Name,
                Role = x.Role,
                Text = x.Text,
                Initials = x.Initials,
                Color = x.Color
            }).ToList();

            return Success(response);
        }
    }
}
