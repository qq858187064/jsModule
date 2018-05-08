<%@ WebHandler Language="C#" Class="Handler" %>
using System;
using System.Web;
using System.Text;
using System.IO;
using System.Drawing;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;
using System.Collections.Specialized;


public class Handler : IHttpHandler
{

    public void ProcessRequest(HttpContext hc)
    {
        //hc.Response.ContentType = "text/plain";
        if (hc.Request["f"] != null)
        {
            //
            string cmd = hc.Request["f"].ToString();
            System.Reflection.MethodInfo method = this.GetType().GetMethod(cmd);
            if (method != null)
            {
                method.Invoke(this, new object[] { hc });
            }
        }
        /* Stream stream = hc.Request.Files[0].InputStream;//new MemoryStream();
byte[] bt  = new byte[stream.Length];
stream.Read(bt, 0, bt.Length);
//设置当前流的位置为流的开始
//stream.Seek(0, SeekOrigin.Begin);不设暂未发现问题
 hc.Response.ContentType = "image/jpeg";
   hc.Response.BinaryWrite(bt);
   hc.Response.Write(stream);
   hc.Response.Write("<hr />"); */



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

        //upload(context.Request.Files["Fu"], context);
    }
    /// <summary>
    /// 裁剪图片
    /// </summary>
    /// <param name="hc"></param>
    public void cut(HttpContext hc)
    {
        //HttpRequest q = hc.Request;
        //string p = q["p"];
        //int x = Convert.ToInt32(q["x"]),
        //    y = Convert.ToInt32(q["y"]),
        //    w = 99,
        //    h = 99;
        NameValueCollection p = hc.Request.QueryString;
        int x = Convert.ToInt32(p["x"]),
            y = Convert.ToInt32(p["y"]),
           w = Convert.ToInt32(p["w"]),
           h = Convert.ToInt32(p["h"]);
        string pt =p["p"],
         //约定临时目录为tmp
         ep = pt.Replace("tmp/", "");

        Image img = Image.FromFile(hc.Server.MapPath(pt));



        Bitmap bmp = new Bitmap(w, h, PixelFormat.Format24bppRgb);
        bmp.SetResolution(img.HorizontalResolution, img.VerticalResolution);

        using (Graphics g = Graphics.FromImage(bmp))
        {
            //graphic.SmoothingMode = SmoothingMode.HighSpeed;
            //graphic.InterpolationMode = InterpolationMode.Low;
            //graphic.CompositingQuality = CompositingQuality.HighSpeed;
            //graphic.PixelOffsetMode = PixelOffsetMode.HighSpeed;
            //graphic.DrawImage(image, new Rectangle(0, 0, 96, 96), x, y, w, h, GraphicsUnit.Pixel);
            g.DrawImage(img, x, y);
            //img.Dispose();
            //g.Dispose();
        }

        EncoderParameters ps = new EncoderParameters();
        ps.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, 95L);

        ImageCodecInfo ci = null;
        ImageCodecInfo[] cs=ImageCodecInfo.GetImageEncoders();
        string mt =  "image/jpeg";
        foreach (ImageCodecInfo i in cs)
        {
            if (i.MimeType == mt) ci= i;
        }

          //File.Delete(hc.Server.MapPath(ep));
        bmp.Save(hc.Server.MapPath(ep),ci,ps);

        hc.Response.Write(ep);
        hc.Response.End();

        //MemoryStream ms = new MemoryStream();
        //bmp.Save(ms, ImageFormat.Png);
        //hc.Response.ContentType = "image/jpeg";
        //ms.WriteTo(hc.Response.OutputStream);
        //ms.Close();


    }

    public void up(HttpContext hc)
    {
        hc.Response.ContentType = "text/plain";
        HttpPostedFile file = hc.Request.Files["Fu"];
        #region 上传文件，并输出返回服务端地址
        string Fn = hc.Request.Files[0].FileName;
        StringBuilder Psb = new StringBuilder(@"/Images/uimg/tmp/");
        Psb.Append(DateTime.Now.ToString("yyyyMMddHHmmss"));
        Psb.Append(new Random().Next(10000));
        Psb.Append(Fn.Substring(Fn.IndexOf(".")));
        string Fp = hc.Server.MapPath(Psb.ToString());
        hc.Request.Files[0].SaveAs(Fp);
        StringBuilder Sb = new StringBuilder("http://");
        Sb.Append(hc.Request.Url.Authority);
        Sb.Append(Psb);
        hc.Response.Write(Sb);


        hc.Response.End();

        #endregion
    }
    public void upload(HttpPostedFile postedFile, HttpContext hc)
    {
        Image thumbnail = null;
        Image original = null;
        Bitmap final = null;
        Graphics graphic = null;
        MemoryStream ms = null;
        try
        {
            original = Image.FromStream(postedFile.InputStream);
            int width = original.Width;
            int height = original.Height;
            int tw = 550;
            int th = 340;
            int nw, nh;

            float tr = (float)tw / (float)th;
            float ratio = (float)width / (float)height;

            if (tr > ratio)
            {
                nh = th;
                nw = (int)Math.Floor(ratio * (float)th);
            }
            else
            {
                nh = (int)Math.Floor((float)tw / ratio);
                nw = tw;
            }

            nw = nw > tw ? tw : nw;
            nh = nh > th ? th : nh;


            final = new Bitmap(tw, th);
            graphic = Graphics.FromImage(final);
            graphic.FillRectangle(new SolidBrush(Color.White), new Rectangle(0, 0, tw, th));
            int x = (tw - nw) / 2;
            int y = (th - nh) / 2;
            graphic.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic; /* new way */
                                                                                                       //graphic.DrawImage(thumbnail, x, y, nw, nh);
            graphic.DrawImage(original, x, y, nw, nh);

            // Store the thumbnail in the session (Note: this is bad, it will take a lot of memory, but this is just a demo)
            ms = new MemoryStream();
            final.Save(ms, System.Drawing.Imaging.ImageFormat.Jpeg);
            //string thumbnail_id = DateTime.Now.ToString("yyyyMMddHHmmssfff");
            byte[] bt = ms.GetBuffer();
            //hc.Session["headpic"] = bt;
            hc.Response.ContentType = "image/jpeg";
            final.Save(@"‪C:\Users\Administrator\Desktop\aaaa.jpg");
            hc.Response.BinaryWrite(bt);
            hc.Response.Write("<hr />");

            //this.hc.Response.End();
            //this.hc.Response.StatusCode = 200;
        }
        catch (Exception e)
        {
            //this.hc.Response.Write(e.Message);
            //hc.Response.End();
        }
        finally
        {
            // Clean up
            hc.Response.End();
            if (final != null) final.Dispose();
            if (graphic != null) graphic.Dispose();
            if (original != null) original.Dispose();
            if (thumbnail != null) thumbnail.Dispose();
            if (ms != null) ms.Close();
            //Response.End();
        }
    }



    /// <summary>
    /// 传入文件路径是否为图片文件
    /// </summary>
    /// <param name="Path"></param>
    /// <returns></returns>
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}