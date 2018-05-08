<%@ Page Title="跑马灯组件" Language="C#" CodeFile="Rolls.aspx.cs" Inherits="Rolls" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Rolls</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现所有滚动内容效果(跑马灯)</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<%--<a>智能滚动</a>--%>
<a>向左滚动</a>
<a>向上滚动</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<%--<dd id="Mar1" class="Masks"><a href="####" class="Prev L"></a><a href="####" class="Next R"></a>
<div class="Son"><a href="#"><img src="Images/Activities/Thumbnail/1.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/2.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/3.jpg" />标题文字</a>
<a href="#"><img src="Images/Activities/Thumbnail/4.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/5.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/6.jpg" />标题文字</a>
<a href="#"><img src="Images/Activities/Thumbnail/7.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/8.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/9.jpg" />标题文字</a><a href="#"><img src="Images/Activities/Thumbnail/10.jpg" />标题文字</a>
</div>
</dd>--%>
<dd>
<div id="LMar" class="Mar">
<span><a href="#"><img src="/Images/PfH.jpg" alt="1" /></a><a href="#"><img src="/Images/PfH.jpg" alt="2" /></a><a href="#"><img src="/Images/PfH.jpg" alt="3" /></a><a href="#"><img src="/Images/PfH.jpg" alt="4" /></a><a href="#"><img src="/Images/PfH.jpg" alt="5" /></a><a href="#"><img src="/Images/PfH.jpg" alt="6" /></a><a href="#"><img src="/Images/PfH.jpg" alt="7" /></a><a href="#"><img src="/Images/PfH.jpg" alt="8" /></a><a href="#"><img src="/Images/PfH.jpg" alt="9" /></a><a href="#"><img src="/Images/PfH.jpg" alt="10" /></a></span></div>
<p class="I2">该功能模块需要四个参数，第一个参数是外层元素的ID值，其第一个字符是预留的，用来指示模块滚动的方向，第一个字符为“T”，则表示向上滚动，“L”，则表示向左滚动，不区分大小写；
第二个参数用来指示模块的滚动速度，单位为毫秒，值越小，滚动速度越快，值越大，则滚动速度越慢；
第三个和第四个参数不是必须的，但如果需要该滚动模块“间歇”滚动，请设置这两个参数，第三个参数用来指示每滚动多少像素时暂停，单位为px;第四个参数则表示滚动暂停多少毫秒时恢复滚动</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Rolls("LMar",10,100,2000);<br />&lt;/script&gt;</pre>
</dd>
<dd>
<div id="TMar" class="Mar MarUp"><span><a href="#"><img src="/Images/Pf.jpg" alt="1" /></a><a href="#"><img src="/Images/Pf.jpg" alt="2" /></a><a href="#"><img src="/Images/Pf.jpg" alt="3" /></a><a href="#"><img src="/Images/Pf.jpg" alt="4" /></a><a href="#"><img src="/Images/Pf.jpg" alt="5" /></a><a href="#"><img src="/Images/Pf.jpg" alt="6" /></a><a href="#"><img src="/Images/Pf.jpg" alt="7" /></a><a href="#"><img src="/Images/Pf.jpg" alt="8" /></a><a href="#"><img src="/Images/Pf.jpg" alt="9" /></a><a href="#"><img src="/Images/Pf.jpg" alt="10" /></a><a href="#"><img src="/Images/Pf.jpg" alt="9" /></a><a href="#"><img src="/Images/Pf.jpg" alt="10" /></a></span></div>
<p class="I2">该功能模块需要四个参数，第一个参数是外层元素的ID值，其第一个字符是预留的，用来指示模块滚动的方向，第一个字符为“T”，则表示向上滚动，“L”，则表示向左滚动，不区分大小写；
第二个参数用来指示模块的滚动速度，单位为毫秒，值越小，滚动速度越快，值越大，则滚动速度越慢；
第三个和第四个参数不是必须的，但如果需要该滚动模块“间歇”滚动，请设置这两个参数，第三个参数用来指示每滚动多少像素时暂停，单位为px;第四个参数则表示滚动暂停多少毫秒时恢复滚动</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Rolls("TMar",10,131,2000);<br />&lt;/script&gt;</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Rolls.js"></script>
</asp:Content>
<asp:Content ID="Content7" Runat="Server" ContentPlaceHolderID="RunJs">
new Rolls("LMar",10,100,2000);
new Rolls("TMar",10,135,2000);
window.Cm=4;
</asp:Content>