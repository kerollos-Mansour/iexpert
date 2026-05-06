using System.Net;

namespace Backend.Core.ResponseBases
{
    public class ResponseHandler
    {
        public Response<T> Success<T>(T entity, object? Meta = null, string? Message = null)
        {
            return new Response<T>()
            {
                Data = entity,
                StatusCode = HttpStatusCode.OK,
                Succeeded = true,
                Message = Message ?? "Success",
                Meta = Meta
            };
        }

        public Response<T> BadRequest<T>(string? Message = null)
        {
            return new Response<T>()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Succeeded = false,
                Message = Message ?? "Bad Request"
            };
        }

        public Response<T> NotFound<T>(string? Message = null)
        {
            return new Response<T>()
            {
                StatusCode = HttpStatusCode.NotFound,
                Succeeded = false,
                Message = Message ?? "Not Found"
            };
        }

        public Response<T> Created<T>(T entity, string? Message = null, object? Meta = null)
        {
            return new Response<T>()
            {
                Data = entity,
                StatusCode = HttpStatusCode.Created,
                Succeeded = true,
                Message = Message ?? "Created",
                Meta = Meta
            };
        }

        public Response<T> Deleted<T>(string? Message = null)
        {
            return new Response<T>()
            {
                StatusCode = HttpStatusCode.OK,
                Succeeded = true,
                Message = Message ?? "Deleted"
            };
        }

        public Response<T> Unauthorized<T>(string? Message = null)
        {
            return new Response<T>()
            {
                StatusCode = HttpStatusCode.Unauthorized,
                Succeeded = false,
                Message = Message ?? "Unauthorized"
            };
        }
    }
}
