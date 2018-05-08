<%@ Page Title="正、负计时器" Language="C#" MasterPageFile="~/Pages/Demos.master" AutoEventWireup="true" CodeFile="Timers.aspx.cs" Inherits="Pages_Timers" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Timers</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">实现正、负计时器功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server"><a href="">正、负计时器</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd>
<%--<span id="RGp15"></span>
<input type="button" id="Gp15" value="倒计时15秒" />--%>
    <a  id="Gp15">计时15秒</a><br /><a  id="Ud10">正计时10秒</a><br /><a  id="Gp5">倒计时5秒</a><br />
<%--<span id="RUd10"></span>
<input type="button" id="Ud10" value="正计时10秒" />
<span id="RGp5"></span>
<input type="button" id="Gp5" value="倒计时5秒" />--%>
<p>Timers组件用来实现正、倒计时器功能。默认为倒计时模式，需要正计时，元素id首字母须为"u"；元素id从第三个字符开始至结尾，是组件预置的计时数值；组件还预置了计时时的样式名为"ti"；正在计时时对象的status属性是true,非计时情况下status属性为false，正在计时状态下，对象原来的click中件暂时失效，待计时完成后可以继续点击</p>

</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Timers.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">
window.Cm=16;
Timers("Gp15", "Gp5", "Ud10");
</asp:Content>


