using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly TodoListService _todoListService;

        public TodoListController(TodoListService todoListService)
        {
            _todoListService = todoListService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_todoListService.GetTodoList);
        }

        [HttpPost]
        public IActionResult Add([FromBody] string item)
        {
            _todoListService.Add(item);

            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody]int index)
        {
            _todoListService.Remove(index);

            return Ok();
        }
    }
}