namespace Backend.Data.Entities
{
    public class Enrollment
    {
        public int EnrollmentId { get; set; }
        public string FullName { get; set; } = default!;
        public string Email { get; set; } = default!;
        public string PhoneNumber { get; set; } = default!;
        public string ExperienceLevel { get; set; } = default!;
        public DateTime CreatedAt { get; set; }

        // Foreign Keys
        public int CourseId { get; set; }

        // Navigation Properties
        public virtual Course Course { get; set; } = default!;
    }
}
