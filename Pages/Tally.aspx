<%@ Page Title="输入字符数统记组件" Language="C#" CodeFile="Tally.aspx.cs" Inherits="Tally" %>
<asp:Content runat="server" ContentPlaceHolderID="Hd5">Tally</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="Descr">实现通用计算输入字符数的功能类</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainC" Runat="Server">
<dd>
<div>您还可以输入<b id="RIpt200">200</b>个字符</div>
<textarea id="Ipt200" rows="3"></textarea>

<div>您还可以输入<b id="RIpt100">100</b>个字符</div>
<textarea id="Ipt100"></textarea>

<div>您还可以输入<b id="RIpt50">50</b>个字符</div>
<textarea id="Ipt50" style="height:200px"></textarea>
</dd>
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Tally.js"></script>
<script type="text/javascript">
    Tally("Ipt200","Ipt100","Ipt50");
</script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=15;</asp:Content>