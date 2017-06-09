using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Web.Ui.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            return View("About");
        }

        public IActionResult Services()
        {
            return View("Services");
        }

        public IActionResult Gallery()
        {
            return View("Gallery");
        }
    }
}