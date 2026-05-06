using MediatR;
using Backend.Core.ResponseBases;
using Backend.Core.Features.Enrollments.Commands.Models;
using Backend.Service.Abstractions;
using Backend.Data.Entities;

namespace Backend.Core.Features.Enrollments.Commands.Handlers
{
    public class EnrollmentCommandHandler : ResponseHandler,
        IRequestHandler<AddEnrollmentCommand, Response<string>>
    {
        private readonly IEnrollmentService _enrollmentService;

        public EnrollmentCommandHandler(IEnrollmentService enrollmentService)
        {
            _enrollmentService = enrollmentService;
        }

        public async Task<Response<string>> Handle(AddEnrollmentCommand request, CancellationToken cancellationToken)
        {
            var enrollment = new Enrollment
            {
                FullName = request.FullName,
                Email = request.Email,
                PhoneNumber = request.PhoneNumber,
                CourseId = request.CourseId,
                ExperienceLevel = request.ExperienceLevel
            };

            var result = await _enrollmentService.CreateAsync(enrollment);
            if (result != null)
                return Success("Enrollment added successfully");
            
            return BadRequest<string>("Failed to add enrollment");
        }
    }
}
