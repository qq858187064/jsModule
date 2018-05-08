<%@ Page Title="上传图片" Language="C#" %>
<script runat="server">
</script>
<asp:Content ContentPlaceHolderID="hd" runat="Server">
</asp:Content>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"><a>上传图片</a></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd>
        <form action="/Hs/Handler.ashx" method="post" enctype="multipart/form-data" id="ImI" target="Hi" class="sip">
            <input name="Fu" id="Fu" type="file" onchange="UpImg()" accept="image/gif, image/jpeg" /><!--  multiple="multiple"-->
            <img id="Tmp" />
            <b class="win" id="si"><i class="a"></i><i class="b"></i><i class="c"></i><i class="d"></i><i class="e"></i><i class="f"></i><i class="g"></i><i class="h"></i></b>
            <iframe name='Hi' id="hi" class="hi"></iframe>
        </form>
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="FBd" runat="Server">
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="IptJs" runat="Server">
  <script type="text/javascript" src="/Js/Drags.js"></script>
    <script type="text/javascript" src="/Js/resize.js"></script>
    <script type="text/javascript" charset="utf-8">
        window.Cm = 17;
        function UpImg() {
            var Img = C.G("Tmp");
            //Rst = C.G("Rst");
            C.G("ImI").submit();
            //Img.src = window.Hi.document.body.innerHTML;
            //hi.contentWindow.onload = function () { alert(1); Img.src = window.Hi.document.images[0]; };
            //hi.onload = function () {
            //    console.log("onload_" + hi.contentWindow.document.images[0].src);
            //    var i = hi.contentWindow.document.images[0];
            //    hi.parentNode.appendChild(i.cloneNode());
            //};
            //setTimeout(function ()
            //{
            //    //Img.src = window.Hi.document.images[0];
            //    Img.src = window.Hi.document.body.firstChild.innerHTML;

            //}, 1500);
        }

        var hi = C.G("hi"),
            si = C.G("si");
        document.onselectstart = function () { event.returnValue = false; };
        var ii = C.sliceC(C.Gs(si, "i"));
        ii.push(si)
        Drags.apply(null, ii);

        function resize() {
            var o = ii[0].parentNode;
            for (var n = 0; n < ii.length - 1; n++) {
                var i = ii[n];
                //i.tabIndex = -1;
                C.AddEvent(i, "mousedown", function (e, ci) {
                    //ci.focus();
                    var cls = ci.getAttribute("class") || ci.getAttribute("className"),
                        lc = e.clientX;
                    //C.AddEvent(document,"mousemove",function (e)
                    //{
                    //    console.log(cls)
                    //    o.style.width = e.clientX - ci.Rx - ci.ML + "px";
                    //});

                    /*
                o.Rx = e.clientX - o.offsetLeft;
                o.Ry = e.clientY - o.offsetTop;
                //o.ML = parseInt(C.CurrentStyle(o).marginLeft) || 0;
                //o.MT = parseInt(C.CurrentStyle(o).marginTop) || 0;
    
                    */
                    document.onmousemove = function (e) {
                        var x = e.clientX,
                            y = e.clientY,
                            rx = ci.Rx,
                            ry = ci.Ry,
                            ml = ci.ML,
                            mt = ci.MT,
                            w = o.offsetWidth,
                            h = o.offsetHeight,
                            s = "",
                            l = 0,
                            t = 0;
                        switch (cls) {
                            case "a":
                                s = "absolute";
                                break;
                            case "b":
                                break;
                            case "c":
                                w = x - rx;
                                //h = y - ry;
                                break;
                            case "d":
                                w = x - rx;
                                break;
                            case "e":
                                w = x - rx;
                                break;
                            case "f":
                                break;
                            case "g":
                                s = "absolute";
                                break;
                            case "h":
                                s = "absolute";
                                l = x - rx;
                                t = y - ry;
                                console.log(l)
                                break;
                        }
                        o.style.width = w - l + "px";
                        o.style.position = s;
                        //o.style.top = t;
                        o.style.left = l;
                        //o.style.height = h + "px";
                    }

                    document.onmouseup = function () { document.onmousemove = null; }
                }, i);

            }
        }

        resize();


        /*
                    var location = getLocation(e);
            clickY = location.y;
            clickX = location.x;

                                var add_length = clickX - location.x;
                    clickX = location.x;
                    var length = parseInt(preview.style.width) + add_length;
                    preview.style.width = length + "px";
                    preview.style.left = clickX + "px";




                            var add_length = clickX - location.x;
                    clickX = location.x;
                    var length = parseInt(preview.style.width) + add_length;
                    preview.style.width = length + "px";
                    preview.style.left = clickX + "px";










    
                var add_the_handlers = function (nodes) {
                var i;
                for (i = 0; i < nodes.length; i += 1) {
                    nodes[i].onclick = function (i) {
                        return function (e) {
                            alert(i);
                        };
                    }(i);
                }
            };
    
    
    
        
            function resize()
        {
            var o = ii[0].parentNode;
            for (var n = 0; n < ii.length-1; n++)
            {
                var i = ii[n];
                C.AddEvent(i, "mousedown", function (e, ci)
                {
                    document.onmouseup = function () { document.onmousemove = null; }
                    var cls = ci.getAttribute("class") || ci.getAttribute("className");
    
                    document.onmousemove = function (e)
                    {
                        
                        console.log(cls)
    
                        o.style.width = e.clientX - ci.Rx - ci.ML + "px";
                    }
    
    
                    
                },i);
            }
        }
    
        
        */

    </script>
</asp:Content>
<%--1. 不期望触发 window.onresize 事件时：

为 HTML 与 BODY 元素设置 height:100% 和 width:100% 以防止因为其尺寸变化而触发 window.onresize 事件，如上表中第三行。

2. 期望触发 window.onresize 事件时：

在非 IE 浏览器中，主动去触发一次 window.onresize 事件，代码如下：

var evt = document.createEvent("MouseEvents");
evt.initMouseEvent("resize", true, true, this, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
window.dispatchEvent(evt);--%>
