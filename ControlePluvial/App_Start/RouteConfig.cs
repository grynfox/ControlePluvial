using System.Web.Mvc;
using System.Web.Routing;

namespace ControlePluvial
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
           // routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "API/{controller}/{action}",
                defaults: new { controller = "Home", action = "Index"}
            );
            routes.MapRoute(
               name: "spa-fallback",
               url: "{*url}",
               defaults: new { controller = "View", action = "Index" });

        }
    }
}
