/*
slide组件,元素参数
    m:1从右滑出;2从下滑出
    t:触发元素；
    ac:动画样式；
    ec:动画结束后的样式；
    s:动画播放时长
*/
function slide() {
    slide.prototype = {
        Init: function (o) {
            C.Pt(o);
            o.t = C.G(o.ps.t);
            C.AddEvent(o.t, "click", function () {
                if (!o.ex)
                    slide.prototype.ex(o);
                else
                    slide.prototype.cls(o);

            },o);
        },
        /*展开*/
        ex: function (o) {
            C.AddClass(o, o.ps.ac);
            setTimeout(function () {
                C.AddClass(o, o.ps.ec);
                C.DelClass(o, o.ps.ac);
            }, o.ps.s);
            o.ex = 1;
        },
        /* 收回*/
     cls: function (o)
     {
         C.AddClass(o, o.ps.rvs);
         setTimeout(function () {
             C.DelClass(o, o.ps.ec);
             C.DelClass(o, o.ps.rvs);
         }, o.ps.s);
         o.ex = 0;
    }
    }
    C.Batch();
}