using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class LigaContext : DbContext
    {
          public DbSet<Liga> Lige {get;set;}

          public DbSet<Klub> Klubovi {get;set;}

          public DbSet<Igrac> Igraci {get;set;}

          public LigaContext(DbContextOptions options):base(options)
          {
              
          }
    }
}