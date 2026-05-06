namespace Backend.Core.Features.Instructors.Queries.Results
{
    public class GetInstructorListResponse
    {
        public int InstructorId { get; set; }
        public string Name { get; set; } = default!;
        public string Specialization { get; set; } = default!;
        public int ExperienceYears { get; set; }
        public string Bio { get; set; } = default!;
        public string? ImageUrl { get; set; }
    }
}
