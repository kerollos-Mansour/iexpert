using Microsoft.AspNetCore.Mvc;
using MediatR;
using Backend.API.APIBases;
using Backend.Core.Features.Courses.Queries.Models;

namespace Backend.API.Controllers
{
    [ApiController]
    public class CourseController : AppController
    {
        public CourseController(IMediator mediator) : base(mediator)
        {
        }

        [HttpGet("api/courses")]
        public async Task<IActionResult> GetCourseList()
        {
            var response = await _mediator.Send(new GetCourseListQuery());
            return NewResult(response);
        }
    }
}
