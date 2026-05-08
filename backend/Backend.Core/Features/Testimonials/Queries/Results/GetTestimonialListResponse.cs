namespace Backend.Core.Features.Testimonials.Queries.Results
{
    public class GetTestimonialListResponse
    {
        public int TestimonialId { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Text { get; set; }
        public string Initials { get; set; }
        public string Color { get; set; }
    }
}
