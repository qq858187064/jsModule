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
            <p class="bts mt9"><input name="Fu" id="Fu" type="file" onchange="chgImg(this)" accept="image/*" text='上传图像' /><a title="缩小">-</a><a title="放大">+</a><a href="javascript:upload()">确定</a></p>
            <a id="r" target="_blank"><img id='ri' /></a><!-- <a style="margin-right:75px;" href="javascript:C.G('Fu').click()">上传图像</a> multiple="multiple"-->
			 <!--<form action="/Hs/Handler.ashx?f=up" method="post" enctype="multipart/form-data" id="ImI" target="Hi" class="sip">
             <input name="Fu" id="Fu" type="file" onchange="UpImg()" accept="image/gif, image/jpeg"/ style="margin-right:114px;display:none" />
            <iframe name='Hi' id="hi" class="hi"></iframe>
			</form>-->
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
    <!--<script type="text/javascript" src="/Js/resize.js"></script>
	非node项目报：Promise未定义:
可引入<script src = "https://cdn.polyfill.io/v2/polyfill.min.js"></script> 或 <script type="text/javascript" src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6"></script>
	-->
    <script type="text/javascript" charset="utf-8">
			var r=C.G("r"),
		ri=C.G('ri');
			var fs;
        //本地预览图片
        function chgImg(fi)
			{
		     fs=fi.files;
            var ou =window[window.URL ? 'URL' : 'webkitURL']['createObjectURL'](fs[0]);// imgUrl(fi.files[0]);
			if (ou&&fs[0].size < 1024000 * 5){
				C.G("img").src=ou;
			}
			else
			alert("图片超过5M或不存在");
        };
				/*纯前端裁剪后上传*/
		function upload(){
      var fd= new FormData();
      fd.append('Fu', fs[0]);



   //  EXHR: function (CallBack, Method, Url, Data, Proc, Async) {





      /*xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
      xhr.open("POST", '/Hs/Handler.ashx?f=up', true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
      xhr.send(fd); //开始上传，发送form数据
      return;*/
          C.EXHR(
        function(o){
		        r.innerHTML = "图片处理完成，返回值：" + o+"<br />";
                r.href =o;
				ri.src= o+"?"+Math.random();
				r.appendChild(ri)
        },
		'POST',
        '/Hs/Handler.ashx?f=up',// +(a.i || 1),+"&token=" + this.cookie("token"),
        fd
      ); 
	/*
	 //ie下报Promise未定义：
       C.ajax('POST',
        '/Hs/Handler.ashx?f=up',// +(a.i || 1),+"&token=" + this.cookie("token"),
        fd,
        function(o){
		        r.innerHTML = "图片处理完成，返回值：" + o+"<br />";
                r.href =o;
				ri.src= o+"?"+Math.random();
				r.appendChild(ri)
        },
		function(o){console.log(o)}
      ); 
	 */
		}
		//图片缩放
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

	window.onload=function(){
	crop(si)
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
