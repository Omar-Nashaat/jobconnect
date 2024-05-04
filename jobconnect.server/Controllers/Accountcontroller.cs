using AutoMapper;
using JobConnect.DTOs;
using JobConnect.Interfaces;
using JobConnect.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using JobConnect.Interfaces;


namespace JobConnect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAuthRepository<User> _authRepo;
        private readonly IDataRepository<User> _userRepo;
        private readonly IDataRepository<Role> _userRoleRepo;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AccountController(IAuthRepository<User> authRepo, IDataRepository<User> userRepo, IDataRepository<Role> userRoleRepo, IConfiguration configuration, IMapper mapper)
        {
            _authRepo = authRepo;
            _userRepo = userRepo;
            _userRoleRepo = userRoleRepo;
            _configuration = configuration;
            _mapper = mapper;
        }


        [HttpPost("login")]
        public async Task<ActionResult> Login(LoginDto userForLoginDto)
        {
            // Check if email or password is null or empty
            if (string.IsNullOrEmpty(userForLoginDto.Email) || string.IsNullOrEmpty(userForLoginDto.Password))
            {
                return BadRequest("Email or password cannot be null or empty.");
            }

            var token = await _authRepo.Login(userForLoginDto.Email.ToLower(), userForLoginDto.Password);

            if (token == null)
            {
                return Unauthorized("Incorrect email or password.");
            }

            return Ok(new { message = "Login successfully", 
                token = token });
        }



        [HttpGet("getAllRoles")]
        public async Task<ActionResult<IEnumerable<UserRoleDto>>> GetAllRoles()
        {
            var roles = await _userRoleRepo.GetAll();

            var returnedRoles = _mapper.Map<IEnumerable<UserRoleDto>>(roles);
            return Ok(returnedRoles);
        }



        [HttpPost("register")]
        public async Task<ActionResult<RegisterDto>> Register([FromBody] RegisterDto userForRegisterDto)
        {
            userForRegisterDto.Email = userForRegisterDto.Email.ToLower();
            if (await _authRepo.UserExist(userForRegisterDto.Email))
            {
                return BadRequest("Email already exists");
            }

            var mappedUser = _mapper.Map<User>(userForRegisterDto);

            var user = await _authRepo.Register(mappedUser, userForRegisterDto.Password);

            return Ok(user);
        }

    }
}