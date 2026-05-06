namespace Backend.Data.Entities
{
    public class Course
    {
        public int CourseId { get; set; }
        public string Title { get; set; } = default!;
        public string Description { get; set; } = default!;
        public int Duration { get; set; } // in weeks
        public decimal Price { get; set; }
        public string Level { get; set; } = default!; // Beginner / Intermediate / Advanced
        public string? ImageUrl { get; set; }

        // Navigation Properties
        public virtual ICollection<Enrollment> Enrollments { get; set; } = new HashSet<Enrollment>();
    }
}
