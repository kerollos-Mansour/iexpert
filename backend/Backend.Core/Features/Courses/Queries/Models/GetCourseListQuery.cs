using MediatR;
using Backend.Core.ResponseBases;
using Backend.Core.Features.Courses.Queries.Results;

namespace Backend.Core.Features.Courses.Queries.Models
{
    public class GetCourseListQuery : IRequest<Response<List<GetCourseListResponse>>>
    {
    }
}
