<%@ Page Title="显示隐藏组件" Language="C#" CodeFile="ShowHide.aspx.cs" Inherits="ShowHide" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">ShowHide</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现各种方式的显示和隐藏</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>浮动窗体</a>
<a>关键Css规则</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="I2">
<p>窗体浮动，在Css中有个浮动固定定位的一个属性：position:fixed; 。然而IE6及以下版本不支持这个属性，那么，我们针对IE6及以下版本写了一个函数，就是说，如果客户浏览器为IE6及以下版本，则会运行此函数，否则，该函数什么都不做，自动返回。</p>
<p>该函数有有三个参数，第一个参数为要浮动div或任意标签的ID，第二个参数为浮动块的水平坐标，可以相对于窗口左边或右边，要相对于左边时，加前缀“L”，其后为相对于左边的像素距离，要相对于右边时，加前缀“R”，其后为相对于右边的像素距离，第三个参数为数值（不是字符串），用于指定相对于窗体底部的定位的像素值（由于IE6的Bug，Top无效）。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />new Fixed("Fx1","R0",0);<br />&lt;/script&gt;</pre>
</dd>
<dd><pre>
.Fx
{
	position:fixed;
	_position:absolute;  /*IE6及更低版本;*/
}
.RB
{	
    right:0px;
    bottom:0px;  /*最好指定bottom,而不是top*/
}
.LC
{
    left:0px;
    bottom:300px;  /*最好指定bottom,而不是top*/
}</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
<p id="Fx3" class="Fx LB"><a target="_blank" href="http://my.cnfol.com">空间</a>|<a id="popWindow" href="#" onclick="C.Show('Fx232')">动态</a>|<a href="#">Top</a></p>
<div id="Fx232" class="Fx News"><img alt="" src="/Images/Pfd.jpg" /><b><a class="Fc" href="#" onclick="C.Hide('Fx232')"></a><a href="####"></a><i>上午好!</i><i>e哥</i><span><em>金 币:<i>0</i></em><em class="Jf">可用积分:<i>0</i></em></span></b>
<h6>好友动态</h6>
<p><i>25分钟前</i><a href="####">投机少爷</a><span>发表微博：</span><a href="#" class="W2">明天600978、002028必涨停</a></p>
<p><i>25分钟前</i><a href="####">投机少爷</a><span>发表微博：</span><a href="#" class="W2">明天600978、002028必涨停</a></p>
<p><i>25分钟前</i><a href="####">投机少爷</a><span>发表微博：</span><a href="#" class="W2">明天600978、002028必涨停</a></p>
</div>
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" runat="server">window.Cm=10;</asp:Content>