using Microsoft.AspNetCore.Mvc;
using MediatR;
using Backend.API.APIBases;
using Backend.Core.Features.Instructors.Queries.Models;

namespace Backend.API.Controllers
{
    [ApiController]
    public class InstructorController : AppController
    {
        public InstructorController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet("api/instructors")]
        public async Task<IActionResult> GetInstructorList()
        {
            var response = await _mediator.Send(new GetInstructorListQuery());
            return NewResult(response);
        }
    }
}
