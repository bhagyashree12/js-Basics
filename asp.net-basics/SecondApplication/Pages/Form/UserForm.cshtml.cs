using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using SecondApplication.Model;

namespace SecondApplication.Pages.Form
{
    public class UserFormModel : PageModel


    {
        [BindProperty]
        public UserModel UserData { get; set; }
        public void OnGet()
        {

        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
               
                return RedirectToPage("/Index",new { UserData.UserName });
            }
            else
            {
                return Page();
            }
        }
    }
}