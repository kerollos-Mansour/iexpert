using MediatR;
using Backend.Core.ResponseBases;
using Backend.Core.Features.Instructors.Queries.Results;

namespace Backend.Core.Features.Instructors.Queries.Models
{
    public class GetInstructorListQuery : IRequest<Response<List<GetInstructorListResponse>>>
    {
    }
}
