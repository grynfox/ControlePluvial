using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ControlePluvial.App_Start
{
    public class BundleConfig
    {
        // Para obter mais informações sobre o agrupamento, visite https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
 
            bundles.Add(new ScriptBundle("~/angularApp/dev").Include(
                       "~/Scripts/inline.bundle.js",
                       "~/Scripts/vendor.bundle.js",
                       "~/Scripts/main.bundle.js",
                       "~/Scripts/polyfills.bundle.js",
                       "~/Scripts/styles.bundle.js",
                       "~/Scripts/scripts.bundle.js"
                       ));
        }
    }
}