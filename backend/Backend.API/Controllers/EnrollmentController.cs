using Microsoft.AspNetCore.Mvc;
using MediatR;
using Backend.API.APIBases;
using Backend.Core.Features.Enrollments.Commands.Models;

namespace Backend.API.Controllers
{
    [ApiController]
    public class EnrollmentController : AppController
    {
        public EnrollmentController(IMediator mediator) : base(mediator)
        {
        }

        [HttpPost("api/enrollments")]
        public async Task<IActionResult> AddEnrollment([FromBody] AddEnrollmentCommand command)
        {
            var response = await _mediator.Send(command);
            return NewResult(response);
        }
    }
}
