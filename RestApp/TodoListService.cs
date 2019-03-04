using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RestApp
{
    public class TodoListService
    {
        private IList<string> _todoList;

        public TodoListService()
        {
            _todoList = new List<string>();
        }

        public void Add(string item)
        {
            _todoList.Add(item);
        }

        public void Remove(int index)
        {
            _todoList.RemoveAt(index);
        }

        public IList<string> GetTodoList {
            get
            {
                return _todoList;
            }
        }
    }
}
