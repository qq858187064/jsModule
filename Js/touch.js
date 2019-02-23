/*
为传入对象o设置了以下属性：
o.sp、o.ep是当前滑屏事件中触点的开始位置和结束位置对象，未来可扩展滑动距离等
o.r：根据起、终点求角度、判断并返回方向0：未滑动，1：向上，2：向下，3：向左，4：向右；5：放大；6：缩小:
而handle函数是滑动事件处理程序，原则上是自定义且在o对象上设置
*/
function touch(o, e) {
        if (e.type == "touchstart") {
            C.PreventDefault(e);/*阻止触摸事件的默认滚屏行为*/
            var p1 = e.touches[0],
                 p2 = e.touches[1];
            //起点1
            o.p1 = { x: p1.clientX, y: p1.clientY };/*//,time:+new Date};可记录时间*/
            if (p2)//起点2
                o.p2 = { x: p2.clientX, y: p2.clientY }
        }
        else if (e.type == "touchend") {
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
        else if (e.type == "touchmove") {
            if (o.p2) {
                var p3 = e.touches[0],
                     p4 = e.touches[1];
                if (!o.ll) {

                    var a1 = o.p1.x - o.p2.x;
                    var b1 = o.p1.y - o.p2.y,
                     l1 = Math.sqrt(Math.pow(a1, 2) + Math.pow(b1, 2));
                    o.ll = l1;
                }
                var a = p3.clientX - p4.clientX,
                 b = p3.clientY - p4.clientY,
                 l = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));  /**/
                //alert('L'+l+'oL'+o.ll)
                //var rr = C.G('rr');
                //rr.innerHTML = l + '<br />' + o.ll
                if (o.ll && e.target.tagName == 'IMG')
                    // if (o.ll)
                {
                    //alert(l+'_'+o.ll)
                    if (l > o.ll) {/*放大*/
                        o.r = 5;
                        //alert( '放大')
                        //rr.innerHTML += '放大' + '<br />';
                        e.target.style.width = e.target.offsetWidth * 1.01 + "px";
                        e.target.style.height = 'auto';
                    }
                    else if (l < o.ll) {/*缩小*/
                        o.r = 6;
                        //alert('缩小')
                        //rr.innerHTML += '缩小' + '<br />';
                        e.target.style.width = e.target.offsetWidth * 0.99 + "px";
                        e.target.style.height = 'auto';
                    }
                }

                o.ll = l;
            }

        }
        /*else if (e.type == "click") {//鼠标事件事处理
           console.log(e.type)
        }*/
        if ((e.type == "touchend" || e.type == "click") && o.r > 2)
            swipe.prototype.handle(o);
    }
