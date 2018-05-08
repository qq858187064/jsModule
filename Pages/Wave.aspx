<%@ Page Title="波浪式切换组件" Language="C#" CodeFile="Wave.aspx.cs" Inherits="Wave" %>
<asp:Content runat="server" ContentPlaceHolderID="Hd5">Wave</asp:Content>
<asp:Content runat="server" ContentPlaceHolderID="Descr">实现波浪式切换显示的功能类</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a href="#">等高切换显示</a>
<a href="#">任意高度切换</a>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainC" Runat="Server">
<dd id="ma0" class="finEyeC I2">
            	<a href="####">
                	<span><em>[06-29]</em>媒体曝月饼券巨额灰色利益链(组图)</span>
                	<img src="/Images/Activities/8.jpg" alt="" />
                    <b>拉萨建成首个污水处理厂 耗资1.2亿</b>
                    <p>拉萨首个污水处理厂竣工并试运行，从而结束了拉萨没有现代化污水处理厂的历史。该污水处理厂总投资1.22亿元，日处理污水能力达到5万吨…</p>
                    <i>详情</i>
                </a>
                <a href="####">
                	<span><em>[06-29]</em>媒体曝月饼券巨额灰色利益链(组图)</span>
                	<img src="/Images/Activities/8.jpg" alt="" />
                    <b>拉萨建成首个污水处理厂 耗资1.2亿</b>
                    <p>拉萨首个污水处理厂竣工并试运行，从而结束了拉萨没有现代化污水处理厂的历史。该污水处理厂总投资1.22亿元，日处理污水能力达到5万吨…</p>
                    <i>详情</i>
                </a>
                <a href="####">
                	<span><em>[06-29]</em>媒体曝月饼券巨额灰色利益链(组图)</span>
                	<img src="/Images/Activities/8.jpg" alt="" />
                    <b>拉萨建成首个污水处理厂 耗资1.2亿</b>
                    <p>拉萨首个污水处理厂竣工并试运行，从而结束了拉萨没有现代化污水处理厂的历史。该污水处理厂总投资1.22亿元，日处理污水能力达到5万吨…</p>
                    <i>详情</i>
                </a>
                <a href="####">
                	<span><em>[06-29]</em>媒体曝月饼券巨额灰色利益链(组图)</span>
                	<img src="/Images/Activities/8.jpg" alt="" />
                    <b>拉萨建成首个污水处理厂 耗资1.2亿</b>
                    <p>拉萨首个污水处理厂竣工并试运行，从而结束了拉萨没有现代化污水处理厂的历史。该污水处理厂总投资1.22亿元，日处理污水能力达到5万吨…</p>
                    <i>详情</i>
                </a>
    <p>Ware组件用来实现等高型波浪式滑动显示效果，组件ID的前3个字符是组件预置的：如果ID的第一个字符为“c”，则响应鼠标的单击事件，否则响应鼠标的滑过事件；
        ID第二个字符用来指定元素中欲切换元素的标签名(仅支持单字符元素)，ID第三个字符用来指定默认显示的子元素的索引(从0开始)。</p>
    <h6>该组件调用代码:</h6>
<pre>该组件调用Wave.js
    &lt;script type="text/javascript"&gt;<br />Wave("ma0");<br />&lt;/script&gt;</pre>
</dd>
<dd>
<div id="M1A" class="Wa">
<a href="####" class="CM">1银行类工具（存款）</a>
<div style="display:block"><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
<a href="####">2银行类工具（存款）</a>
<div><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
<a href="####">3银行类工具（存款）</a>
<div><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
</div><hr />
<div id="C2B" class="Wa">
<a href="####" class="CM">4银行类工具（存款）</a>
<div style="display:block"><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
<a href="####">5银行类工具（存款）</a>
<div><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
<a href="####">6银行类工具（存款）</a>
<div><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
<a href="####">7银行类工具（存款）</a>
<div><a href="#">通知存款计算器</a><a href="#">通知存款计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a><a href="#">整（零）存整取计算器</a></div>
</div>
        <h6>该组件调用代码:</h6>
<pre>该组件调用Wa.js
    &lt;script type="text/javascript"&gt;<br /> Wa("M1A","C2B");<br />&lt;/script&gt;</pre>

</dd>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Wave.js"></script>
<script type="text/javascript" src="/Js/Wa.js"></script>
</asp:Content>
<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="RunJs">
    Wave("ma0");
    Wa("M1A","C2B");
    window.Cm=11;
</asp:Content>