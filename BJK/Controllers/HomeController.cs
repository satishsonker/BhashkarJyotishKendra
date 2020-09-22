using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BJK.Models;
using BJK.BusinessLayer;
using BJK.BusinessLayer.Home;
using static BJK.ModelLayer.IndexlModel;

namespace BJK.Controllers
{

    public class HomeController : Controller
    {
        #region CTOR
        private readonly EmailConfiguration _emailConfiguration;
        private IndexDetails indexDetails = null;
        public HomeController(EmailConfiguration emailConfiguration)
        {
            _emailConfiguration = emailConfiguration;
            indexDetails = new IndexDetails();
        }
        #endregion
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        [HttpPost]
        public JsonResult SendKundaliDetails([FromBody] SendKundaliModel sendKundaliModel)
        {
          return Json(indexDetails.SendKundali(_emailConfiguration, sendKundaliModel));
        }

        [HttpPost]
        public JsonResult SendQuery([FromBody] SendQueryModel sendQueryModel)
        {
            return Json(indexDetails.SendQuery(_emailConfiguration, sendQueryModel));
        }

        public IActionResult ContactUs()
        {
            return View();
        }
        public IActionResult AboutUs()
        {
            return View();
        }
    }
}
