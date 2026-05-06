using MediatR;
using Backend.Core.ResponseBases;
using Backend.Core.Features.Instructors.Queries.Models;
using Backend.Core.Features.Instructors.Queries.Results;
using Backend.Service.Abstractions;

namespace Backend.Core.Features.Instructors.Queries.Handlers
{
    public class InstructorQueryHandler : ResponseHandler,
        IRequestHandler<GetInstructorListQuery, Response<List<GetInstructorListResponse>>>
    {
        private readonly IInstructorService _instructorService;

        public InstructorQueryHandler(IInstructorService instructorService)
        {
            _instructorService = instructorService;
        }

        public async Task<Response<List<GetInstructorListResponse>>> Handle(GetInstructorListQuery request, CancellationToken cancellationToken)
        {
            var instructors = await _instructorService.GetAllAsync();
            var response = instructors.Select(x => new GetInstructorListResponse
            {
                InstructorId = x.InstructorId,
                Name = x.Name,
                Specialization = x.Specialization,
                ExperienceYears = x.ExperienceYears,
                Bio = x.Bio,
                ImageUrl = x.ImageUrl
            }).ToList();

            return Success(response);
        }
    }
}
