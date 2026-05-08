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
        private readonly IEmailService _emailService;
        private readonly ICourseService _courseService;

        public EnrollmentCommandHandler(IEnrollmentService enrollmentService, IEmailService emailService, ICourseService courseService)
        {
            _enrollmentService = enrollmentService;
            _emailService = emailService;
            _courseService = courseService;
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
            {
                var course = await _courseService.GetByIdAsync(request.CourseId);
                var courseName = course?.Title ?? "your selected course";

                try
                {
                    await _emailService.SendEmail(
                        request.Email,
                        request.FullName,
                        $"<h1>Welcome to iExpert Academy!</h1>" +
                        $"<p>Dear {request.FullName},</p>" +
                        $"<p>You have successfully enrolled in <strong>{courseName}</strong>.</p>" +
                        $"<p>We will contact you soon with further details.</p>" +
                        $"<p>Best Regards,<br/>iExpert Academy Team</p>",
                        "Course Enrollment Confirmation"
                    );
                }
                catch (Exception ex)
                {
                    // Log the error but don't fail the enrollment
                    // You might want to inject ILogger if needed, but for now we just proceed
                }
                return Success("Enrollment added successfully");
            }
            
            return BadRequest<string>("Failed to add enrollment");
        }
    }
}
