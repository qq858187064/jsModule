using System;
using System.Collections.Generic;
using System.Web;
using System.Drawing;

/// <summary>
/// Files 的摘要说明
/// </summary>
public class Files
{
	public Files()
	{
	}
    #region 判断指定文件是否为图片
    /// <summary>
    /// 判断指定文件是否为图片
    /// </summary>
    /// <param name="Path"></param>
    public static bool IsImg(string Path)
    {
        bool R;
        try
        {
            Image Img =Image.FromFile(Path);
            Img.Dispose();
            R = true;
        }
        catch (Exception e)
        {
            R = false;
        }
        return R;
    }
    #endregion

    #region 判断文件是否符合规要求
    public bool IsValid(string Path,UInt32 Size)
    {
        return (UInt32)HttpContext.Current.Request.Files[0].ContentLength > Size ? true : false;
    }
    #endregion

}