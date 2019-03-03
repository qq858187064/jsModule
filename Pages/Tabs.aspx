<%@ Page Title="项卡切换组件" Language="C#" CodeFile="Tabs.aspx.cs" Inherits="_Tabs" %>
<asp:Content runat="server" ContentPlaceHolderID="Hd5">Tabs</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="Descr">实现各种选项卡切换的功能类</asp:Content>
<asp:Content ID="Content2" runat="server" ContentPlaceHolderID="MenuC">
    <a href="#">鼠标滑过切换</a>
    <a href="#">鼠标点击切换</a>
    <a href="#">选项卡定时切换</a>
    <a href="#">模块关键Css规则</a>
</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="MainC">
    <dd>
        <dl id="M2XX" class="Cp"><dt><a href="#">选项卡一</a><a href="#" class="cm">选项卡二</a><a href="#">选项卡三</a></dt>
        <dd>我是选项卡一的内容<br />
        我是选项卡一的内容<br />我是选项卡一的内容<br />
        我是选项卡一的内容<br />我是选项卡一的内容<br />
        我是选项卡一的内容<br />我是选项卡一的内容<br />
        我是选项卡一的内容</dd>
        <dd>ID字符串前两个字符是预留的，第一个字符用来标识响应事件的类型：<br />
    为字母“C”时，代表将响应事件“Click”，也就是鼠标点击时切换；<br />
    为字母“M”时，代表将响应事件“MouseOver”，也就是鼠标点击时切换；<br />
    第二个字符用来标识默认显示内容块的序号，为0时，内容块为伸缩显示，为1时，默认显示第1个内容块，为2时，显示第二个内容块，以此类推......<br />
    当前选项卡切换块的ID为“M2PgMgr”<br />
    第一个字符为“M”，代表将响应事件“Mouseover”，也就是鼠标滑过时切换<br />
    第二个字符为数字2，则代表默认显示第2个块的内容。
    <h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("M2XX");<br />&lt;/script&gt;</pre>
    </dd>
        <dd>我是选项卡三的内容<br />
        我是选项卡三的内容<br />我是选项卡三的内容<br />
        我是选项卡三的内容<br />我是选项卡三的内容<br />
        我是选项卡三的内容<br />我是选项卡三的内容<br />
        我是选项卡三的内容</dd>
        </dl>
    </dd>
    <dd>
        <dl id="C1PgMgr" class="Cp"><dt><a href="#">选项卡四</a><a href="#">选项卡五</a><a href="#">选项卡六</a></dt>
        <dd>当前选项卡模块切换块的ID为“C1PgMgr”<br />
    第一个字符为“C”，代表将响应事件“Click”，也就是鼠标点击时切换;<br />
    第二个字符为数字1，则代表默认显示第1个块的内容。    <h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("C1PgMgr");<br />&lt;/script&gt;</pre>

</dd>
        <dd>我是选项卡五的内容<br />我是选项卡五的内容<br />我是选项卡五的内容</dd>
        <dd>我是选项卡六的内容<br />我是选项卡六的内容<br />我是选项卡六的内容</dd>
        </dl>
    </dd>
    <dd>
        <dl id="M1_2000" class="Cp"><dt><a href="#">选项卡七</a><a href="#">选项卡八</a><a href="#">选项卡九</a></dt>
        <dd>我是选项卡七的内容:<br />当前选项卡模块切换块的ID为“M1_2000”，<br />其后缀_2000表示自动切换，且切换间隔为2000毫秒。
</dd>
        <dd>我是选项卡八的内容<br />我是选项卡八的内容<br />我是选项卡八的内容</dd>
        <dd>我是选项卡九的内容<br />我是选项卡九的内容<br />我是选项卡九的内容</dd>

        </dl>
        <h6>定时切换模式:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("M1_2000");<br />&lt;/script&gt;</pre>
    </dd>
    <dd>
        <h6>以下是Css的关键属性，其它可选属性省略，大家可到Css文件中找到完整Css规则:</h6>
<pre>
dl.Cp,
dl.Ct
{
    display:none;
}
// cm样式是切换选项卡中，用来定义当前菜单的外观
dl.Cp dt a.cm 
{
    background:#fff;
    color:#cb5931;
}
dl.Ct dt a.cm
{
    background:#ddd;
    color:#06c;
}</pre></dd>
</asp:Content>
<asp:Content runat="server" ID="ContentEd" ContentPlaceHolderID="TabId">"M2XX", "C1PgMgr","M1_2000", </asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=1;</asp:Content>