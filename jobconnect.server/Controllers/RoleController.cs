using JobConnect.DTOs;
using JobConnect.Interfaces;
using JobConnect.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JobConnect.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController : ControllerBase
    {
        private readonly IDataRepository<Role> _roleRepo;

        public RoleController(IDataRepository<Role> roleRepo)
        {
            _roleRepo = roleRepo;
        }


        [HttpPost("create")]
        public async Task<ActionResult> CreateUserType(UserRoleDto userRole)
        {
            if (userRole == null)
            {
                return BadRequest();
            }

            var role = new Role()
            {
                Name = userRole.Name
            };

            await _roleRepo.Add(role);

            return Ok(new
            {
                message = "Role created successfully",
                roleDetails = role
            });
        }
    }
}
