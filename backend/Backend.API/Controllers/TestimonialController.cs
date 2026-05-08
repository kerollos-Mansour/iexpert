using Backend.API.APIBases;
using Backend.Core.Features.Testimonials.Queries.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Backend.API.Controllers
{
    [ApiController]
    public class TestimonialController : AppController
    {
        public TestimonialController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet("api/testimonials")]
        public async Task<IActionResult> GetTestimonialList()
        {
            var response = await _mediator.Send(new GetTestimonialListQuery());
            return NewResult(response);
        }
    }
}
