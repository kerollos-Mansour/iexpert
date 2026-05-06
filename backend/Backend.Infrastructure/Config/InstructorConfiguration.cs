using Backend.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Backend.Infrastructure.Config
{
    public class InstructorConfiguration : IEntityTypeConfiguration<Instructor>
    {
        public void Configure(EntityTypeBuilder<Instructor> builder)
        {
            builder.HasKey(x => x.InstructorId);

            builder.Property(x => x.Name)
                .HasColumnType("nvarchar")
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(x => x.Specialization)
                .HasColumnType("nvarchar")
                .HasMaxLength(150)
                .IsRequired();

            builder.Property(x => x.Bio)
                .HasColumnType("nvarchar")
                .HasMaxLength(1000)
                .IsRequired();

            builder.Property(x => x.ImageUrl)
                .HasColumnType("nvarchar")
                .HasMaxLength(500)
                .IsRequired(false);

            builder.ToTable("Instructors");
        }
    }
}
