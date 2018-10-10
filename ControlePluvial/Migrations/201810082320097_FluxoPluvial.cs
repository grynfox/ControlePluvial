namespace ControlePluvial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FluxoPluvial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Arduinoes",
                c => new
                    {
                        IdLora = c.Int(nullable: false, identity: true),
                        NomeArd = c.String(),
                    })
                .PrimaryKey(t => t.IdLora);
            
            CreateTable(
                "dbo.Produtoes",
                c => new
                    {
                        IdProd = c.Int(nullable: false, identity: true),
                        NomeProd = c.String(),
                        IdCat = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdProd)
                .ForeignKey("dbo.Arduinoes", t => t.IdCat, cascadeDelete: true)
                .Index(t => t.IdCat);
            
            CreateTable(
                "dbo.Reports",
                c => new
                    {
                        codFlux = c.Int(nullable: false, identity: true),
                        IdLora = c.Int(nullable: false),
                        dataPulso = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.codFlux);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Produtoes", "IdCat", "dbo.Arduinoes");
            DropIndex("dbo.Produtoes", new[] { "IdCat" });
            DropTable("dbo.Reports");
            DropTable("dbo.Produtoes");
            DropTable("dbo.Arduinoes");
        }
    }
}
