namespace ControlePluvial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FluxoPluvial2 : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Reports", "IdLora");
            AddForeignKey("dbo.Reports", "IdLora", "dbo.Arduinoes", "IdLora", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Reports", "IdLora", "dbo.Arduinoes");
            DropIndex("dbo.Reports", new[] { "IdLora" });
        }
    }
}
