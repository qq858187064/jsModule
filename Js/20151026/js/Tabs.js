function Tabs() {
    Tabs.prototype = {
        Init: function (o) {
            o.en = o.id.charAt(0).toLowerCase() == 'c' ? "mousedown" : "mouseover";
            o.fg = o.id.charAt(1);
            o.tt = o.id.charAt(2) || false;/*_过渡方式1:渐显（从全透明到不透明）;2:_*/
            o.dt = C.Gs(o, "dt")[0];
            //var dtf=o.dt.firstChild;
            //o.ms = C.Gs(o.dt, (dtf.nodeType==1?dtf:C.Nxt(dtf)).tagNWame);
            o.ms = C.Gs(o.dt, (o.dt.firstChild.nodeType == 1 ? o.dt.firstChild : C.Nxt(o.dt.firstChild)).tagName);
            o.cs = C.Gs(o, "dd");
            for (var i = 0; i < o.ms.length; i++){
                var a = o.ms[i];
                a.setAttribute("n", i);
                a.o = o;
                a.ct = o.cs[i];
                //a.ct.style.zIndex = 999 + i;
                C.AddEvent(o.ms[i], o.en, this.swc, a);
            }
            if (o.fg != 0)
            {
                console.log(o+"_"+o.fg);
                this.swc(null, o.ms[o.fg - 1]);
            }
            if (o.fg == 0) {
                C.AddEvent(o, "mouseout", function (e, o) {
                    var e = e || window.event,
                        t = e.toElement || e.relatedTarget;
                    if (t.contains(o)) {
                        C.DelClass(o.la, "cm");
                        o.la.ct.style.display = "none";
                    }
                }, o);
            }
            o.i = o.id.indexOf("_")+1;
            if (o.i > 0) {
                this.startTime(o);
                C.AddEvent(o, "mouseover", function (e, o) {
                    clearInterval(o.timer);
                }, o)
                C.AddEvent(o, "mouseout", function (e, o) {
                    Tabs.prototype.startTime(o);
                }, o)
            }
        },
        startTime: function (o)
        {
            o.timer = setInterval(function ()
            {
                if (o.n == o.ms.length)
                {
                    o.n = 0;
                }
                Tabs.prototype.swc(null, o.ms[o.n]);
                o.n++;
            }, o.id.substring(o.i));
        },
        swc: function (e, a) {
            var o = a.o,
                t1 = o.tt && o.tt == 1;
            if (o.la)
            {
                C.DelClass(o.la, "cm");
                o.la.ct.style.display = "none";
                //if (t1)
                //o.la.ct.style.opacity = 0;
            }
            var n = C.Attr(a, "n");
            C.AddClass(a, "cm");
            if (t1)
                a.ct.style.opacity = 0;
            a.ct.style.display = "block";

            if (t1)
                Tabs.prototype.ts(a.ct, 0, 100, 1);/*从透明到不透明*/

            o.la = a;
            o.lc = a.ct;
            o.n = n;
        },
        ts: function (o,s,e,m)/*过渡透明效果：o为欲透明对象；透明度级别从1－100，s为起始值；e为始束值;m是执行周期（毫秒）*/
        {
            o.tm = setInterval(function ()
            {
                s = s +2;
                if (s<=e)
                    {
                        o.style.opacity = s / 100;
                }
                else
                {
                    o.style.opacity = 1;
                    clearInterval(o.tm);
                }
            }, m)
        }
    };
    C.Batch();
}
/*
  	filter:alpha(opacity=86);
    Opacity     不透明的程度，百分比。    从0到100，0表是完全透明，100表示完全不透明。
	opacity:0.86;
    规定不透明度。从 0.0 （完全透明）到 1.0（完全不透明）。

          function fade(node) {
            var level = 1,
             step = function () {
                var hex = level.toString(16);
                node.style.backgroundColor = '#FFFF' + hex + hex;
                if (level < 15) {
                    level += 1;
                    setTimeout(step, 100);
                }
            };
            setTimeout(step, 100);
        };

        fade(document.body);

*/