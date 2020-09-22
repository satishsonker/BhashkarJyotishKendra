using System;

namespace BJK.ModelLayer
{
    public class IndexlModel
    {
        public class SendKundaliModel
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public DateTime DOB { get; set; }
            public string Time { get; set; }
            public string Place { get; set; }
            public string Gender { get; set; }
        }
        public class SendQueryModel
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Phone { get; set; }
            public string Question { get; set; }
            public string Query { get; set; }
        }
    }
}
