using System;
using System.Collections.Generic;
using System.Web;
using System.Net;
using System.Text;
using System.Web.Services;
using System.Web.UI.WebControls;

/// <summary>
///Service 的摘要说明
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
//[System.Web.Script.Services.ScriptService]
public class Service : System.Web.Services.WebService {
    DataOperator DV = new DataOperator("ThinkTank");/*本机 */
    //DataOperator DV = new DataOperator("Dev");/*线上 */
    HttpContext Chc = HttpContext.Current;
    public Service () 
    {
        //如果使用设计的组件，请取消注释以下行 
        //InitializeComponent(); 
    }

    [WebMethod]
    public bool Existed(string Nm) {
        bool r = false;
        if (Nm == "test")
            r = true;
            return r;// DV.HasName(Nm);
    }

    [WebMethod]
    public bool Matched(string Nm, string Pwd)
    {
        return DV.ChkPwd(Nm, Pwd);
    }

    [WebMethod]
    public string Connect(string ConStr)
    {
        return DataOperator.Connect(ConStr);
    }

    [WebMethod]
    public void Cdb()
    {
        //new DataOperator("192.168.100.5", "Dnn", "qin", "123");
    }

    [WebMethod]
    public void UpImg()
    {
        HttpContext Ct = HttpContext.Current;
        string Fn = Ct.Request.Files[0].FileName;
        StringBuilder Psb = new StringBuilder(@"/Images/Tmp/");
        Psb.Append(DateTime.Now.ToString("yyyyMMddHHmmss"));
        Psb.Append(new Random().Next(10000));
        Psb.Append(Fn.Substring(Fn.IndexOf(".")));
        string Fp = Ct.Server.MapPath(Psb.ToString());
        Ct.Request.Files[0].SaveAs(Fp);
        StringBuilder Sb = new StringBuilder("http://");
        Sb.Append(Ct.Request.Url.Authority);
        Sb.Append(Psb);
        Ct.Response.Write(@"<script>document.domain='fo.com'</script>");
        Ct.Response.Write(Sb);
        Ct.Response.End();



        //int cl = Fu.PostedFile.ContentLength;
        //string ft = Fu.PostedFile.FileName.Trim();
        //string fe = ft.Substring(ft.LastIndexOf(".") + 1).ToLower();
        //string Msg = "";
        //if (!Fu.HasFile)
        //{
        //    Msg = "欲上传的文件路径不正确";
        //}
        //else
        //{
        //    if (fe != "jpg" || fe != "gif" || fe != "png")
        //    {
        //        Msg = "请上传jpg、gif或png格式的图片";
        //    }
        //    else if (3072 > cl || cl > 50 * 1024)
        //    {
        //        Msg = "文件大小须在3~50k以内<a href='#' target='_blank'>如何优化图像？</a>";
        //    }
        //    else
        //    {
        //        Chc.Request.Files[0].SaveAs(@"http://localhost:60080/Images/Tmp/");
        //        Msg = "图片上传成功";
        //    }
        //}
        //string Fn=@"http://localhost/Images/Tmp/"+"a.jpg";
        //Chc.Request.Files[0].SaveAs(Fn);
        //return Chc.Request.QueryString.ToString();

        /*
            public void ProcessRequest(HttpContext context)
    {
        #region 上传文件，并输出返回服务端地址
        //context.Response.ContentType = "text/plain";
        string Fn = context.Request.Files[0].FileName;
        StringBuilder Psb = new StringBuilder(@"/Images/Tmp/");
        Psb.Append(DateTime.Now.ToString("yyyyMMddHHmmss"));
        Psb.Append(new Random().Next(10000));
        Psb.Append(Fn.Substring(Fn.IndexOf(".")));
        string Fp = context.Server.MapPath(Psb.ToString());
        context.Request.Files[0].SaveAs(Fp);
        StringBuilder Sb = new StringBuilder("http://");
        Sb.Append(context.Request.Url.Authority);
        Sb.Append(Psb);
        //context.Response.Write(@"<script>document.domain='cnfol.com'</script>");
        context.Response.Write(Sb);
        //context.Response.Write(Sb+"<br />____________");
        //string Pn = context.Server.MapPath(Psb.ToString());
        //context.Response.Write(Pn);
        context.Response.End();
        #endregion


        //    #region 获取文件
        //    string[] Fs = Directory.GetFiles(AppDomain.CurrentDomain.BaseDirectory + @"Images\Tmp", @"*", SearchOption.TopDirectoryOnly);
        //    context.Response.Write("<br />"+Fs[0]);
        //    foreach (string F in Fs)
        //    {
        //        if (DateTime.Compare(File.GetCreationTime(F).AddHours(2), DateTime.Now) < 0&&Files.IsImg(F))
        //        {
        //            File.Delete(F);
        //        }
        //    }
        //#endregion
    }


*/








    }

    //[WebMethod]
    //public void Fun(string JsonP)
    //{
    //    string Jc = @"<script type='text/javascript' charset='utf-8'>alert('AA');</script>";
    //   System.IO.TextWriter.Null.Write(Jc);
    //}
}
