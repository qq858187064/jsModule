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
			<canvas id='cvs'></canvas>
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
			var img = C.G("img"),
                fs, ou, sd, mime;
        //本地预览图片
        function chgImg(fi)
			{
		     fs=fi.files,
             ou =window[window.URL ? 'URL' : 'webkitURL']['createObjectURL'](fs[0]);// imgUrl(fi.files[0]);
		     if (ou && fs[0].size < 1024000 * 5) {
		         img.src = ou;
		         prev.src = ou;
		         img.onload = function () {
		             draw();
		         }
			}
			else
			    alert("图片超过5M或不存在");
			
		     mime = fs[0].type;
        };
		/*将图片指定区域画到画布上*/
		function draw(){
		var //im=new Image(),
		//cct=C.Ce('canvas').getContext('2d');
        w=si.offsetWidth,
        h=si.offsetHeight;
		cvs = C.G('cvs');
		cvs.width =w;
		cvs.height = h;
		cct = cvs.getContext('2d');
		    //img.src=ou;
		    //以下两步必须要在img load后执行：
		cct.drawImage(img, si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h);
		console.log('si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h', si.offsetLeft, si.offsetTop, w, h, 0, 0, w, h)
		
		sd = cvs.toDataURL(mime, 1);//.replace('data:image/jpeg;base64,', '');
		sd = toBlob(sd);
		//var imgData=cvs.toDataURL(img.type,0.8),
		//sendData=imgData.replace('data:'+img.type+';base64,','');

		
		}
		function toBlob(dataurl) {
		    var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]), n = bstr.length,
                u8arr = new Uint8Array(n);
		    while (n--) { u8arr[n] = bstr.charCodeAt(n); }
		    return new Blob([u8arr], { type: mime });
		}
		setTimeout(function () {
		    //img.onload = draw();
		    //draw()
		}, 500)

				/*纯前端裁剪后上传*/
		function upload() {
		    draw();
		    var fd = new FormData();
		    fd.append('Fu',sd, Fu.value);
      //fd.append('Fu', fs[0]);
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
