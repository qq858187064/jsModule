<%@ Page Title="组件库基类" Language="C#" CodeFile="Default.aspx.cs" Inherits="Base" %>
<asp:Content runat="server" ContentPlaceHolderID="Hd5">Base</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="Descr">所有其它功能类共享的函数集合</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a href="#">Js库和Base类概述</a>
<a href="#" onclick="Bscd()">Base类中的函数群</a>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="I2">
<p>全局统筹、科学高效、规范一致的网站代码管理，将大大提高网站开发及维护的效率，避免了重复劳动、降低人力成本等。这么做带来的好处还不仅于此：网页加载速度将更快、简洁的网页代码将更利于网站SEO排名等等。那么，构建最常用的Javascript公共库，则成了我们提高工作效率、降低人力成本、迎合公司发展的第一道法门。</p>
<p>这个公共库，是我们所有同仁可以共同调用的一个高效运行、完美兼容、规范一致、无限重用、任意扩展、且更适合公司网站群的Javascript公共库。</p>
<p>Base类是所有其它类共享的函数的集合，所以，在引用其它模块时，应确保已经引用了该类，也就是说，要要引用其它模块之前引用Base类。</p>
<h6>该模块引用代码:</h6>
<pre>&lt;script type="text/javascript" src="Js/Base.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="需要引用的"&gt;&lt;/script&gt;</pre>
<p>这些代码可放在head区，也可以放在body区，如果要放在body区，最好放在body结束标记&lt;/body&gt;之前，这样不会影响html内容的正常呈显，也避免了程序调用未加载的元素而引起的异常。</p>
</dd>
<dd class="I2">
<p>尽管Base类是为诸多功能类而开发的共用函数的集合，但这并不影响它对外共享自己优秀的诸多功能，如获取元素、获取元素的集合、事件监听、事件删除、添加样式、取消样式等，如果您希望高效完美、规范兼容一致的完成这些作任务时，可以在引用之该类之后这么做：</p>
<pre id="Bsc"></pre>
</dd>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=0;

    var accessToken="";
          C.EXHR(function (o) {
        console.log(o)
    accessToken=o.access_token;
    }, "GET", "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxaf138c03b8df658d&secret=1fa324ab7d87be1bf98b6606446d2101")
      
    C.EXHR(function (o) {
        console.log(o)
    }, "POST", "https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token="+accessToken,
    {"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}}
    )

</asp:Content>
