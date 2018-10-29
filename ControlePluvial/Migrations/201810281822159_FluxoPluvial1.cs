namespace ControlePluvial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FluxoPluvial1 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Produtoes", "IdCat", "dbo.Arduinoes");
            DropIndex("dbo.Produtoes", new[] { "IdCat" });
            DropTable("dbo.Produtoes");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Produtoes",
                c => new
                    {
                        IdProd = c.Int(nullable: false, identity: true),
                        NomeProd = c.String(),
                        IdCat = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.IdProd);
            
            CreateIndex("dbo.Produtoes", "IdCat");
            AddForeignKey("dbo.Produtoes", "IdCat", "dbo.Arduinoes", "IdLora", cascadeDelete: true);
        }
    }
}
