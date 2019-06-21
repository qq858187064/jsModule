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
<div id="LMar" class="Mar" p="dir:2,speed:20,stay:3000,n:1" >
<a href="#"><img src="/Images/PfH.jpg" alt="1" /></a><a href="#"><img src="/Images/PfH.jpg" alt="2" /></a><a href="#"><img src="/Images/PfH.jpg" alt="3" /></a><a href="#"><img src="/Images/PfH.jpg" alt="4" /></a><a href="#"><img src="/Images/PfH.jpg" alt="5" /></a><a href="#"><img src="/Images/PfH.jpg" alt="6" /></a><a href="#"><img src="/Images/PfH.jpg" alt="7" /></a><a href="#"><img src="/Images/PfH.jpg" alt="8" /></a><a href="#"><img src="/Images/PfH.jpg" alt="9" /></a><a href="#"><img src="/Images/PfH.jpg" alt="10" /></a></div>
<div id="TMar" class="Mar MarUp"  p="dir:1,speed:20,stay:3000,n:1" ><a href="#"><img src="/Images/Pf.jpg" alt="1" /></a><a href="#"><img src="/Images/Pf.jpg" alt="2" /></a><a href="#"><img src="/Images/Pf.jpg" alt="3" /></a><a href="#"><img src="/Images/Pf.jpg" alt="4" /></a><a href="#"><img src="/Images/Pf.jpg" alt="5" /></a><a href="#"><img src="/Images/Pf.jpg" alt="6" /></a><a href="#"><img src="/Images/Pf.jpg" alt="7" /></a><a href="#"><img src="/Images/Pf.jpg" alt="8" /></a><a href="#"><img src="/Images/Pf.jpg" alt="9" /></a><a href="#"><img src="/Images/Pf.jpg" alt="10" /></a><a href="#"><img src="/Images/Pf.jpg" alt="9" /></a><a href="#"><img src="/Images/Pf.jpg" alt="10" /></a></div>

<p class="I2">html中需要滚动的的元素加属性如：p="dir:1,speed:20,stay:3000,n:1"
dir:代表滚动的方向：1上，否则向左(以后可以再扩展)
speed:用来指示模块的滚动速度，单位为毫秒，值越小，滚动速度越快，值越大，则滚动速度越慢
stay:表示滚动暂停多少毫秒时恢复滚动
n:滚动完成后，次需要向最后移入n个元素，默认为1</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />rolls("LMar","TMar");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<p class="I2">html中需要滚动的的元素加属性如：p="dir:1,speed:20,stay:3000,n:1"
dir:代表滚动的方向：1上，否则向左(以后可以再扩展)
speed:用来指示模块的滚动速度，单位为毫秒，值越小，滚动速度越快，值越大，则滚动速度越慢
stay:表示滚动暂停多少毫秒时恢复滚动
n:滚动完成后，次需要向最后移入n个元素，默认为1</p>
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
rolls("LMar","TMar");
window.Cm=4;
</asp:Content>