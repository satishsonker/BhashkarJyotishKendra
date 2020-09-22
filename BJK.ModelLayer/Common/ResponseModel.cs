using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace BJK.ModelLayer.Common
{
   public class ResponseModel
    {
        public string Msg { get; set; }
        public HttpStatusCode Code { get; set; }
        public object Data { get; set; }
    }
}
