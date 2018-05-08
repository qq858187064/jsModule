<%@ Page Title="树形菜单组件" Language="C#" CodeFile="Trees.aspx.cs" Inherits="Trees" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">
    sg</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">
   实现placeholder的功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server">
    <a>树形菜单</a>
    <a>关键Css规则</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server"><dd>sg组件用来实现placeholder的功能，也就是给输入框加上默认文字，如果id中包含下划线"_"，失去焦点(onblur事件)时如果输入框值为空"",则将输入框的值设为其原始值。
<input id="sg1" placeholder="默认文字" />
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />sg("Ci1","M2");<br />&lt;/script&gt;</pre>

    </dd>
    <dd><pre>以下是Css的关键属性，其它可选属性省略，大家可到Css文件中找到完整Css规则

</pre></dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server" />
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" runat="Server">
<script type="text/javascript" src="/Js/sg.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" runat="Server">window.Cm=20;sg("sg1");</asp:Content>
