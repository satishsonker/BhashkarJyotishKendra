using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BJK.Controllers
{
    public class AstrologyController : Controller
    {
        public IActionResult Astrologers()
        {
            return View();
        }

        [HttpGet]
        public IActionResult AstrologersProfile([FromQuery] int astroid)
        {
            return View();
        }
    }
}