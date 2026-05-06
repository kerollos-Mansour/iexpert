using MediatR;
using Backend.Core.ResponseBases;
using Backend.Core.Features.Courses.Queries.Models;
using Backend.Core.Features.Courses.Queries.Results;
using Backend.Service.Abstractions;

namespace Backend.Core.Features.Courses.Queries.Handlers
{
    public class CourseQueryHandler : ResponseHandler,
        IRequestHandler<GetCourseListQuery, Response<List<GetCourseListResponse>>>
    {
        private readonly ICourseService _courseService;

        public CourseQueryHandler(ICourseService courseService)
        {
            _courseService = courseService;
        }

        public async Task<Response<List<GetCourseListResponse>>> Handle(GetCourseListQuery request, CancellationToken cancellationToken)
        {
            var courses = await _courseService.GetAllAsync();
            var response = courses.Select(x => new GetCourseListResponse
            {
                CourseId = x.CourseId,
                Title = x.Title,
                Description = x.Description,
                Duration = x.Duration,
                Price = x.Price,
                Level = x.Level,
                ImageUrl = x.ImageUrl
            }).ToList();

            return Success(response);
        }
    }
}
