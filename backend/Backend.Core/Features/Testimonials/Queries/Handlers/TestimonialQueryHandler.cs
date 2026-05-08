using AutoMapper;
using Backend.Core.Features.Testimonials.Queries.Models;
using Backend.Core.Features.Testimonials.Queries.Results;
using Backend.Core.ResponseBases;
using Backend.Service.Abstractions;
using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Backend.Core.Features.Testimonials.Queries.Handlers
{
    public class TestimonialQueryHandler : ResponseHandler,
        IRequestHandler<GetTestimonialListQuery, Response<List<GetTestimonialListResponse>>>
    {
        private readonly ITestimonialService _testimonialService;
        private readonly IMapper _mapper;

        public TestimonialQueryHandler(ITestimonialService testimonialService, IMapper mapper)
        {
            _testimonialService = testimonialService;
            _mapper = mapper;
        }

        public async Task<Response<List<GetTestimonialListResponse>>> Handle(GetTestimonialListQuery request, CancellationToken cancellationToken)
        {
            var testimonials = await _testimonialService.GetListAsync();
            var result = _mapper.Map<List<GetTestimonialListResponse>>(testimonials);
            return Success(result);
        }
    }
}
