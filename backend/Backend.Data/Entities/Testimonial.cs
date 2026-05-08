using System.ComponentModel.DataAnnotations;

namespace Backend.Data.Entities
{
    public class Testimonial
    {
        [Key]
        public int TestimonialId { get; set; }
        [Required, MaxLength(100)]
        public string Name { get; set; }
        [Required, MaxLength(100)]
        public string Role { get; set; }
        [Required, MaxLength(500)]
        public string Text { get; set; }
        [MaxLength(10)]
        public string Initials { get; set; }
        [MaxLength(100)]
        public string Color { get; set; }
    }
}
