
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
    scroll.prototype = {
        Init: function (o)
        {
            var r = C.Bd(),
              vh = r.clientHeight,
              p = C.Pt(o);

            if (C.clsNm(o).indexOf(p.cls)==-1)
            window.onscroll = function () {

                var st = r.scrollTop || document.documentElement.scrollTop;
                console.log("st", st)
                if (st > p.t && C.clsNm(o) != p.cls) {
                    C.AddClass(o, p.cls);
                    if (p.cb)
                        p.cb(o);



                    console.log(78978978978978)
                }
                else
                    return;
               




                // this.handleScroll();
                return function () {
                    var st = r.scrollTop || document.documentElement.scrollTop;
                    console.log("st",st)
                    if (st > p.t && C.clsNm(o) != p.cls)
                    {
                        C.AddClass(o, p.cls);
                        if (p.cb)
                            p.cb(o);



                        console.log(78978978978978)
                    }
                        

                        /*
                    o.showTop = o.offsetHeight > 0 && o.offsetTop - vh < st - 400
                    var btm = vh + st + height > r.scrollHeight;
                    if (btm) {

                    }*/
                }
            }//();
        }
    }
    C.Batch(scroll, arguments);
}