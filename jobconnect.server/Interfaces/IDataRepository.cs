namespace JobConnect.Interfaces
{
    public interface IDataRepository<T> where T : class
    {
        Task<IEnumerable<T>> GetAll();

        Task<T> Get(int id);

        Task Add(T entity);

        Task Update(T entity);

        Task Delete(T entity);
        Task GetByEmail(string v);
        Task GetById(int? userRoleId);
    }
}
