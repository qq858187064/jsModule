/*
为传入对象o设置了以下属性：
o.sp、o.ep是当前滑屏事件中触点的开始位置和结束位置对象，未来可扩展滑动距离等
o.r：根据起、终点求角度、判断并返回方向0：未滑动，1：向上，2：向下，3：向左，4：向右；
而handle函数是滑动事件处理程序，原则上是自定义且在o对象上设置
*/
var touch={
touch: function(o, e)
{
    if (e.type == "touchstart")
    {
        var s = e.touches[0],
             s1 = e.touches[1];
        if (s1)
            o.s1={x:s1.clientX,y:s1.clientY}
        o.sp = { x: s.clientX, y: s.clientY };/*//,time:+new Date};可记录时间*/
    }
    else if (e.type == "touchend")
    {
        /*// var dur = +new Date - sp.time; //滑动的持续时间*/
        var b = e.changedTouches[0];
                
        //document.body.appendChild('123'+document.createTextNode(e.changedTouches.length))
        o.ep = { x: b.clientX, y: b.clientY };
        var x = o.ep.x - o.sp.x,
        y = o.ep.y - o.sp.y;
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
        /// alert(o.s1.x+"_"+o.s1.y)
        if (o.s1)
        {
            var b = e.changedTouches[1],
                b2 = e.changedTouches[0];
            o.ep1 = { x: b.clientX, y: b.clientY };
            o.ep2 = { x: b2.clientX, y: b2.clientY };
            var x = o.ep1.x - o.ep2.x;//o.s1.x;
            var y= o.ep1.y -  o.ep2.y;//o.s1.y;
            var l = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
            if (l > 0 && e.target.tagName=='IMG')
            {
                e.target.style.width = e.target.offsetWidth * 1.1 + "px";
                e.target.style.height = 'auto';
            }
        }
        C.PreventDefault(e);/*阻止触摸事件的默认滚屏行为*/
    }
    /*else if (e.type == "click") {//鼠标事件事处理
       console.log(e.type)
    } */
    if ((e.type == "touchend" || e.type == "click") && o.r > 2)
        swipe.prototype.handle(o);
}
}
export default touch;