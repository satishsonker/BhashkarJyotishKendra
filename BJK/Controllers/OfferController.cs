using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BJK.Controllers
{
    public class OfferController : Controller
    {
        public IActionResult List()
        {
            return View();
        }
    }
}