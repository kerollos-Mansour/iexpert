using Backend.Core.Features.Testimonials.Queries.Results;
using Backend.Core.ResponseBases;
using MediatR;
using System.Collections.Generic;

namespace Backend.Core.Features.Testimonials.Queries.Models
{
    public class GetTestimonialListQuery : IRequest<Response<List<GetTestimonialListResponse>>>
    {
    }
}
