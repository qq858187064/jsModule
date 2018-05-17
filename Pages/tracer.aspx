<%@ Page Title="滑动切换" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server">
     <style>
        dl{
            border:1px solid #eee;
        }
     dt,dd{
         display:inline-block;
     }
     dt{
         color:#666;
         font-weight:600;
     }
     dd{
         padding: 0 4em 0 1em;
     }
     dt.t{
         display:block;
             background: #888;
    padding: 4px 12px;
    color: #fff;
     }
    </style>

</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">crop</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">上传、裁切图像</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>上传图片</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd class="sip">

        <dl class="er" id="e" p=""><dt class="t">概要信息</dt>
    <dt>发生时间</dt><dd id="tm"></dd>
    </dl>
 <dl class="er" id="pst"><dt class="t">位置信息</dt>
     <dt id="ct">所在地区</dt><dd id="ip"></dd>
    </dl>
    <dl class="er" id="dvc"><dt class="t">设备信息</dt></dl>

    <img src="a.jpg" id="a" />
    <img src="b.jpg" id="b" />

跨域：
1、script加crossorigin属性crossorigin="anonymous"
2、response.addHeader("Access-Control-Allow-Origin", "http://www.a.com");  

    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
    <script src="../Js/tracer.js"></script>
    <!--<script type="text/javascript" src="/Js/resize.js"></script>-->
    <script type="text/javascript" charset="utf-8">
        window.Cm = 21;
	
    </script>
    <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>
    <script>
        C.G("ct").innerHTML=returnCitySN['cname'];
        C.G("ip").innerHTML = returnCitySN['cip'];

        function fmt(n) {
                return n < 10?"0" + n:n;
        }
        var t = new Date();
        C.G("tm").innerHTML = "{0}年{1}月{2}日{3}:{4}:{5}".format(t.getFullYear(), fmt(t.getMonth() + 1), fmt(t.getDate()), fmt(t.getHours()), fmt(t.getMinutes()), fmt(t.getSeconds()));
        
		/*
		console.log("deviceInfo.errors:"+infoo.errors);
		console.log("deviceInfo.deviceInfo:"+infoo.device);
			*/

		
	
		
        /*
        var s = "",
            e = JSON.parse(localStorage.e),
            dl = c.G("e"),
             dt = c.Ce("dt"),
            dd = c.Ce("dd");

        for (var i = 0; i < e.length;i++)
        {
            dt = dt.cloneNode();
            dd = dd.cloneNode();
           dt.innerHTML = e[i][0];
           dd.innerHTML = e[i][1];
          dl.appendChild(dt);
          dl.appendChild(dd);
        }

        var dc = c.G("dvc");

        for (var i = 0; i < dvc.length; i++) {
            dt = dt.cloneNode();
            dd = dd.cloneNode();
            dt.innerHTML = dvc[i][0];
            dd.innerHTML = dvc[i][1];
            dc.appendChild(dt);
            dc.appendChild(dd);
        }
        */
    </script>
</asp:Content>
