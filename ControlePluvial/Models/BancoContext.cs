namespace ControlePluvial.Models
{
    using System;
    using System.Data.Entity;
    using System.Linq;

    public class BancoContext : DbContext
    {
        // Your context has been configured to use a 'BancoContext' connection string from your application's 
        // configuration file (App.config or Web.config). By default, this connection string targets the 
        // 'ControlePluvial.Models.BancoContext' database on your LocalDb instance. 
        // 
        // If you wish to target a different database and/or database provider, modify the 'BancoContext' 
        // connection string in the application configuration file.
        public BancoContext()
            : base("name=BancoContext")
        {
        }

        // Add a DbSet for each entity type that you want to include in your model. For more information 
        // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

        // public virtual DbSet<MyEntity> MyEntities { get; set; }
        public virtual DbSet<Produto>  Produto { get; set; }
        public virtual DbSet<Arduino> Arduino { get; set; }
        public virtual DbSet<Reports> Reports { get; set; }
    }

    //public class MyEntity
    //{
    //    public int Id { get; set; }
    //    public string Name { get; set; }
    //}
}