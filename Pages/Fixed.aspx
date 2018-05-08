<%@ Page Title="浮动窗组件" Language="C#" CodeFile="Fixed.aspx.cs" Inherits="Fixed" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Fixed</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现任意位置的浮动窗体</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>浮动窗体</a>
<a>关键Css规则</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="I2">
<p>窗体浮动，在Css中有个浮动固定定位的一个属性：position:fixed; 。然而IE6及以下版本不支持这个属性，那么，我们针对IE6及以下版本写了一个函数，就是说，如果客户浏览器为IE6及以下版本，则会运行此函数，否则，该函数什么都不做，自动返回。</p>
<p>该函数有有三个参数，第一个参数为要浮动div或任意标签的ID，id的最后一个字符如果为r，则支持滚动效果，第二个参数为浮动块的水平坐标，可以相对于窗口左边或右边，要相对于左边时，加前缀“L”，其后为相对于左边的像素距离，要相对于右边时，加后缀“R”，其后为相对于右边的像素距离，第三个参数为数值（不是字符串）。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />
Fixed("Fx1","R0","B0");
Fixed("Fx2","L0","T240");
Fixed("FxR","L0","B0");
<br />&lt;/script&gt;</pre>
<div style="height:2222px;"></div>
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
}</pre></dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
<div id="Fx1" class="Fx RB"></div>
<div id="Fx2" class="Fx LC"></div>
<div id="FxR" class="Fx LC lt"></div>
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">

    <script src="/Js/Fixed.js" type="text/javascript"></script>
    <script type="text/javascript">
    Fixed("Fx1","R0","B0");
    Fixed("Fx2","L0","T240");
    Fixed("FxR","L0","B0");
    </script>





</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=3;</asp:Content>