<%@ Page Title="上传图片" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server"></asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">crop</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">上传、裁切图像</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>缩放裁切图像</a><a>拖拽裁切图像</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
        <dd class="sip">
            <i class="prev R">预览:<img id="prev1" class="view" /></i>
			<p class="cans"><img id="img1" src="/images/uimg/tmp/a.jpg" style="display:block;position:absolute;" onmousewheel="return bbimg(this)" />
			<b class="win" id="si1" p="prev:'prev1',img:'img1',w:'100',h:'62',s:1,q:0.6,fu:'fu1',up:'up1'"></b>
			</p>
			<!--<canvas id='cvs'></canvas>-->
            <p class="bts mt9"><input name="Fu" id="fu1" type="file" accept="image/*" text='上传图像'/><a title="缩小">-</a><a title="放大">+</a><a href="#" id="up1">确定</a></p>
            <a id="r" target="_blank"><img id='ri' /></a>
			 <!--
                 capture=user|environment
                 <form action="/Hs/Handler.ashx?f=up" method="post" enctype="multipart/form-data" id="ImI" target="Hi" class="sip"><a href="javascript:draw(upload)">确定</a>
             <input name="Fu" id="Fu" type="file" onchange="UpImg()" accept="image/gif, image/jpeg"/ style="margin-right:114px;display:none" />
            <iframe name='Hi' id="hi" class="hi"></iframe>
			</form>-->
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        img:用户上传的原图，prev:用于预览图片id(可选)，w、h:是裁剪框的宽度，
        可选：q:图片压缩质量(0-1,值越小，图片压缩力度越大。)，s:锁定比例的标识,
        fu:上传文件输入框，up:确定上传铵钮id
    </dd>
    <dd class="sip">
            <i class="prev R">预览:<img id="prev" class="view" /></i>
			<p class="cans"><img id="img" src="/images/uimg/tmp/a.jpg" style="display:block;position:absolute;"/>
			<b class="win" id="si" p="prev:'prev',img:'img',w:'100',h:'62',s:1,q:0.6,fu:'fu',up:'up'"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i><i class="e"></i><i class="f"></i><i class="g"></i><i class="h"></i></b>
			</p>
			<!--<canvas id='cvs'></canvas>-->
            <p class="bts mt9"><input name="Fu" id="fu" type="file" accept="image/*" text='上传图像'/><a title="缩小">-</a><a title="放大">+</a><a href="#" id="up">确定</a></p>
            <a id="r" target="_blank"><img id='ri' /></a>
			 <!--
                 capture=user|environment
                 <form action="/Hs/Handler.ashx?f=up" method="post" enctype="multipart/form-data" id="ImI" target="Hi" class="sip"><a href="javascript:draw(upload)">确定</a>
             <input name="Fu" id="Fu" type="file" onchange="UpImg()" accept="image/gif, image/jpeg"/ style="margin-right:114px;display:none" />
            <iframe name='Hi' id="hi" class="hi"></iframe>
			</form>-->
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        img:用户上传的原图，prev:用于预览图片id(可选)，w、h:是裁剪框的宽度，
        可选：q:图片压缩质量(0-1,值越小，图片压缩力度越大。)，s:锁定比例的标识,
        fu:上传文件输入框，up:确定上传铵钮id
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
  <script type="text/javascript" src="/Js/Drags.js"></script>
  <script type="text/javascript" src="/Js/crop.js"></script>
    <!--<script type="text/javascript" src="/Js/resize.js"></script>
	非node项目报：Promise未定义:
可引入<script src = "https://cdn.polyfill.io/v2/polyfill.min.js"></script> 或 <script type="text/javascript" src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6"></script>
	-->
    <script type="text/javascript" charset="utf-8">
			var r=C.G("r"),
		ri=C.G('ri');
       
		//图片缩放
			function bbimg(o) {
                console.log(o.style.zoom)
            var zoom = parseInt(o.style.zoom) || 100;
            zoom += event.wheelDelta / 12;
            if (zoom > 0) o.style.zoom = zoom + '%';
            //window.zoom = zoom;
            return false;















        }
        window.Cm = 21;
        var hi = C.G("hi"),
            si = C.G("si"),
           si1 = C.G("si1");

	window.onload=function(){
	    crop(si,si1);
}; 
        /*确认图像*/
        function cut() {
            C.EXHR(function (o) {
                r.innerHTML = "图片处理完成，返回值：" + o+"<br />";
                r.href =o;
				ri.src= o+"?"+Math.random();
				r.appendChild(ri)
            },
        "GET",
        "/Hs/Handler.ashx?f=cut&p=" + img.src.substring(img.src.indexOf("/", 8)) + "&x=" + -si.offsetLeft + "&y=" + -si.offsetTop+ "&w="+si.offsetWidth+"&h="+si.offsetHeight
        );
            console.log(si.view.src + "_x:" + si.l + "_y:" + si.t);
        }
        function UpImg() {
            C.G("ImI").submit();
            hi.onload = function () {
                console.log(C.Bd(hi.contentWindow.document).firstChild.innerHTML);
                img.src = C.Bd(hi.contentWindow.document).firstChild.innerHTML;
            };
        }

    </script>
</asp:Content>
