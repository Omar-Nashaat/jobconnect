using JobConnect.DTOs;
using JobConnect.Interfaces;
using JobConnect.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace JobConnect.Data
{
    public class AuthRepository : IAuthRepository<User>
    {
        private readonly AppDbcontext _context;
        private readonly IConfiguration _configuration;

        public AuthRepository(AppDbcontext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<string> Login(string email, string password)
        {
            // Check if email or password is null
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                throw new ArgumentNullException("Email or password cannot be null or empty.");
            }

            var user = await _context.Users.Include(u => u.Role).FirstOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return null;
            }

            if (!VerifyPasswordHash(password, user.PasswordHash, user.PasswordSalt))
            {
                return null;
            }

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Role, user.Role.Name),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetSection("Token").Value));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                NotBefore = DateTime.Now,
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = creds
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);
            }
        }

        //public async Task<User> Register(User user, string password)
        //{
        //    byte[] passwordHash, passwordSalt;
        //    CreatePasswordHash(password, out passwordHash, out passwordSalt);

        //    user.PasswordHash = passwordHash;
        //    user.PasswordSalt = passwordSalt;

        //    await _context.Users.AddAsync(user);
        //    await _context.SaveChangesAsync();

        //    return user;
        //}

        //public async Task<User> Register(User user, string password)
        //{
        //    byte[] passwordHash, passwordSalt;
        //    CreatePasswordHash(password, out passwordHash, out passwordSalt);

        //    user.PasswordHash = passwordHash;
        //    user.PasswordSalt = passwordSalt;

        //    await _context.Users.AddAsync(user);
        //    await _context.SaveChangesAsync();

        //    // Fetch the role name based on UserRoleId
        //    var roleName = await _context.Roles
        //                                  .Where(r => r.Id == user.UserRoleId)
        //                                  .Select(r => r.Name)
        //                                  .FirstOrDefaultAsync();

        //    // Assign role name to the RoleName property of RegisterDto
        //    var mappedUser = new RegisterDto
        //    {
        //        Name = user.Name,
        //        Email = user.Email,
        //        Password = password,
        //        Address = user.Address,
        //        PhoneNumber = user.PhoneNumber,
        //        UserRoleId = user.UserRoleId,
        //        RoleName = roleName
        //    };

        //    return mappedUser;
        //}

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash(password, out passwordHash, out passwordSalt);

            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            // Fetch the role name based on UserRoleId
            var roleName = await _context.Roles
                                          .Where(r => r.Id == user.UserRoleId)
                                          .Select(r => r.Name)
                                          .FirstOrDefaultAsync();

            // Create a new User object with the role name assigned
            var newUser = new User
            {
                Name = user.Name,
                Email = user.Email,
                PasswordHash = user.PasswordHash,
                PasswordSalt = user.PasswordSalt,
                Address = user.Address,
                PhoneNumber = user.PhoneNumber,
                UserRoleId = user.UserRoleId,
                RoleName = roleName
            };

            return newUser;
        }



        private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            }
        }

        public async Task<bool> UserExist(string email)
        {
            return await _context.Users.AnyAsync(x => x.Email == email);
        }
    }
}
