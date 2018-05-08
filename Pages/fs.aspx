<%@ Page  Title="全屏组件" Language="C#" %>
<script runat="server"></script>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">fullScreen</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现元素全屏/恢复功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server"><a>全屏/恢复</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">

<dd>
<div id="Pop" class="DW Bar"><h4 id="PopBar"><a href="####" class="Cls mm" id="Cls" p="t:'Pop'"></a>全屏/恢复组件</h4>
    <div class="Ctt">fs组件提供了一个通用的全屏/恢复展示功能，接收任意数量的参数，可以是元素对象或元素ID，组件预置了一个名为"fs"的样式，用于定义全屏时的外观，调用时类似于本页这样：<br />fs("Pop")。</div>
</div>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" Runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" charset="utf-8" src="../Js/fs.js"></script>
    <script type="text/javascript" charset="utf-8">
        fs("Cls");
        window.Cm = 19;
</script>

</asp:Content>

