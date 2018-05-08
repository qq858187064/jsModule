<%@ Page Title="通用编辑器" Language="C#" %>
<asp:Content ID="Content8" ContentPlaceHolderID="hd" Runat="Server">
    <link href="../App_Themes/Black/edit.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">edit</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">通用编辑器</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server"><a href="#">编辑器</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd id="ed">
    <a></a>
<%--<form action="/Hs/Handler.ashx" method="post" enctype= "multipart/form-data" id="ImI" target="Hi">

<input name="Fu" id="Fu" type="file" onchange="UpImg()" />
<iframe name='Hi' id="Hi" style="display:none"></iframe>   
</form>
<h3 id="Rst"></h3><img id="Tmp" style="width:540px;" />--%>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/edit.js"></script>
<script type="text/javascript" charset="utf-8">
    edit("ed");
    //function UpImg()
    //{
    //    var Img = C.G("Tmp"),
    //    Rst = C.G("Rst");
    //    C.G("ImI").submit();
    //    setTimeout(function ()
    //    {
    //        Img.src=window.Hi.document.body.firstChild.innerHTML;
    //    }, 800);
    //}
</script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=9;</asp:Content>