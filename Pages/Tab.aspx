<%@ Page Language="C#" CodeFile="Tab.aspx.cs" Inherits="ImgsM" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Imgs</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">所有图片展示模块功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>图片展示</a>
<a>自动切换</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd>
<%--<div class="SI">
<a href="#"><img src="Images/Iswa/BnB.jpg" /></a>
<a href="#"><img src="Images/Iswa/BnC.jpg" /></a>
<a href="#"><img src="Images/Iswa/BnD.jpg" /></a>
<a href="#"><img src="Images/Iswa/BnF.jpg" /></a>
<i></i>
<b><a href="#">1</a><a href="#" class="CM">2</a><a href="#">3</a><a href="#">4</a></b>
</div>
--%>
<dl id="M1aA" class="Imb">
<dd><a href="#" class="Txt">AA图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnB.jpg" /></a></dd>
<dd><a href="#" class="Txt">BB图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnC.jpg" /></a></dd>
<dd><a href="#" class="Txt">CC图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnD.jpg" /></a></dd>
<dd><a href="#" class="Txt">DD图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnF.jpg" /></a></dd>
<dt class="Nav"><a href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a></dt>
<dt class="Bg"></dt>
</dl>
<br />
可自动切换：
<dl id="C3aB_1500" class="Imb">
<dd><a href="#" class="Txt">AA图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnB.jpg" /></a></dd>
<dd><a href="#" class="Txt">BB图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnC.jpg" /></a></dd>
<dd style="display:block"><a href="#" class="Txt">CC图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnD.jpg" /></a></dd>
<dd><a href="#" class="Txt">DD图片标题图片标题图片标题图片标题</a><a href="#"><img src="Images/Iswa/BnF.jpg" /></a></dd>
<dt class="Nav"><a href="####">1</a><a href="####">2</a><a href="####">3</a><a href="####">4</a></dt>
<dt class="Bg"></dt>
</dl>

<%--<dl id="C1iB" class="Ima">
<dd><a href="#"><img src="Images/Environment/1.jpg" /></a></dd>
<dd><a href="#"><img src="Images/Environment/2.jpg" /></a></dd>
<dd><a href="#"><img src="Images/Environment/3.jpg" /></a></dd>
<dd><a href="#"><img src="Images/Environment/4.jpg" /></a></dd>
<dd><a href="#"><img src="Images/Environment/5.jpg" /></a></dd>
<dt><a href="####" class="L" title="上一组"></a><a href="####" class="R" title="下一组"></a>
<img class="Crt" src="/Images/Environment/Thumbnail/1.jpg" /><img src="/Images/Environment/Thumbnail/2.jpg" /><img src="/Images/Environment/Thumbnail/3.jpg" /><img src="/Images/Environment/Thumbnail/4.jpg" /><img src="/Images/Environment/Thumbnail/5.jpg" /></dt>
</dl>--%>
</dd>
<dd>fdafas</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
<%--<script type="text/javascript" src="/Js/Imgs.js"></script>--%>
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="TabId" runat="server">"M1aA","C3aB_1500",</asp:Content>
<asp:Content ID="ContentRunJs" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=5;</asp:Content>