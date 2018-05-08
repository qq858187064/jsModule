<%@ Page Title="Ajax功能组件" Language="C#" CodeFile="Ajax.aspx.cs" Inherits="_Ajax" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Ajax</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">
Ajax相关功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a href="#">Ajax模块</a><a href="#">Jsonp跨域</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="AjLg I2">
<label for="Nm">用户名：<input type="text" id="Nm" class="Txt" onchange="cNm()" value="输入test试试" /><i id="NmRt"></i></label>
<label for="Pwd">密&nbsp;&nbsp;&nbsp;码：<input type="password" id="Pwd" class="Txt" /><i id="PwdRt"></i><a href="#">忘记密码？</a></label>
<label class="Rmb"><a href="#" class="BtnLg">登&nbsp;录</a><label class="Ilb" for="RmbPwd"><input id="RmbPwd" type="checkbox" title="1年内保持登录" />保持登录</label></label>
<p>由于Ajax的风靡全球，使我们把与之与关的功能都封装到了我们的基类中，在引用了基类后，可以直接调用，像这样C.EXHR(CallBack, Method, Url, Data, Proc, Async),6个参数中前三个为必填，后三个则是可选的。CallBack是回调函数，Method则是用来指定请求的类型GET或POST，而Url是指定文件在服务器上的位置的，当以POST方式交互时，则需要指定Data,即传给Url的数据，Proc是一个函数名，该函数接收一个字符串变量，它是与服务器请求的过程的状态的描述，很多人不喜欢这样的个功能，最后一个参数Async是指定该请求为异步，还是异步或同步，默认为true,即异步，建议保留该默认值。</p>
<h6>该功能调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />C.EXHR(CallBack, Method, Url);<br />&lt;/script&gt;</pre>
</dd>
 <dd>
     <p class="Ls">
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
         <a href="#">链接文本链接文本链接文本</a>
     </p>
 </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server" />
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Menus.js"></script>
<script type="text/javascript" src="/Js/Util.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=9;
</asp:Content>