/*
    p="t:'a',e:'click',i:0"
   元素标签名：t
  触发事件类型：e
  默认展开元素的索引:i
  当前菜单项样式：
   */
function menu() {
    menu.prototype = {
        Init: function (o) {
            var p = C.Pt(o),
             s = C.Gs(o, p.t),
            k=o.id+"ca";
            C.each(s, function (a,i) {
                C.AddEvent(a, p.e, function () {
                    a.nxt = a.nxt || C.Nxt(a);
                    if (o.cc)
                       o.cc.click();//关闭上一个
                    a.nxt.style.display =   a.nxt.style.display == "block" ? "none" : "block";
                    o.cc = a;

                    var ms = C.Gs(C.Nxt(o.cc), p.t);
                    C.each(ms, function (a) {
                        if (a.href.endsWith(location.pathname))
                        C.AddClass(a,"cm")
                    });

                    C.AddEvent(a.nxt, "click", function (e) {
                        var ca = C.Ge(e);
                        if (ca.href) {
                            o.cc.a = ca;
                            localStorage.setItem(k, i)
                        }
                    })/**/
                })
            });
            /**/
            var ci = localStorage.getItem(k),
                cc = s[ci];
                if (ci)
                    cc=s[ci];
                else
               if (p.i != undefined) {
                cc=s[p.i];
               }
                cc.click();
        }
    }
    C.Batch();
}