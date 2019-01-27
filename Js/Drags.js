/*参考HTML5的拖放（Drag 和 drop）http://www.w3school.com.cn/html5/html_5_draganddrop.asp*/
function Drags() {
    var e1, e2, e3, touch = C.isTouch();
    if (touch) {
        e1 = "touchstart";
        e2 = "touchmove";
        e3 = "touchend";
    }
    else {
        e1 = "mousedown";
        e2 = "mousemove";
        e3 = "mouseup";
    }
    Drags.prototype = {
        Init: function (o) {
            //o.ml = o.mt = 0;
            //元素边框宽度
            o.bw = parseInt(C.CurrentStyle(o).borderWidth);
            o.ml = parseInt(C.CurrentStyle(o).marginLeft);//+o.bw;
            o.mt = parseInt(C.CurrentStyle(o).marginTop);//+o.bw;
            //计算相对于范围元素(图片亦是其父元素)绝对定位的左、上位置
            o.l = o.offsetLeft - o.ml;
            o.t = o.offsetTop - o.mt;

            var f = !o.id ? o.parentNode : o;
            if (f.id.charAt(0).toLowerCase() == "s") {
                o.Bar = o;
            }
            else {
                o.Bar = o.firstChild.nodeType == 1 ? o.firstChild : C.Nxt(o.firstChild);
            }
            C.AddEvent(o.Bar, e1, Drags.prototype.Start, o);
            //o.co = o;
        },
        Start: function (o, e) {
            /*开始拖动的起始点，鼠标按下时，相对于document的坐标*/
            o.ox = touch ? e.changedTouches[0].clientX : e.clientX;
            o.oy = touch ? e.changedTouches[0].clientY : e.clientY;

            //o.setCapture();//releaseCapture
            //window.captureEvents(e.type);

            o.tg = C.Ge(e);
            o.isd = o.tg.parentNode == o && o.tg.tagName == 'I'
            if (!document["on" + e2])
                document["on" + e2] = function (oe) { Drags.prototype.Move(o, oe) };
            if (!document["on" + e3])
                document["on" + e3] = function (oe) {
                    Drags.prototype.Stop(o, oe)
                }
            //C.AddEvent(document, "mouseup", Drags.prototype.Stop, o);
        },
        Move: function (o, e) {
            var ex = touch ? e.changedTouches[0].clientX : e.clientX,
                ey = touch ? e.changedTouches[0].clientY : e.clientY,
                xro = o.offsetWidth + o.offsetLeft > o.parentNode.offsetWidth,//x轴右侧超出
                ybo = o.offsetHeight + o.offsetTop > o.parentNode.offsetHeight,//y轴下方超出
                out = xro || ybo;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            o.x = o.l + ex - o.ox;
            o.y = o.t + ey - o.oy;
            //限制x轴：
            if (o.x <= -o.ml)/*x轴左边超出*/
                o.x = -o.ml;
            else if (o.offsetWidth + o.x + o.ml >= o.parentNode.offsetWidth)/*x轴右边超出*/
                o.x = o.parentNode.offsetWidth - o.offsetWidth - o.ml;
            //限制y轴：
            if (o.y <= -o.mt)/*y轴上边超出*/
                o.y = -o.mt;
            else if (o.offsetHeight + o.y + o.mt >= o.parentNode.offsetHeight)/*y轴下边超出*/
                o.y = o.parentNode.offsetHeight - o.offsetHeight - o.mt;
            //o.tg = C.Ge(e);
            var x, y;
            if (o.isd)//暂时根据元素结构、标签判断是否方向键，考虑其它方式
            {
                if (!o.w) {
                    o.w = o.offsetWidth;
                    o.h = o.offsetHeight;
                }
                var cls = C.Attr(o.tg, "class"),
                    mx = ex - o.ox,//x轴移动的距离
                    my = ey - o.oy;//,//y轴移动的距离
                //x,y;
                switch (cls) {
                    case "a":
                        mx = -mx;
                        my = -my;
                        x = o.x;
                        y = o.y;
                        break;
                    case "b":
                        my = -my;
                        mx = 0;
                        y = o.y;
                        break;
                    case "c":
                        my = -my;
                        y = o.y;
                        break;
                    case "d":
                        my = 0;
                        break;
                    case "e":
                        break;
                    case "f":
                        mx = 0;
                        break;
                    case "g":
                        mx = -mx;
                        x = o.x;
                        break;
                    case "h":
                        mx = -mx;
                        x = o.x;
                        break;
                }
				/*更新是否超出值，为了实现超出后回拉时有响应*/
				 xro = x+mx> o.parentNode.offsetWidth;
				 ybo =y+my> o.parentNode.offsetHeight;
                var w, h;
                /*比例限制：*/
                if (o.s > 0)
				{
                    if (!xro && !ybo)
					{
                        if (mx != 0)
						{

                            w = o.w + mx;
                            h = (o.w + mx) / o.s;
                        }
                        else if (my != 0)
						{
                            h = o.h + my;
                            w = (o.h + my) * o.s;
                        }
                    }
                }
                else
				{
                    if (!xro && mx != 0)
                        w = o.w + mx;
                    if (!ybo && my != 0)
                        h = o.h + my;
                }

                //避免大小超出
                if (w >= o.parentNode.offsetWidth - o.offsetLeft){
                    w = o.parentNode.offsetWidth - o.offsetLeft;
					h=w/o.s;
					}

                o.style.width = w + "px";
                o.style.height = h + "px";
            }
            else// if(o.co == o.tg)
            {
                x = o.x;
                y = o.y;
            }

                //if(x)
                o.style.left = x + "px";
                //if(y)
                o.style.top = y + "px";
        },
        Stop: function (o, e) {
            if (touch)
                document.ontouchmove = document.ontouchend = null;
            else
                document.onmousemove = document.onmouseup = null;
            if (window.evt && window.evt["drop"])
                C.trg(o, window.evt.drop)

            //更新位置：计算相对于范围元素(图片亦是其父元素)绝对定位的左、上位置
            o.l = o.offsetLeft - o.ml;
            o.t = o.offsetTop - o.mt;
        }
    };
    C.Batch();
}

/*
 var IsMousedown, LEFT, TOP, login;  
     document.getElementById("Mdown").onmousedown=function(e) {  
      login = document.getElementById("loginBox");  
      IsMousedown = true;  
      e = e||event;  
      LEFT = e.clientX - parseInt(login.style.left);  
      TOP = e.clientY - parseInt(login.style.top);  
      document.onmousemove = function(e) {  
       e = e||event;  
       if (IsMousedown) {  
        login.style.left = e.clientX - LEFT + "px";  
        login.style.top = e.clientY - TOP + "px";  
       }  
      }  
      document.onmouseup=function(){  
       IsMousedown=false;  
      }  
     }  
	
*/