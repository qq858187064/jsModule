/*
滚动事件处理函数
*/
//o vue实例 
//scrollId 推荐外层元素id
//cb分页接口
//height 距离底部多高开始加载数据
/**/
function scroll()
{
    var a = arguments,
        r = C.Bd();
    window.onscroll = function () {
        var st = r.scrollTop || document.documentElement.scrollTop;
        for (var i = 0; i < a.length; i++)
        {
            var o = C.G(a[i]),
                p = C.Pt(o);
            if (!o.f && st > o.ps.t)//&& C.clsNm(o).indexOf(p.cls)==-1
            {
                console.log("if:", o)
                //C.AddClass(o, p.cls);class好像实现不了
                // if (p.cb)
                //   p.cb(o);
                o.style.left = o.offsetLeft + parseInt(C.style(r).marginLeft) + "px";
                o.style.marginLeft = 0;
                o.style.top = o.offsetTop + "px";
                o.style.width = o.offsetWidth + "px";
                o.style.position = "fixed";
                o.f = 1;
               // console.log(st > p.t && C.clsNm(o) != p.cls, "st:", st, "p.t:", p.t, C.clsNm(o), p.cls)
            }
            else if (o.f && st <= o.ps.t)
            {
                console.log("else:",st < p.t)
                o.style =o.f= 0;
            }/**/
        }
        // else
        // C.DelClass(o, p.cls);
        //return;
    }
}