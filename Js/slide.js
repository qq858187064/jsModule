/*
slide组件,元素参数
    m:1从右滑出;2从下滑出
    t:触发元素；
    ac:动画样式；
    ec:动画结束后的样式；
    s:动画播放时长
    animation-play-state:paused;
-webkit-animation-play-state:paused; 
object.style.animationPlayState = "paused"running
*/
function slide() {
    slide.prototype = {
        Init: function (o) {
            C.Pt(o);
            o.t = C.G(o.ps.t);
            var s = "paused";
            C.AddEvent(o.t, "click", function () {
                /*
                if (!o.ex)
                    slide.prototype.ex(o);
                else
                    slide.prototype.cls(o);
                */
                //console.log(C.Css(o, "animationPlayState"));
                s = o.style.animationPlayState == "paused" ? "running" : "paused";
                    o.style.animationPlayState = s;


            },o);
        },
        /*展开*/
        ex: function (o) {
            C.AddClass(o, o.ps.ac);
            setTimeout(function () {
               // .style.animationPlayState = "paused
               // C.DelClass(o, o.ps.ac);
               // C.AddClass(o, o.ps.ec);
            }, o.ps.s);
            o.ex = 1;
        },
        /* 收回*/
     cls: function (o)
     {
         /*
          当项目中只有一个方向的动画，比如只有前进动画，但是又需要做一个后退的动作。
解决方法：可以在播放动画的时候设置Speed属性为-1，然后就会反向播放前进动画了。
transition: width 0.5s,height 0.5s;
          */
         console.log(999)
         

        // C.AddClass(o, o.ps.rvs);
         setTimeout(function () {
            // C.DelClass(o, o.ps.ec);
            // C.AddClass(o, o.ps.ac);
         }, o.ps.s);
         o.ex = 0;
    }
    }
    C.Batch();
}