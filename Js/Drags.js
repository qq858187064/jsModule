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
            o.rx = o.ry = 0;
            o.ml = o.mt = 0;
            var f = !o.id ? o.parentNode : o;
            if (f.id.charAt(0).toLowerCase() == "s") {
                o.Bar = o;
            }
            else {
                o.Bar = o.firstChild.nodeType == 1 ? o.firstChild : C.Nxt(o.firstChild);
            }
            C.AddEvent(o.Bar, e1, Drags.prototype.Start, o);
            //C.AddEvent(document, e1,Drags.prototype.Start, o);
        },
        Start: function (o, e) {
            // console.log("start:")
            //o.parentNode.w=o.parentNode.offsetWidth;
            //o.parentNode.h=o.parentNode.offsetHeight;
            var x = touch ? e.changedTouches[0].clientX : e.clientX,
                y = touch ? e.changedTouches[0].clientY : e.clientY;
            o.rx = x - o.offsetLeft;
            o.ry = y - o.offsetTop;
            o.ml = parseInt(C.CurrentStyle(o).marginLeft) || 0;
            o.mt = parseInt(C.CurrentStyle(o).marginTop) || 0;


            if (!document["on" + e2])
                document["on" + e2] = function (oe) {
                    //if(e.clientX!=oe.clientX|e.clientY!=oe.clientY)
                    if (o.tagName.toLowerCase() != "i" || !window.evt["resize"])
                        Drags.prototype.Move(o, oe);
                    else {
                        /*目前仅resize用*/
                        o.x = x;
                        o.y = y;

                       
                        C.trg(o, evt.resize)
                         o.e = oe;/*自定义事件传参未实现*/
                    }

                    C.StopBubble(oe);
                    C.PreventDefault(oe);
                };
            if (!document["on" + e3])
                document["on" + e3] = function (oe) {
                    Drags.prototype.Stop(o, oe)
                }
            //C.AddEvent(document, "mouseup", Drags.prototype.Stop, o);
            C.StopBubble(e);
            C.PreventDefault(e);

        },
        Move: function (o, e) {
            //事件节省未处理
            //var e = e || window.event;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            var x = (e.clientX || e.changedTouches[0].clientX) - o.rx - o.ml,
                y = (e.clientY || e.changedTouches[0].clientY) - o.ry - o.mt;
            // if(x<0)
            // x=0;
            // if(y<0)
            // y=0;
            o.style.left = x + "px";
            o.style.top = y + "px";
            console.log("move  o.style.top______________________" + o.style.top)
            // o.mx=x;
            // o.my=y;
        },
        Stop: function (o, e) {
            // console.log("stop:")
            // console.log(o)
            console.log(o.id + "x轴方向移动了：" + (e.clientX - o.x) + "，y轴方向移动了：" + (e.clientY - o.y))
            // o.ex=e.clientX-o.x;
            // o.ey=e.clientY-o.y;
            if(touch)
            document.ontouchmove=document.ontouchend=null;
            else
            document.onmousemove = document.onmouseup = null;
        
            //o.resize=null;
            if (window.evt)
                console.log(evt)
            if (window.evt && window.evt["drop"])
                C.trg(o, window.evt.drop)

            //if(o.parentNode==)
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
	 
	 
	 
	 
	 
	 OK:
	 function Drags()
{
    Drags.prototype = {
        Init: function (o)
        {
            o.Rx = o.Ry = 0;
            o.ML = o.MT = 0;
            var f = !o.id ? o.parentNode : o;

            if (f.id.charAt(0).toLowerCase() == "s")
            {
                o.Bar = o;
                //o.s = true;
            }
            else
            {
                o.Bar = o.firstChild.nodeType == 1 ? o.firstChild : C.Nxt(o.firstChild);
            }
            C.AddEvent(o.Bar, "mousedown", Drags.prototype.Start, o);
        },
        Start: function (o,e)
        {
			o.x=e.clientX;
			o.y=e.clientY;
		    o.ML = parseInt(C.CurrentStyle(o).marginLeft) || 0;
            o.MT = parseInt(C.CurrentStyle(o).marginTop) || 0;
            o.Rx = e.clientX - o.offsetLeft - o.ML;
            o.Ry = e.clientY - o.offsetTop- o.MT;
            document.onmousemove = function (e)
            {
                Drags.prototype.Move(o,e);
            };
            C.AddEvent(document, "mouseup", Drags.prototype.Stop, o);
            C.StopBubble(e);
            C.PreventDefault(e);
        },
        Move: function (o,e)
        {
            var e = e || window.event;
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            o.style.left = (e.clientX - o.Rx) + "px";
            o.style.top = (e.clientY - o.Ry ) + "px";
        },
        Stop: function (o,e)
        {
			console.log("此次x轴移动："+(e.clientX-o.x)+";y轴移动："+(e.clientY-o.y))
            document.onmousemove = null;
            document.onmouseup = null;
        }
    };
    C.Batch();
}
*/