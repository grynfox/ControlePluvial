namespace ControlePluvial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FluxoPluvial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categorias",
                c => new
                    {
                        IdCat = c.Int(nullable: false, identity: true),
                        NomeCat = c.String(),
                    })
                .PrimaryKey(t => t.IdCat);
            
            CreateTable(
                "dbo.Produtoes",
                c => new
                    {
                        IdProd = c.Int(nullable: false, identity: true),
                        NomeProd = c.String(),
                        IdCat = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdProd)
                .ForeignKey("dbo.Categorias", t => t.IdCat, cascadeDelete: true)
                .Index(t => t.IdCat);
            
            CreateTable(
                "dbo.Reports",
                c => new
                    {
                        codFlux = c.Int(nullable: false, identity: true),
                        data = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.codFlux);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Produtoes", "IdCat", "dbo.Categorias");
            DropIndex("dbo.Produtoes", new[] { "IdCat" });
            DropTable("dbo.Reports");
            DropTable("dbo.Produtoes");
            DropTable("dbo.Categorias");
        }
    }
}
