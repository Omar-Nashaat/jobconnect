using Jobconnect.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Jobconnect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IConfiguration configuration;

        public AccountController(UserManager<AppUser> userManager , IConfiguration configuration)
        {
            _userManager = userManager;
            this.configuration = configuration;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> RegisterNewUser(dtoNewUser user)
        {
            if (ModelState.IsValid)
            {
                var appUser = new AppUser
                {
                    UserName = user.Name,
                    Email = user.Email
                };

                var result = await _userManager.CreateAsync(appUser, user.Password);

                if (result.Succeeded)
                {
                    return Ok("Success");
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError("", error.Description);
                    }
                }
            }

            return BadRequest(ModelState);
        }

        [HttpPost]
        public async Task<IActionResult> LogIn(dtoLogin login)
        {
            if (ModelState.IsValid)
            {
                AppUser user = await _userManager.FindByEmailAsync(login.Email);
                if (user != null)
                {
                    if (await _userManager.CheckPasswordAsync(user, login.Password))
                    {
                        var claims = new List<Claim>();
                        claims.Add(new Claim (ClaimTypes.Email ,user.Email));
                        claims.Add(new Claim(ClaimTypes.NameIdentifier, user.Id));
                        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
                        var roles = await _userManager.GetRolesAsync(user);
                        foreach(var role in roles)
                        {
                            claims.Add(new Claim(ClaimTypes.Role, role.ToString()));

                        }
                        //signingCredentials
                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:SecretKey"]));


                        // Check if key size is sufficient
                        if (key.KeySize < 256)
                        {
                            // Generate a new key with sufficient size
                            var newKey = new byte[32]; // 256 bits / 8 = 32 bytes
                            using (var rng = RandomNumberGenerator.Create())
                            {
                                rng.GetBytes(newKey);
                            }
                            key = new SymmetricSecurityKey(newKey);
                        }

                        var sc = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                        var token = new JwtSecurityToken(
                            claims: claims,
                            issuer: configuration["JWT:Issuer"],
                            audience: configuration["JWT:Audience"],
                            expires: DateTime.Now.AddMonths(1),
                            signingCredentials: sc
                            );

                               var _token = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo,
                        };
                        return Ok(_token);



                    }
                    else
                    {
                        ModelState.AddModelError("Password", "Password is incorrect");
                        return BadRequest(ModelState);
                    }
                }
                else
                {
                    ModelState.AddModelError("Email", "User does not exist");
                    return BadRequest(ModelState);
                }
            }
            return BadRequest(ModelState);
        }
    }
}

