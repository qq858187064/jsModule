<%@ Page Title="日历组件" Language="C#" CodeFile="Cal.aspx.cs" Inherits="Pages_Calendar"%>
<%--<%@ Register Assembly="Cs" Namespace="Cs" TagPrefix="q"%>--%>
<asp:content id="Content1" contentplaceholderid="Hd5" runat="Server">Calendar</asp:content>
<asp:content id="Content2" contentplaceholderid="Descr" runat="Server">实现各种日历通用组件</asp:content>
<asp:content id="Content3" contentplaceholderid="MenuC" runat="Server">
    <a>日历组件 </a>
</asp:content>
<asp:content id="Content4" contentplaceholderid="MainC" runat="Server">
    <dd><%--<q:Ca runat="server" />--%>
 <p id="Sc0" class="Ps Mb9" p="no:[5,15,25]"><a class="Py"></a><a class="Pm"></a><b class="Y">2012</b>年<b class="M">11</b>月<a class="Nm"></a><a class="Ny"></a><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></p> 
<p id="Sc2" class="Ps Abs" p="a:'Ipt1_Ipt20,Ipt20,Ipt1_Ipt30,Ipt30'"><a class="Py"></a><a class="Pm"></a><b class="Y">2012</b>年<b class="M">11</b>月<a class="Nm"></a><a class="Ny"></a><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></p>
<div id="Sc3" class="Cs Ps" p="c:3,no:[0]"><a class="Pm"></a><a class="Nm"></a><br /><p><b class="Y"></b>年<b class="M">11</b>月<br /><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></p></div>
<div id="Sc4" class="Cs Ps Abs" p="a:'Ipt_Ipt0,Ipt0',c:3"><a class="Pm"></a><a class="Nm"></a><p><b class="Y">2012</b>年<b class="M">11</b>月<br /><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></p></div>
<%-- <p id="Sc3" class="Ps Abs" p="a:'Ipt3',c:3"><a class="Py"></a><a class="Pm"></a><b class="Y">2012</b>年<b class="M">11</b>月<a class="Nm"></a><a class="Ny"></a><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></p> value="2018/03"  value="2017/3"--%>
<input type="text" class="CldBg CldT" id="Ipt1_Ipt20"/>
<input type="text" class="CldBg CldT" id="Ipt20"/>

<input type="text" class="CldBg CldT" id="Ipt1_Ipt30"/>
<input type="text" class="CldBg CldT" id="Ipt30"/>

<input type="text" class="CldBg CldT" style="margin-left:20px;" id="Ipt_Ipt0"/>
<input type="text" class="CldBg CldT" style="margin-left:20px;" id="Ipt0" />
 <p class="Mt9">Cal是用来实现日历功能的通用组件,预置的各参数如下:</p>
<pre>
    /* 
   input的
    ymdhMsw分别代表年、月、日、时、分、秒、星期;
    r指输出选中日期结果元素的Id，默认值为当前元素
    max表示在某月中，允许选中的最大值(含)
    min表示在某月中，允许选中的最小值(含)
    日历组件总默认即时填充并显示，当希望在点击某元素后才显示时，可以设置a属性，它的值为
    a用来指示点击时触发该日历的元素的id，或元素id的列表(以逗号分隔)
    f格式
    no表示在某月中，不可选中的日期，值为数组，值为0时，今天以前的所有日期不可选
    ok表示在某月中，可选中的日期，值为数组
    //b用来指示当点击日历中某一天时执行的函数名
    c代表显示日历的个数，默认值为1,此时传入元素标签为dl，如果
    step代表在多日历模式下，一次位移的月数，默认值为c
    ps="y:2012,m:6,d:29,h:11,M:44,s:30,f:1,r:'Id22',c:4,no:[2,6,8]"
    样式约定：Td为当天时间的样式名，No为不可选中日期的样式名,Sd为选中日期的样式名
    将欲与之联动的元素ID用下划线_连接起来,如果希望日历实例只能选取当前日期以后的日期，则将其id的最后一个符设为0
    */
</pre>
</dd>
</asp:content>
<asp:content id="Content5" contentplaceholderid="FBHtml" runat="Server" />
<asp:Content ContentPlaceHolderID="Fbd" runat="server">
<%--    <dl id="Dcal" class="Cal" p="y:2012,d:8" style="display: block; position:static;"><dt><a title="上一年" class="Py"></a><a title="上一月" class="Pm"></a><b class="Ym"></b><a title="下一月" class="Nm"></a><a class="Ny" title="下一年"></a></dt><dd><b>一</b><b>二</b><b>三</b><b>四</b><b>五</b><b>六</b><b>日</b></dd></dl>--%>
</asp:Content>
<asp:content id="Content6" contentplaceholderid="IptJs" runat="Server">
    <script type="text/javascript" src="/Js/Cal.js"></script>
    <script type="text/javascript" charset="utf-8">window.Cm = 17; Cal("Sc0","Sc2","Sc3","Sc4");
        //function Cb(o)
        //{
        //        o.Sd.href = "?a=" + o.y + o.m + o.d;
        //        console.log("o.Sd.href");
        //}
    </script>
</asp:content>