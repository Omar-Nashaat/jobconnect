using JobConnect.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace JobConnect.Data
{
    public class DataRepository<T> : IDataRepository<T> where T : class
    {

        private readonly AppDbcontext _dbContext;
        public DataRepository(AppDbcontext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task Add(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
            _dbContext.SaveChanges();
        }

        public async Task Delete(T entity)
        {
            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();

        }

        public async Task<T> Get(int id)
        {
            return await _dbContext.Set<T>().FindAsync(id);

        }


        public async Task Update(T entity)
        {
            _dbContext.Set<T>().Update(entity);
            await _dbContext.SaveChangesAsync();
        }

        public Task GetByEmail(string v)
        {
            throw new NotImplementedException();
        }

        public Task GetById(int? userRoleId)
        {
            throw new NotImplementedException();
        }
    }
}
