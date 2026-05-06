using Microsoft.EntityFrameworkCore.Storage;

namespace Backend.Infrastructure.GenericBases
{
    public interface IGenericRepositoryAsync<T> where T : class
    {
        IQueryable<T> GetTableNoTracking();
        IQueryable<T> GetTableAsTracking();
        Task<T?> GetByIdAsync(int id);
        Task<T> AddAsync(T entity);
        Task<T> UpdateAsync(T entity);
        Task DeleteAsync(T entity);
        Task<int> SaveChangesAsync();
        IDbContextTransaction BeginTransaction();
        Task CommitAsync();
        Task RollBackAsync();
        Task UpdateRangeAsync(IEnumerable<T> entities);
    }
}
