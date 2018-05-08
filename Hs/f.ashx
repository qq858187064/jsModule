<%@ WebHandler Language="C#" Class="f" %>
using System;
using System.Web;
using System.Web.UI;
using System.Text;
using System.IO;
using System.IO.Compression;
public class f : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        HttpResponse Response = context.Response;
        HttpRequest Request = context.Request;
        StringBuilder Rs = new StringBuilder();
        foreach (string P in Request.QueryString[0].Split(','))
        {
            string S = context.Server.MapPath("/"+P);
            bool fx=(File.Exists(S));
            if (File.Exists(S))
            {
                Rs.Append(File.ReadAllText(S));
                Rs.Append("\n");
            }
        }
        //GZipStream
        Response.Write(Rs);
    }
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}

/*
using System;
using System.Net;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Configuration;
using System.Web;

public class HttpCombiner : IHttpHandler {

    private const bool DO_GZIP = true;
    private readonly static TimeSpan CACHE_DURATION = TimeSpan.FromDays(30);
    
    public void ProcessRequest (HttpContext context) {
        
        HttpRequest request = context.Request;
        
        // Read setName, contentType and version. All are required. They are
        // used as cache key
        string setName = request["s"] ?? string.Empty;
        string contentType = request["t"] ?? string.Empty;
        string version = request["v"] ?? string.Empty;

        // Decide if browser supports compressed response
        bool isCompressed = DO_GZIP && this.CanGZip(context.Request);

        // Response is written as UTF8 encoding. If you are using languages like
        // Arabic, you should change this to proper encoding 
        UTF8Encoding encoding = new UTF8Encoding(false);

        // If the set has already been cached, write the response directly from
        // cache. Otherwise generate the response and cache it
        if (!this.WriteFromCache(context, setName, version, isCompressed, contentType))
        {
            using (MemoryStream memoryStream = new MemoryStream(5000))
            {
                // Decide regular stream or GZipStream based on whether the response
                // can be cached or not
                using (Stream writer = isCompressed ?
                    (Stream)(new GZipStream(memoryStream, CompressionMode.Compress)) :
                    memoryStream)
                {

                    // Load the files defined in <appSettings> and process each file
                    string setDefinition = 
                        System.Configuration.ConfigurationManager.AppSettings[setName] ?? "";
                    string[] fileNames = setDefinition.Split(new char[] { ',' }, 
                        StringSplitOptions.RemoveEmptyEntries);
                    
                    foreach (string fileName in fileNames)
                    {
                        byte[] fileBytes = this.GetFileBytes(context, fileName.Trim(), encoding);
                        writer.Write(fileBytes, 0, fileBytes.Length);
                    }

                    writer.Close();
                }

                // Cache the combined response so that it can be directly written
                // in subsequent calls 
                byte[] responseBytes = memoryStream.ToArray();
                context.Cache.Insert(GetCacheKey(setName, version, isCompressed),
                    responseBytes, null, System.Web.Caching.Cache.NoAbsoluteExpiration,
                    CACHE_DURATION);

                // Generate the response
                this.WriteBytes(responseBytes, context, isCompressed, contentType);
            }
        }
    }

    private byte[] GetFileBytes(HttpContext context, string virtualPath, Encoding encoding)
    {
        if (virtualPath.StartsWith("http://", StringComparison.InvariantCultureIgnoreCase))
        {
            using (WebClient client = new WebClient())
            {
                return client.DownloadData(virtualPath);
            }
        }
        else
        {
            string physicalPath = context.Server.MapPath(virtualPath);
            byte[] bytes = File.ReadAllBytes(physicalPath);
            // TODO: Convert unicode files to specified encoding. For now, assuming
            // files are either ASCII or UTF8
            return bytes;
        }
    }

    private bool WriteFromCache(HttpContext context, string setName, string version, 
        bool isCompressed, string contentType)
    {
        byte[] responseBytes = context.Cache[GetCacheKey(setName, version, isCompressed)] as byte[];

        if (null == responseBytes || 0 == responseBytes.Length) return false;

        this.WriteBytes(responseBytes, context, isCompressed, contentType);
        return true;
    }

    private void WriteBytes(byte[] bytes, HttpContext context, 
        bool isCompressed, string contentType)
    {
        HttpResponse response = context.Response;

        response.AppendHeader("Content-Length", bytes.Length.ToString());
        response.ContentType = contentType;
        if (isCompressed)
            response.AppendHeader("Content-Encoding", "gzip");

        context.Response.Cache.SetCacheability(HttpCacheability.Public);
        context.Response.Cache.SetExpires(DateTime.Now.Add(CACHE_DURATION));
        context.Response.Cache.SetMaxAge(CACHE_DURATION);
        context.Response.Cache.AppendCacheExtension("must-revalidate, proxy-revalidate");

        response.OutputStream.Write(bytes, 0, bytes.Length);
        response.Flush();
    }

    private bool CanGZip(HttpRequest request)
    {
        string acceptEncoding = request.Headers["Accept-Encoding"];
        if (!string.IsNullOrEmpty(acceptEncoding) &&
             (acceptEncoding.Contains("gzip") || acceptEncoding.Contains("deflate")))
            return true;
        return false;
    }

    private string GetCacheKey(string setName, string version, bool isCompressed)
    {
        return "HttpCombiner." + setName + "." + version + "." + isCompressed;
    }

    public bool IsReusable
    {
        get
        {
            return true;
        }
    }

}
 */

/* 静态化
 /// <summary>
    /// 网站静态化功能类
    /// </summary>
    public class CreateHtml
    {
        /// <summary>
        /// 读取模板内容
        /// </summary>
        /// <param name="template">模板相对路径</param>
        /// <returns>模板内容,读取失败返回""</returns>
        public string Html_ReadTemplate(string template)
        {
            #region
            StringBuilder str = new StringBuilder();//存放模式内容
            if (template != null && template != "" && template.Length > 0)//如果
            {
                try
                {
                    using (StreamReader sr = new StreamReader(System.Web.HttpContext.Current.Server.MapPath(template), Encoding.GetEncoding("utf-8")))
                    {
                        string tempStr;
                        while ((tempStr = sr.ReadLine()) != null)//如果没有读取文件末尾
                        {
                            str.Append(tempStr);
                        }
                        sr.Close();
                    }
                }
                catch (Exception ex)
                {
                    return null;                   
                }
            }
            return str.ToString();
            #endregion
        }
        /// <summary>
        /// 根据生成文件绝对路径、生成文件名生成文件
        /// </summary>
        /// <param name="fileAbsolutePath">文件绝对路径</param>
        /// <param name="htmlName">生成文件名</param>
        /// <param name="htmlNote">写入文件内容</param>
        /// <returns>生成文件状态,1:成功 0:失败</returns>
        public int Html_WriteTemplate(string fileAbsolutePath, string htmlName,string htmlNote)
        {
            #region
            if (fileAbsolutePath != null && fileAbsolutePath != "" && fileAbsolutePath.Length > 0 && htmlName != null && htmlName != "" && htmlName.Length > 0)
            {
                try
                {
                    using (FileStream fs = new FileStream(fileAbsolutePath + "\\" + htmlName, FileMode.Create, FileAccess.Write, FileShare.Write))
                    {
                        StreamWriter sw = new StreamWriter(fs, System.Text.Encoding.GetEncoding("utf-8"));
                        sw.Write(htmlNote);
                        sw.Close();
                        fs.Close();
                        return 1;//文件生成成功
                    }
                }
                catch (Exception ex)
                {
                    return 0;
                }
            }
            return 0;//文件生成失败
            #endregion
        }
        /// <summary>
        /// 根据读取到所有内容进行分页读取，每页与每页用“|”分割
        /// </summary>
        /// <param name="contentText">内容</param>
        /// <param name="pageLogo">分页标志</param>
        /// <returns>内容分页后字符串，每页与每页用“|”分割</returns>
        public string Html_BackPageData(string contentText,string pageLogo)
        {
            #region
            int tempcount = 0;
            StringBuilder sb = new StringBuilder();
            while (tempcount >= 0)
            {
                int index = contentText.IndexOf(pageLogo);//分页标志
                if (index == -1)//如果没有分页了
                {
                    sb.Append(contentText);
                    break;
                }
                else
                {
                    sb.Append(contentText.Substring(0,index)+"|");
                    int start = index + pageLogo.Length + 1;
                    int end = contentText.Length-index-pageLogo.Length - 1;
                    contentText=contentText.Substring(start, end);
                }
                tempcount++;
            }
            return sb.ToString();
            #endregion
        }
        /// <summary>
        /// 针对内容生成相应的分页标志，首页、上一页、页码、下一页、尾页（针对一条内容）
        /// </summary>
        /// <param name="currPageIndex">当前页索引</param>
        /// <param name="pageCount">总页数</param>
        /// <param name="noteName">文件名(只跟文件名不跟后缀名)</param>
        /// <returns>根据内容生成的相应分页标志</returns>
        public string Html_Pager_Sign(int currPageIndex, int pageCount, string noteName)
        {
            #region
            string allSeprNote = "<table><tr><td>&nbsp;&nbsp;&nbsp;$firstpage$</td><td>&nbsp;&nbsp;$uppage$</td><td>&nbsp;$pagenumber$</td><td>&nbsp;&nbsp;$drownpage$</td><td>&nbsp;&nbsp;$lastpage$</td></tr></table>";
            string seprTempStr = "";
            for (int i = 1; i <= pageCount; i++)//循环生成每页页码(本循环只生成页码)
            {
                int n = i - 1;
                //如果是第一页
                if (i == 1)
                {
                    seprTempStr += "<a href='" + noteName + ".html'>" + i+"&nbsp;"+ "</a>";
                }
                else
                {
                    seprTempStr += "<a href='" + noteName +"-"+n+ ".html'>" + i+"&nbsp;" + "</a>";
                }
            }
            allSeprNote = allSeprNote.Replace("$pagenumber$", seprTempStr);//替换页码
            //生成首页、上一页
            if (currPageIndex == 0)//如果当前页为第一页，则就没有上一页,和首页的链接
            {
                allSeprNote = allSeprNote.Replace("$firstpage$", "首页");//替换首页
                allSeprNote = allSeprNote.Replace("$uppage$", "上一页");//替换上一页
            }
            else if (currPageIndex == 1)//如果当前页是第二页，就有上一页和首页链接,并且上一页与首页链接是一样的，也就是功能一样
            {
                allSeprNote = allSeprNote.Replace("$firstpage$", "<a href='" + noteName + ".html'>首页</a>");//替换首页，有链接
                allSeprNote = allSeprNote.Replace("$uppage$", "<a href='" + noteName + ".html'>上一页</a>");//替换上一页，因为是第二页所以链接与首页相同
            }
            else//如果是其他页
            {
                int temppageindex = currPageIndex - 1;//上一页页码
                allSeprNote = allSeprNote.Replace("$firstpage$", "<a href='" + noteName + ".html'>首页</a>");//替换首页
                allSeprNote = allSeprNote.Replace("$uppage$", "<a href='" + noteName +"-"+temppageindex+ ".html'>上一页</a>");//替换上一页
            }
            //生成尾页、下一页
            if (currPageIndex == pageCount - 1)//如果当前页为最后一页,则下一页与尾页功能相同，而且都无链接
            {
                allSeprNote = allSeprNote.Replace("$lastpage$", "尾页");//替换尾页
                allSeprNote = allSeprNote.Replace("$drownpage$", "下一页");//替换下一页
            }
            else//如果是其他页
            {
                int temppageindex = currPageIndex+1;//下一页页码
                allSeprNote=allSeprNote.Replace("$lastpage$", "<a href='" + noteName + "-" + (pageCount - 1) + ".html'>尾页</a>");//生成尾页
                allSeprNote=allSeprNote.Replace("$drownpage$", "<a href='" + noteName + "-" + temppageindex + ".html'>下一页</a>");
            }
            return allSeprNote;
            #endregion
        }
        /// <summary>
        /// 针对列表页生成分页标志
        /// </summary>
        /// <param name="pageTotal">总页数</param>
        /// <param name="currentPage">当前页索引(从零开始)</param>
        /// <param name="pageSize">每页显示内容条数</param>
        /// <param name="name">文件名(不带后缀)</param>
        /// <returns>分页标志</returns>
        public string Html_Pager_Multi(int pageTotal, int currentPage, int pageSize, string name,string path)
        {
            #region
            pageTotal = pageTotal - 1;
            StringBuilder sb = new StringBuilder();
            //生成首页、上一页链接
            if (currentPage == 0)//如果当前页是第一页
            {
                sb.Append("&nbsp;&nbsp;首页&nbsp;&nbsp;上一页&nbsp;&nbsp;");
            }
            else if (currentPage == 1)//如果当前页是第二页
            {
                sb.Append("&nbsp;&nbsp;<a href='" + name + ".html" + "'>首页</a>");
                sb.Append("&nbsp;&nbsp;<a href='" + name + ".html" + "'>上一页</a>&nbsp;&nbsp;");
            }
            else
            {
                sb.Append("&nbsp;&nbsp;<a href='" + name + ".html" + "'>首页</a>");
                sb.Append("&nbsp;&nbsp;<a href='" + name + "-" + (currentPage - 1) + ".html'>上一页</a>&nbsp;&nbsp;");
            }
            int indexStart = currentPage - 5;
            int indexEnd = currentPage + 5;
            if (indexStart <= 0)
            {
                indexStart = 0;
                indexEnd = 10;
            }
            if (indexStart > 0)
            {
                indexStart = currentPage - 5;
                indexEnd = currentPage + 5;
            }
            if (currentPage >= pageTotal-10)
            {
                indexStart = pageTotal - 10;
                indexEnd = pageTotal;
            }
            //生成详细页码
            for (int i = indexStart; i <= indexEnd; i++)
            {

                if (i == currentPage)
                {
                    sb.Append("&nbsp;" + (i+1) + "&nbsp;");
                }
                else if (i == 0)//如果当前页是第二页，需要单独处理一下
                {
                    sb.Append("&nbsp;<a href='" + name + ".html'>" + (i + 1) + "</a>&nbsp;");
                }
                else
                {
                    sb.Append("&nbsp;<a href='" + name + "-" + i + ".html'>" + (i + 1) + "</a>&nbsp;");
                }
            }
            //生成下一页、尾页
            if (currentPage == pageTotal)//如果当前页是最后一页
            {
                sb.Append("&nbsp;&nbsp;下一页&nbsp;&nbsp;");
                sb.Append("&nbsp;&nbsp;尾页&nbsp;&nbsp;");
            }
            else
            {
                sb.Append("&nbsp;&nbsp;<a href='"+name+"-"+(currentPage+1)+".html'>下一页</a>&nbsp;&nbsp;");
                sb.Append("&nbsp;&nbsp;<a href='"+name+"-"+pageTotal+".html'>尾页</a>");
            }
            sb.Append("&nbsp;&nbsp;&nbsp;&nbsp;" + (currentPage + 1) + "/" + (pageTotal + 1));
            sb.Append("&nbsp;&nbsp;&nbsp;&nbsp;转到:<select name=\"qq\" id=\"ddlIndexList\" onchange=\"javascript:location.href=this.value;\">");
            string absolutePaths = HttpContext.Current.Request.Url.ToString();//获取url
            absolutePaths = absolutePaths.Substring(0, absolutePaths.LastIndexOf("/"))+"\\" + path;//获取网站根路径url
            for (int j = 1; j <= (pageTotal+1); j++)
            {
                if (j == 1)
                {
                    sb.Append("<option value='" + absolutePaths+"\\"+name + ".html'>" + j + "</option>");
                }
                else
                {
                    sb.Append("<option value='" + absolutePaths+"\\"+name + "-" + (j - 1) + ".html'>" + j + "</option>");
                }
            }
            sb.Append("</select>");
            sb.Append("<script type=\"text/javascript\" language=\"javascript\">");
            if (currentPage == 0)//第一页
            {
                string d = "document.getElementById(\"ddlIndexList\").value = \"" + name + ".html\";";
                sb.Append("document.getElementById(\"ddlIndexList\").value = \""+name+".html\";");
            }
            else
            {
                string k = " document.getElementById(\"ddlIndexList\").value = \"" + name + "-" + currentPage + ".html\";";
                sb.Append(" document.getElementById(\"ddlIndexList\").value = \"" + name+"-"+currentPage + ".html\";");
            }
            sb.Append("</script>");
            return sb.ToString();
            #endregion
        }
 
 */