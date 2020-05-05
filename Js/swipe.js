function swipe(o) {
    this.html = document.documentElement;
    this.ww = this.html.clientWidth;
    this.wh = this.html.clientHeight;
    swipe.prototype = {
        Init: function (o) {
            o.p = C.Pt(o);
            var v = C.G(o.p.v),
             ps = C.Gs(o, "img");
            for (var i = 0; i < ps.length; i++) {
                var p = ps[i];
                p.i = i;
                C.AddEvent(p, "click", function (p, e) {
                    var t = C.Ge(e);
                    if (t.tagName.toLowerCase() == "img") {
                        v.src = p.src;/*//如果是小图则不能用src*/
                        v.n = p.i;
                    }
                    swipe.prototype.zoom(v)
                }, p);
            }
            v.t = o;//触发元素父元素
            v.p = C.Pt(o);
            /*//C.AddEvent(v, "load", this.zoom, v);此image非彼image*/
            var vp = v.parentNode;
            if (C.touch) {//可触摸设备
                v.r = 0;
                C.AddEvent(vp, "touchstart", this.rule, v);
                C.AddEvent(vp, "touchmove", this.rule, v)
                C.AddEvent(vp, "touchend", this.rule, v);
            }
            else {  //pc等非可触摸设备
                C.AddEvent(vp, "click", this.rule, v);
                var cx = vp.offsetWidth / 2;
                C.AddEvent(vp, "mousemove", function (e) {
                    var e = e || window.event,
                    x = e.clientX - vp.offsetLeft - 2;
                    if (x < cx) {
                        C.DelClass(vp, "next")
                        C.AddClass(vp, "previous");
                        vp.title = "上一张";
                        v.r = 4;
                    }
                    else {
                        C.DelClass(vp, "previous")
                        C.AddClass(vp, "next");
                        vp.title = "下一张";
                        v.r = 3;
                    }

                });
            }
        },
        rule: function (o, e)
        {
            if (e.type == "touchstart")
            {
                //C.PreventDefault(e);/*阻止触摸事件的默认滚屏行为*/
                var p1 = e.touches[0],
                     p2 = e.touches[1];
                //起点1
                o.p1 = { x: p1.clientX, y: p1.clientY };/*//,time:+new Date};可记录时间*/
                if (p2)//起点2
                    o.p2 = { x: p2.clientX, y: p2.clientY }
            }
            else if (e.type == "touchend")
            {
                /*// var dur = +new Date - sp.time; //滑动的持续时间*/
                var b = e.changedTouches[0];
                //document.body.appendChild('123'+document.createTextNode(e.changedTouches.length))
                /*终点1*/
                o.ep = { x: b.clientX, y: b.clientY };
                var x = o.ep.x - o.p1.x,
                y = o.ep.y - o.p1.y;
                if (Math.abs(x) < 2 && Math.abs(y) < 2)  /*/如果滑动距离太短*/
                    return;
                var a = Math.atan2(y, x) * 180 / Math.PI;/*//用反正切求夹角度数*/
                if (x > 0 && a >= -45 && a < 45) {
                    o.r = 4;
                    /*console.log("右");*/
                }
                else if (x < 0 && (a >= 135 && a <= 180) || (a >= -180 && a < -135)) {
                    o.r = 3;
                    /*console.log("左");*/
                }
                else if (y > 0 && a >= 45 && a < 135) {
                    o.r = 2;
                    /*console.log("下");*/
                }
                else if (y < 0 && a >= -135 && a < -45) {
                    o.r = 1;
                    /*console.log("上");*/
                }
                else {
                    console.log("没滑动");
                    return;
                }
            }
            else if (e.type == "touchmove")
            {
                if (o.p2)
                {
                    var p3 = e.touches[0],
                         p4 = e.touches[1];
                    if (!o.ll)
                    {
                       
                        var a1 = o.p1.x - o.p2.x;
                        var b1 = o.p1.y - o.p2.y,
                         l1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2));
                        o.ll = l1;
                    }
                   var a = p3.clientX - p4.clientX; 
                    var b = p3.clientY- p4.clientY,
                     l = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));  /**/
                    //alert('L'+l+'oL'+o.ll)
                    var rr = C.G('rr');
                    rr.innerHTML = l + '<br />' + o.ll
                   if (o.ll && e.target.tagName == 'IMG')
                        // if (o.ll)
                      {
                          //alert(l+'_'+o.ll)
                          if (l > o.ll) {/*放大*/
                              //alert( '放大')
                              rr.innerHTML += '放大'+ '<br />' ;
                          e.target.style.width = e.target.offsetWidth * 1.01 + "px";
                          e.target.style.height = 'auto';
                          }
                          if (l < o.ll) {/*缩小*/
                              //alert('缩小')
                              rr.innerHTML += '缩小'+ '<br />' ;
                              e.target.style.width = e.target.offsetWidth * 0.99 + "px";
                              e.target.style.height = 'auto';
                          }
                        }
                    
                      o.ll = l;
                }
              
            }
            if ((e.type == "touchend" || e.type == "click") && o.r > 2)
                swipe.prototype.handle(o); 
        },
        handle: function (o, e) {
            var s = o.t.p.s,
                str = typeof s[0] == "string";
            if (o.r == 3 && o.n > -1)//
            {
                if (o.n < s.length - 1)
                {
                    //o.src = s[++o.n];
                    var i = s[++o.n];
                    o.src = str ? i : (i.src);
                }
            }
            else if (o.r == 4 && o.n > 0) {
                //o.src = s[--o.n];
                var i = s[--o.n];
                o.src = str ? i : (i.src);
            }
            /*仅浏览已显示的图对应大图的场景,待扩展
            var s;
            if (o.r == 3)
            {
                s = C.Nxt(o.ci);
            }
            else if (o.r == 4)
            {
                s = C.Pre(o.ci);
            }
            if(s){
            o.src = s.src;
            o.ci = s;}
            */
            swipe.prototype.zoom(o);
        },
        zoom: function (o, e) {
            var i = new Image();
            i.src = o.src;
            i.onload = function () {
                var w = i.width,
                h = i.height;
                if (h > w) {
                    o.style.height = h > wh ? "100%" : "auto";
                    o.style.width = "auto";
                   // console.log(1)

                }
                else if (h < w) {
                    o.style.width = w > ww ? "100%" : "auto";/* && h < wh*/
                    o.style.height = "auto";
                   // console.log(2)
                }
                else {
                    o.style.width = o.style.height = "auto";
                    //console.log(3)
                }
                i = null;
            }
        }
    }
    C.Batch();
}
/* 移入文档
pc+mobile+wx
swipe组件rule方法中为传入对象o设置了以下属性：
o.p1、o.ep是当前滑屏事件中触点的开始位置和结束位置对象，未来可扩展滑动距离等
o.r：根据起、终点求角度、判断并返回方向0：未滑动，1：向上，2：向下，3：向左，4：向右；
而handle函数是滑动事件处理程序，原则上是自定义且在o对象上设置，
但目前的需求较单一，先直接写入组件，未来根据需求再扩展

html中的p属性中：
s: 用于设置切换源,目前仅考虑图片，未来可扩展
v:用于指定显示媒体的窗口
*/