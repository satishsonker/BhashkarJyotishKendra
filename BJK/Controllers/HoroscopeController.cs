using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BJK.Controllers
{
    public class HoroscopeController : Controller
    {
        public IActionResult GetSunsign([FromQuery] string sunsign,[FromQuery] string feq)
        {
            ViewBag.feq = feq;
            ViewBag.sunsign = sunsign;
            return View();
        }
    }
}