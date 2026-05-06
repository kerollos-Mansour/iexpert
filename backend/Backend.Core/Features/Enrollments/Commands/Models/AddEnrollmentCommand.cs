using MediatR;
using Backend.Core.ResponseBases;

namespace Backend.Core.Features.Enrollments.Commands.Models
{
    public class AddEnrollmentCommand : IRequest<Response<string>>
    {
        public string FullName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string PhoneNumber { get; set; } = default!;
        public int CourseId { get; set; }
        public string ExperienceLevel { get; set; } = default!;
    }
}
