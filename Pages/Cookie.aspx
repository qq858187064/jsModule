<%@ Page Title="Cookie组件" Language="C#" CodeFile="Cookie.aspx.cs" Inherits="Pages_Cookie" %>
<asp:content id="Content1" contentplaceholderid="Hd5" runat="Server">Cookie</asp:content>
<asp:content id="Content2" contentplaceholderid="Descr" runat="Server">实现操作Cookie的功能</asp:content>
<asp:content id="Content3" contentplaceholderid="MenuC" runat="Server">
<a>Cookie组件</a>
</asp:content>
<asp:content id="Content4" contentplaceholderid="MainC" runat="Server">
<dd class="I2">
    <p>Cookie组件是一个用来操作Cookie的功能类，其函数签名如：Cookie(key, value, expires, path, domain, secure, raw)，各参数依次对应：Cookie的键、值、期限、可见性(值为路径)、域、是否使用安全协议（如HTTPS等）、是否在存取时进行编码/解码(默认是编解码的，如果不希望这种行为可以设raw的值为true)，其中，参数key,value,path,domain为字符串类型，expires为数值类型，单位为天，而secure和raw为布尔值。
<p class="Org"><b> 试一试：</b><a href="####" onclick='Cookie("Test","TestValue");C.G("Rt").innerHTML = Cookie("Test").toString();'>设置Cookie</a>&nbsp;&nbsp;<a href="####" onclick="Cookie('Test',null);C.G('Rt').innerHTML =Cookie('Test');">&nbsp;&nbsp;删除Cookie&nbsp;&nbsp;</a><b id="Rt"></b></p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;
    设置：Cookie("key","value")；
    设置：Cookie("key","value",7,"/",".cnfol.com");
    删除：Cookie(key,null);
    读取：Cookie(key);
    &lt;/script&gt;</pre>
</dd>
</asp:content>
<asp:content id="Content5" contentplaceholderid="FBHtml" runat="Server"></asp:content>
<asp:content id="Content6" contentplaceholderid="IptJs" runat="Server">
    <script type="text/javascript" src="/Js/Cookie.js"></script>
    <script type="text/javascript" charset="utf-8">window.Cm = 13;</script>
</asp:content>