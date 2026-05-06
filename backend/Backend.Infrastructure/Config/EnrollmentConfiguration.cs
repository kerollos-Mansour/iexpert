using Backend.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Config
{
    public class EnrollmentConfiguration : IEntityTypeConfiguration<Enrollment>
    {
        public void Configure(EntityTypeBuilder<Enrollment> builder)
        {
            builder.HasKey(x => x.EnrollmentId);

            builder.Property(x => x.FullName)
                .HasColumnType("nvarchar")
                .HasMaxLength(200)
                .IsRequired();

            builder.Property(x => x.Email)
                .HasColumnType("nvarchar")
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(x => x.PhoneNumber)
                .HasColumnType("nvarchar")
                .HasMaxLength(20)
                .IsRequired();

            builder.Property(x => x.ExperienceLevel)
                .HasColumnType("nvarchar")
                .HasMaxLength(50)
                .IsRequired();

            // Relationships
            builder.HasOne(x => x.Course)
                .WithMany(x => x.Enrollments)
                .HasForeignKey(x => x.CourseId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.ToTable("Enrollments");
        }
    }
}
