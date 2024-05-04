using JobConnect.Models;

namespace JobConnect.Interfaces
{
    public interface IAuthRepository<T> where T : User
    {
        Task<User> Register(User user, string password);
        Task<string> Login(string email, string password);
        Task<bool> UserExist(string username);

    }
}
