namespace ControlePluvial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FluxoPluvial1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Reports", "LogRecebimento", c => c.String());
            AddColumn("dbo.Reports", "dataPulso", c => c.DateTime(nullable: false));
            DropColumn("dbo.Reports", "data");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Reports", "data", c => c.DateTime(nullable: false));
            DropColumn("dbo.Reports", "dataPulso");
            DropColumn("dbo.Reports", "LogRecebimento");
        }
    }
}
