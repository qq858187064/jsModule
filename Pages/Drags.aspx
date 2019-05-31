<%@ Page Title="拖拽组件" Language="C#" CodeFile="Drags.aspx.cs" Inherits="Drags" %>
<asp:Content runat="server" ContentPlaceHolderID="Hd5">Drag</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="Descr">实现通用拖拽组件的功能类</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>元素</a>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="pw">
<b id="sb" style="display:block;width:8px;height:8px;background:#f60;position: absolute;"></b>
<div id="Pop" class="DW Bar mt9"><h4 id="PopBar"><a href="####" class="Cls" id="Cls"></a>Pop元素的拖拽元素的手柄</h4>
    <div class="Ctt">Drags类提供了一个通用的拖拽功能，接收任意个数的参数，可以是元素对象或元素ID，元素的第一个子节点会是拖拽元素的手柄，如果希望整个元素作为手柄，元素ID的第一个字符应该为"s"，调用时类似于本页这样：<br />Drags("Pop", "spo")。
<br /><a href="javascript:void(0)" class="Btn">确&nbsp;定</a></div>
</div>
<div id="spo" class="DW Bar s" style="margin-top:255px;"><h4 id="PoBar"><a href="####" class="Cls" id="A1"></a>Po元素的拖拽元素的手柄</h4>
    <div class="Ctt">Drags类提供了一个通用的拖拽功能，接收任意个数的参数，可以是元素对象或元素ID，元素的第一个子节点会是拖拽元素的手柄，调用时类似于本页这样：<br />Drags("Pop", "spo")。
<br /><a href="javascript:void(0)" class="Btn">确&nbsp;定</a></div>
</div>
<div id="AA" class="R" style="width:166px;"></div>
</dd>
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Drags.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=12;Drags("Pop", "spo","sb");</asp:Content>