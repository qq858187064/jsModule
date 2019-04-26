<%@ Page Title="图片展示组件" Language="C#" CodeFile="Imgs.aspx.cs" Inherits="ImgsM" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Imgs</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">所有图片展示模块功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>简单结构sw</a>
<a>图片展示</a>
<a>自动切换</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
    <dd>
        <!--
<img src="/Images/Iswa/BnB.jpg" style="width: 422px;position: absolute; width: 488px; height: 222px;  filter: url(#blur);  -webkit-filter: blur(2px); -moz-filter: blur(2px); -ms-filter: blur(2px); filter: blur(2px);opacity: 0.9;" />
  -->          <div class="sw sw3" id="sw4" p="ef:3,efm:700,ms:5" style="margin-bottom:999px;">
        <a class="pro"></a>
        <p>
            <a><img src="/Images/Iswa/BnB.jpg" /></a><a><img src="/Images/Iswa/BnC.jpg" /></a><a><img src="/Images/Iswa/BnD.jpg" /></a>
            <a><img src="/Images/Iswa/BnF.jpg" /></a>
        </p>
        <a class="nxt"></a>
    </div>

     <div class="sw sw2" id="sw1" p="ef:1,ms:5,at:1000,dir:-1">
        <a class="pro"></a>
        <p>
            <a id="21">1<img src="/Images/Iswa/BnB.jpg" /></a>
            <a id="22">2<img src="/Images/Iswa/BnC.jpg" /></a>
            <a id="23">3<img src="/Images/Iswa/BnD.jpg" /></a>
            <a id="24">4<img src="/Images/Iswa/BnF.jpg" /></a>
        </p>
        <a class="nxt"></a>
    </div>
    <div class="sw sw4" id="sw2" p="ef:1,ms:1,at:4000,bn:'cbu'">
        <a class="pro"></a>
        <p>
            <a id="1"><img src="/Images/Iswa/BnB.jpg" /></a>
            <a id="2"><img src="/Images/Iswa/BnC.jpg" /></a>
            <a id="3"><img src="/Images/Iswa/BnD.jpg" /></a>
            <a id="4"><img src="/Images/Iswa/BnF.jpg" /></a>
        </p><i></i><i></i><i></i><i></i>
        <a class="nxt"></a>
    </div>
    <hr />
    <div class="sw sw3" id="sw3" p="ef:2,ms:5">
        <a class="pro"></a>
        <p>
            <a id="5"><img src="/Images/Iswa/BnB.jpg" /></a>
            <a id="6"><img src="/Images/Iswa/BnC.jpg" /></a>
            <a id="7"><img src="/Images/Iswa/BnD.jpg" /></a>
            <a id="8"><img src="/Images/Iswa/BnF.jpg" /></a>
        </p>
        <a class="nxt"></a>
    </div>
<br />
该组件用来实现所有图像切换组件，它实质上还是我们Tabs组件的另一个表现形式，ID字符串前三个字符是预留的，第一个字符用来标识响应事件的类型： 为字母“C”时，代表将响应事件“Click”，也就是鼠标点击时切换，为字母“M”时，代表将响应事件“MouseOver”，也就是鼠标点击时切换；第二个字符用来标识默认显示内容块的序号，为1时，默认显示第1个内容块，为2时，显示第二个内容块，以此类推。第三个字符用来指定以图片导航，还是以链接导航，为a时，以链接导航，否则以图片导航。
当前选项卡切换块的ID为“M1a”，第一个字符为“M”，代表将响应事件“Mouseover”，也就是鼠标滑过时切换，第二个字符为数字1，则代表默认显示第1个块的内容，第三个字符为A，则表示以链接为导航。
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("M1a");<br />&lt;/script&gt;</pre>
</dd>
<dd><dl id="M1a" class="Imb">
<%--<dd><a href="#" class="Txt">AA图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnB.jpg" /></a></dd>
<dd><a href="#" class="Txt">BB图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnC.jpg" /></a></dd>
<dd><a href="#" class="Txt">CC图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnD.jpg" /></a></dd>
<dd><a href="#" class="Txt">DD图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnF.jpg" /></a></dd>--%>

<%--<dt class=""></dt>--%>

<dd><a href="#" class="Txt"><img src="/Images/Iswa/BnB.jpg" />AA图片标题图片标题图片标题图片标题</a></dd>
<dd><a href="#" class="Txt"><img src="/Images/Iswa/BnC.jpg" />BB图片标题图片标题图片标题图片标题</a></dd>
<dd><a href="#" class="Txt"><img src="/Images/Iswa/BnD.jpg" />CC图片标题图片标题图片标题图片标题</a></dd>
<dd><a href="#" class="Txt"><img src="/Images/Iswa/BnF.jpg" />DD图片标题图片标题图片标题图片标题</a></dd>
<dt class="Nav Bg"><a href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a></dt>



</dl><br />
该组件用来实现所有图像切换组件，它实质上还是我们Tabs组件的另一个表现形式，ID字符串前三个字符是预留的，第一个字符用来标识响应事件的类型： 为字母“C”时，代表将响应事件“Click”，也就是鼠标点击时切换，为字母“M”时，代表将响应事件“MouseOver”，也就是鼠标点击时切换；第二个字符用来标识默认显示内容块的序号，为1时，默认显示第1个内容块，为2时，显示第二个内容块，以此类推。第三个字符用来指定以图片导航，还是以链接导航，为a时，以链接导航，否则以图片导航。
当前选项卡切换块的ID为“M1a”，第一个字符为“M”，代表将响应事件“Mouseover”，也就是鼠标滑过时切换，第二个字符为数字1，则代表默认显示第1个块的内容，第三个字符为A，则表示以链接为导航。
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("M1a");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<dl id="C3aB_1000" class="Imb">
<dd><a href="#" class="Txt">AA图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnB.jpg" /></a></dd>
<dd><a href="#" class="Txt">BB图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnC.jpg" /></a></dd>
<dd style="display:block"><a href="#" class="Txt">CC图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnD.jpg" /></a></dd>
<dd><a href="#" class="Txt">DD图片标题图片标题图片标题图片标题</a><a href="#"><img src="/Images/Iswa/BnF.jpg" /></a></dd>
<dt class="Nav"><a href="####">1</a><a href="####">2</a><a href="####">3</a><a href="####">4</a></dt>
<dt class="Bg"></dt>
</dl><br />
该组件用来实现所有图像切换组件，它实质上还是我们Tabs组件的另一个表现形式，ID字符串前三个字符是预留的，第一个字符用来标识响应事件的类型： 为字母“C”时，代表将响应事件“Click”，也就是鼠标点击时切换，为字母“M”时，代表将响应事件“MouseOver”，也就是鼠标点击时切换；第二个字符用来标识默认显示内容块的序号，为1时，默认显示第1个内容块，为2时，显示第二个内容块，以此类推。第三个字符用来指定以图片导航，还是以链接导航，为a时，以链接导航，否则以图片导航。
当前选项卡切换块的ID为“C3aB_1000”，第一个字符为“M”，代表将响应事件“Mouseover”，也就是鼠标滑过时切换，第二个字符为数字1，则代表默认显示第1个块的内容，第三个字符为A，则表示以链接为导航，ID中还包含“_1000”，ID中的下划线“_”表示该组件自动切换，后面的数字“1000”，则表示每1000毫秒切换一次。
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Tabs("C3aB_1000");<br />&lt;/script&gt;</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
    <script src="../Js/sw.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="TabId" runat="server">"M1a","C3aB_1000",</asp:Content>
<asp:Content ID="ContentRunJs" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=5;sw("sw1","sw2", "sw3","sw4");</asp:Content>