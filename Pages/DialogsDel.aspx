<%@ Page Title="弹出窗组件"  Language="C#"%>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Dialogs</asp:Content>
<asp:Content ID="Content5" runat="server" ContentPlaceHolderID="Descr">实现各种弹出窗口的功能类</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MenuC" Runat="Server">
<a href="javascript:void(0)" onclick="Dialogs('WBg','Pop');">锁屏弹出窗口</a>
<a href="javascript:void(0)" onclick="Dialogs('Pop');">常规弹出窗口</a>
<a href="javascript:void(0)" onclick="Dialogs('WBg','AC1A');">定时关闭弹出窗口</a>
<a href="javascript:void(0)">模块关键Css规则</a>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainC" Runat="Server">
<dd>
<p class="I2">Dialogs模块是一个用来构造任意弹出窗体的，无限扩展的功能类，其外观和内容完全由调用者作主：在html代码中写入内容，在Css文件中控制外观，调用时只需按如下方代码调用，当然，调用时请传入背景元素和内容元素的ID，如本模型的背景元素div的id为“WBg”，内容元素div的id为“Pop”，则调用时代码为：Dialogs("WBg","Pop");，如果您还需要在其它地方调用关闭弹出窗的方法，可以像这样调用：Dialogs.Close(), 多重弹出时，可为该方法指定参数，为欲关闭弹出窗的ID，如：Dialogs.Close("Pop"),则只会关闭ID为"Pop"的弹出窗。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Dialogs("WBg","Pop");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<p class="I2">Dialogs模块是一个用来构造任意弹出窗体的，无限扩展的功能类，其外观和内容完全由调用者作主：在html代码中写入内容，在Css文件中控制外观，调用时只需按如下方代码调用，当然，调用时请内容元素的ID，如本模型不需要锁屏，内容元素div的id为“Pop”，则调用时只需传入内容元素的ID：Dialogs("Pop");，如果您还需要在其它地方调用关闭弹出窗的方法，可以像这样调用：Dialogs.Close()，多重弹出时，可为该方法指定参数，为欲关闭弹出窗的ID，如：Dialogs.Close("Pop"),则只会关闭ID为"Pop"的弹出窗。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Dialogs("Pop");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<p class="I2">Dialogs模块是一个用来构造任意弹出窗体的，无限扩展的功能类，其外观和内容完全由调用者作主：在html代码中写入内容，在Css文件中控制外观，调用时只需按如下方代码调用，当然，调用时请内容元素的ID，如本模型不需要锁屏，内容元素div的id为“Pop”，则调用时只需传入内容元素的ID：Dialogs("Pop");，如果您还需要在其它地方调用关闭弹出窗的方法，可以像这样调用：Dialogs.Close()，多重弹出时，可为该方法指定参数，为欲关闭弹出窗的ID，如：Dialogs.Close("Pop"),则只会关闭ID为"Pop"的弹出窗。需要定时关闭的弹出窗，在设置弹出元素ID时，请以"AC"前缀，并将时间间隔跟在"AC"后，如"AC2"则表示在2秒钟后会自己关闭。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Dialogs("AC2xxx");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<h6>以下是的关键属性，其它可选属性省略，大家可到Css文件中找到完整Css:</h6><pre>
.DBg,.DW{
    position:absolute;
    display:none;
}
.DBg{   /***** 锁屏div背景： *****/
    left:0;
    top:0;
}
.DW{    /***** 对话框： *****/
    width:360px;
    height:240px;
}
.DW h4{    /***** 对话框标题： *****/
    background:#ddd;
    font:600 14px/20px "";
    padding:6px 10px 6px 10px;
    border:1px solid #eee;
}
.DW h4 a.Cls{    /***** 对话框标题右方的关闭铵钮： *****/
    display:block;
    width:17px;
    height:16px;
    background:url(/Images/Icons.gif) no-repeat 4px -400px;
    float:right;
}
.Ctt{	padding:10px; }    /***** 对话框内容： *****/ </pre></dd>
</asp:Content>
<asp:Content ID="Conten6" ContentPlaceHolderID="FBHtml" Runat="Server">
<%--<div id="WBg" class="DBg"></div>--%>
<div id="PopBg" class="DBg"></div>
<div id="Pop" class="DW">
    <h4><a href="javascript:Dialogs.Close()" class="Cls" id="Cls"></a>A弹出窗标题文字</h4>
    <div class="Ctt">Dialogs类提供了一个弹出窗的功能，其内容和外观由调用者在Html和Css中自由控制，如果您在完成了一些逻辑之后希望关闭该弹出窗，可以像这样调用模块的关闭方法：Dialogs.Close()。
<br /><a href="javascript:Dialogs.Close()" class="Btn">关&nbsp;闭</a></div>
</div>
<div id="AC1A" class="DW">
    <h4><a href="javascript:Dialogs.Close('AC1A')" class="Cls" name="Cls" id="A1"></a>B弹出窗标题文字</h4>
    <div class="Ctt">Dialogs类提供了一个弹出窗的功能，其内容和外观由调用者在Html和Css中自由控制，如果您在完成了一些逻辑之后希望关闭该弹出窗，可以像这样调用模块的关闭方法：Dialogs.Close()。
<br /><a href="javascript:Dialogs.Close('AC1A')" class="Btn">关&nbsp;闭</a></div>
</div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Dialogs.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">
window.Cm=2;
</asp:Content>