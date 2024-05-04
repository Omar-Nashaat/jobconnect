using AutoMapper;
using JobConnect.DTOs;
using JobConnect.Models;

namespace JobConnect.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Role, UserRoleDto>();
            CreateMap<RegisterDto, User>();

        }
    }
}
