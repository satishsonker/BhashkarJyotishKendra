﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BJK.Controllers
{
    public class PoojaController : Controller
    {
        public IActionResult List()
        {
            return View();
        }
    }
}