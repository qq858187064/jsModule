using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Web;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.IO;
using System.Text;
using System.Collections.Generic;

/// <summary>
///Imgs 的摘要说明
/// </summary>
public class Imgs
{
    HttpContext Chc = HttpContext.Current;
    //根据传入文件夹名称或选择框获取完整路径并返回
    public string TargetPath(string DirNm)
    {
        return Chc.Server.MapPath("~/Images/" + DirNm);
    }
    public string TargetPath(HtmlSelect Hs)
    {
        return Chc.Server.MapPath("~/Images/" + Hs.Value);
    }

    //根据传入文件夹名称获取其中文件
    public FileInfo[] Files(string DirNm)
    {
        DirectoryInfo Dir = new DirectoryInfo(TargetPath(DirNm+"\\Thumbnail"));
        return Dir.GetFiles("*.jpg");
    }
    //获取图片总数并返回
    public int DC(string DirNm)
    {
        DirectoryInfo Dir = new DirectoryInfo(TargetPath(DirNm));
        return Dir.GetFiles("*.jpg").Length ;
    }

   //根据传入的FileUpload控件
    public string SaveFile(FileUpload Fu, HtmlSelect Hs)
    {
        //StringBuilder js =new StringBuilder( @"<script type='text/javascript'>alert('')</script>");
        //int ci = js.ToString().LastIndexOf("\'");
        int cl = Fu.PostedFile.ContentLength;
        string ft = Fu.PostedFile.FileName.Trim();
        string fe=ft.Substring(ft.LastIndexOf(".")+1).ToLower();
        string Msg = "";
        if (!Fu.HasFile)
        {
            Msg = "欲上传的文件路径不正确";
        }
        else
        {
            if (fe!="jpg")
            {
                Msg = "请上传jpg格式的图片";
            }
            else if (3072>cl || cl > 50 * 1024)
            {
                Msg = "文件大小须在3~50k以内<a href='file://172.2.1.100/网络公司/' target='_blank'>如何优化图像？</a>"; 
            }
            else
            {
                SaveImgs(this.TargetPath(Hs) + "\\" + (this.DC(Hs.Value) + 1).ToString() + ".jpg");
                Msg = "图片上传成功";
            }
        }
        return Msg;
    }

    //生成缩略图并保存
    public void SaveImgs(string oPath)
    {
        Chc.Request.Files[0].SaveAs(oPath);
        System.Drawing.Image Img = System.Drawing.Image.FromFile(oPath);
        System.Drawing.Image TI = Img.GetThumbnailImage(96, 64, Tc, System.IntPtr.Zero);
        TI.Save(oPath.Insert(oPath.LastIndexOf("\\") + 1, "Thumbnail\\"),ICI(),Eps(90));
        Img.Dispose();
    }
    private static bool Tc() { return false; }

    //获取GetCodecInfo
    public ImageCodecInfo ICI()
    {
        ImageCodecInfo[] CIs=ImageCodecInfo.GetImageEncoders();
        foreach(ImageCodecInfo II in CIs)
        {
            if (II.MimeType == "image/jpeg") return II;
        }
        return null;
    }

    //获取EncoderParameters
    /// <summary>
    /// 
    /// </summary>
    /// <param name="Qty">质量级别 0 对应于最大压缩，而质量级别 100 对应于最小压缩0-100</param>
    /// <returns></returns>
    public EncoderParameters Eps(int Qty)
    {

        EncoderParameters PS = new EncoderParameters(1);
        PS.Param[0] = new EncoderParameter(System.Drawing.Imaging.Encoder.Quality, Qty);
        return PS;
    }
}