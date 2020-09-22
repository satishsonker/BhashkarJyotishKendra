using BJK.ModelLayer.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text;
using static BJK.ModelLayer.IndexlModel;

namespace BJK.BusinessLayer.Home
{
    public class IndexDetails
    {
        public ResponseModel SendKundali(EmailConfiguration emailConfiguration, SendKundaliModel sendKundaliModel)
        {
            ResponseModel responseModel = new ResponseModel();
            try
            {
                EmailSender _emailSender = new EmailSender(emailConfiguration);
                var temp = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "emailTemplate", "kundalirequest.html"));
                temp = temp.Replace("##name##", sendKundaliModel.Name)
                    .Replace("##dob##", sendKundaliModel.DOB.ToLongDateString())
                    .Replace("##email##", sendKundaliModel.Email)
                    .Replace("##phone##", sendKundaliModel.Phone)
                    .Replace("##gender##", sendKundaliModel.Gender)
                    .Replace("##place##", sendKundaliModel.Place)
                    .Replace("##time##", sendKundaliModel.Time);
                var message = new Message(new string[] { "btech.csit@gmail.com","sirfakshayshukla@gmail.com" }, "Kundali Request - Bhashkar Jyotish Kendra", temp);
                _emailSender.SendEmail(message);
                responseModel.Msg = "sent";
                responseModel.Code = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                responseModel.Msg = "notsent "+ex.Message+ Path.Combine(Directory.GetCurrentDirectory());
                responseModel.Code = HttpStatusCode.InternalServerError;
            }
            return responseModel;
        }
        public ResponseModel SendQuery(EmailConfiguration emailConfiguration, SendQueryModel sendQueryModel)
        {
            ResponseModel responseModel = new ResponseModel();
            try
            {
                EmailSender _emailSender = new EmailSender(emailConfiguration);
                var temp = System.IO.File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "emailTemplate", "userquery.html"));
                temp = temp.Replace("##name##", sendQueryModel.Name)
                    .Replace("##query##", sendQueryModel.Query)
                    .Replace("##email##", sendQueryModel.Email)
                    .Replace("##mobile##", sendQueryModel.Phone)
                    .Replace("##question##", sendQueryModel.Question);
                var message = new Message(new string[] { "btech.csit@gmail.com", "sirfakshayshukla@gmail.com" }, "User Query - Bhashkar Jyotish Kendra", temp);
                _emailSender.SendEmail(message);
                responseModel.Msg = "sent";
                responseModel.Code = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                responseModel.Msg = "notsent " + ex.Message + Path.Combine(Directory.GetCurrentDirectory());
                responseModel.Code = HttpStatusCode.InternalServerError;
            }
            return responseModel;
        }
    }
}
