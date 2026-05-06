using Microsoft.EntityFrameworkCore;

namespace Backend.Core.Pagination
{
    public static class QueryableExtension
    {
        public static async Task<PaginatedList<T>> ToPaginatedListAsync<T>(this IQueryable<T> source, int pageNumber, int pageSize) where T : class
        {
            if (source == null)
            {
                throw new ArgumentNullException(nameof(source));
            }

            pageNumber = pageNumber <= 0 ? 1 : pageNumber;
            pageSize = pageSize <= 0 ? 10 : pageSize;

            var count = await source.CountAsync();
            if (count == 0)
            {
                return new PaginatedList<T>(new List<T>(), count, pageNumber, pageSize);
            }

            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PaginatedList<T>(items, count, pageNumber, pageSize);
        }
    }
}
