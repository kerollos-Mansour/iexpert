# Backend Architecture Overview

The replicated architecture in the `backend` folder follows the structure and design principles of the `final` project. It is built using **.NET** and implements a **Clean Architecture** (Onion) pattern with **CQRS (MediatR)**.

## Project Structure

- **Backend.API**: The entry point of the application.
    - `Controllers`: Inherit from `AppController` for standardized responses.
    - `APIBases`: Contains base controller logic and result handling.
    - `Middleware`: Includes `ErrorHandlerMiddleware` for global exception handling.
    - `Program.cs`: Wires up all layers and configurations.

- **Backend.Core**: The center of the application (Domain/Application layer).
    - `Features`: Organized by feature, following the CQRS pattern (Commands/Queries).
    - `Behavior`: Contains MediatR pipeline behaviors (e.g., `ValidationBehavior`).
    - `ResponseBases`: Standardized `Response<T>` and `ResponseHandler` classes.
    - `Pagination`: Core logic for paginated results.
    - `Mapping`: AutoMapper profiles (currently empty).

- **Backend.Service**: Business logic abstractions and implementations.
    - `Abstractions`: Interface definitions for services.
    - `implementation`: Concrete service logic.

- **Backend.Infrastructure**: External concerns and data access.
    - `Context`: `AppDbContext` using Entity Framework Core.
    - `GenericBases`: `IGenericRepositoryAsync` and its implementation.
    - `Repositories`: Feature-specific repository implementations.
    - `Migrations`: Database migrations (currently empty).

- **Backend.Data**: Data models and metadata.
    - `Entities`: Domain entities.
    - `AppMetaData`: Routing constants and other metadata.

## Design Patterns & Principles

1. **Clean Architecture**: Separation of concerns across multiple layers.
2. **CQRS with MediatR**: Features are split into Commands and Queries, processed via handlers.
3. **Repository Pattern**: Generic repository for common CRUD operations.
4. **Modular DI**: Each project has its own `ModuleDependencies` file to manage service registration.
5. **Standardized Responses**: All API endpoints return a consistent `Response<T>` format.
6. **Global Exception Handling**: Centralized error handling via custom middleware.

## Packages Installed
- `MediatR`
- `AutoMapper`
- `FluentValidation`
- `Microsoft.EntityFrameworkCore`
- `Serilog`
- `Microsoft.AspNetCore.Identity.EntityFrameworkCore` (for base context support)

---
*Note: Business logic, authentication logic, and payment systems have been omitted to focus strictly on the architectural skeleton.*
