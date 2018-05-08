<%@ Page Title="省市区三级联动" Language="C#" MasterPageFile="~/Pages/Demos.master" %>

<script runat="server">

</script>

<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Selects
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现省市区三级联动
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server"><a href="">省市区三级联动</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd>
    <select id="aa_bb_cc"><option>请选择</option></select>
    <select id="bb"><option>请选择</option></select>
    <select id="cc"><option>请选择</option></select>
<p>Selects组件用来实现省市区三级联动，其唯一的约定是将需要联动的select元素id用下划线连起来传给组件。</p>
    <h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;
    slct("aa_bb_cc");
&lt;/script&gt;</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" Runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" Runat="Server">
    <script type="text/javascript" src="../Js/cts.js"></script>
    <script type="text/javascript" src="../Js/slct.js"></script>
</asp:Content>
<asp:Content ID="Content8" ContentPlaceHolderID="RunJs" Runat="Server">
window.Cm=18;
slct("aa_bb_cc");
</asp:Content>


