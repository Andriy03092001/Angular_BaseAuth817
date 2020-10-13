using System;
using System.Collections.Generic;
using System.Text;

namespace Base_Project817.DataAccess.Entity
{
    public class UserAdditionalInfo
    {
        public string Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }

        public virtual User User { get; set; }
    }
}
