namespace Backend.Core.Features.Courses.Queries.Results
{
    public class GetCourseListResponse
    {
        public int CourseId { get; set; }
        public string Title { get; set; } = default!;
        public string Description { get; set; } = default!;
        public int Duration { get; set; }
        public decimal Price { get; set; }
        public string Level { get; set; } = default!;
        public string? ImageUrl { get; set; }
    }
}
