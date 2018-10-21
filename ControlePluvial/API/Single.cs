using System;
using System.Collections.Generic;
using System.Text;

namespace ControlePluvial.API
{ 
    public class Single
    {
        public string Name { get; set; } 
        public float Value { get; set; }
    }

    public static class LineChartData
    {
        public static string[][] ToLineChart(this IEnumerable<Single> single)
        {
            var retorno = new List<string[]>();
            foreach (var item in single)
            {
                retorno.Add(new[] { item.Name, item.Value.ToString() });
            }

            return retorno.ToArray();
        }
      
    }
}
