<%@ Page Title="上传图片" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server"></asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">crop</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">上传、裁切图像</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>上传图片</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd class="sip">
            <i class="prev R">预览:<img id="prev" class="view" /></i>
			<p class="cans"><img id="img" src="/images/uimg/tmp/a.jpg" style="display:block;position:absolute;" onmousewheel="return bbimg(this)" />
			<b class="win" id="si" p="prev:'prev',img:'img',w:'100',h:'62',s:1"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i><i class="e"></i><i class="f"></i><i class="g"></i><i class="h"></i></b>
			</p>
            <p class="bts mt9"><a style="margin-right:75px;" href="javascript:C.G('Fu').click()">上传图像</a><a title="缩小">-</a><a title="放大">+</a><a href="javascript:cut()">确定</a></p>
            <a id="r" target="_blank"></a>
			 <form action="/Hs/Handler.ashx?f=up" method="post" enctype="multipart/form-data" id="ImI" target="Hi" class="sip">
             <input name="Fu" id="Fu" type="file" onchange="UpImg()" accept="image/gif, image/jpeg"/ style="margin-right:114px;display:none" /><!--  multiple="multiple"-->
            <iframe name='Hi' id="hi" class="hi"></iframe>
			</form>
        prev:用于预览图片id，img:用户上传的原图，w、h:是裁剪框的宽度，s:锁定比例的标识
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
  <script type="text/javascript" src="/Js/Drags.js"></script>
  <script type="text/javascript" src="/Js/crop.js"></script>
    <!--<script type="text/javascript" src="/Js/resize.js"></script>-->
    <script type="text/javascript" charset="utf-8">

        function bbimg(o) {
            var zoom = parseInt(o.style.zoom, 10) || 100;
            zoom += event.wheelDelta / 12;
            if (zoom > 0) o.style.zoom = zoom + '%';
            window.zoom = zoom;
            return false;
        }
        window.Cm = 21;
        var hi = C.G("hi"),
            si = C.G("si");

	crop(si) 
	
        /*确认图像*/
        function cut() {
            // EXHR: function (CallBack, Method, Url, Data, Proc, Async) 
            C.EXHR(function (o) {
                C.G("r").innerHTML = "图片处理完成：" + o;
                C.G("r").href = o;
            },
        "GET",
        "/Hs/Handler.ashx?f=cut&p=" + img.src.substring(img.src.indexOf("/", 8)) + "&x=" + -si.offsetLeft + "&y=" + -si.t + "&w="+si.offsetWidth+"&h="+si.offsetHeight
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
