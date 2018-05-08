using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class ImgsM : System.Web.UI.Page
{
    public int Intion;
    Imgs Im = new Imgs();
    protected void Page_Load(object sender, EventArgs e)
    {
        Intion = Im.DC("Activities");
    }
}
