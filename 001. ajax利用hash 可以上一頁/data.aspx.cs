using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class data : System.Web.UI.Page
{
    private string datatype
    {
        get
        {
            return HttpContext.Current.Request.QueryString["datatype"] ?? "";
        }
    }

    protected void Page_Load(object sender, EventArgs e)
    {
        if (datatype != "")
        {
            var jss = new JavaScriptSerializer();

            var step1 = new Dictionary<string, string>
            {
                {"step", "1"},
                {"title", "步驟一"},
                {"message", "會員須知"}
            };

            var step2 = new Dictionary<string, string>
            {
                {"step", "2"},
                {"title", "步驟二"},
                {"message", "填寫資料"}
            };

            var step3 = new Dictionary<string, string>
            {
                {"step", "3"},
                {"title", "步驟三"},
                {"message", "完成註冊"}
            };

            string json;

            if (datatype == "1")
            {
                json = jss.Serialize(step1);
            } 
            else if (datatype == "2")
            {
                json = jss.Serialize(step2);
            }
            else
            {
                json = jss.Serialize(step3);
            }







            HttpContext.Current.Response.ContentType = "application/json";
            HttpContext.Current.Response.Write(json);
            HttpContext.Current.Response.End();
        }

    }
}