function Tabs() {
    Tabs.prototype = {
        Init: function (o) {
            o.en = o.id.charAt(0).toLowerCase() == 'c' ? "mousedown" : "mouseover";
            o.fg = o.id.charAt(1);
            //o.ao = o.id.charAt(2);
            o.dt = C.Gs(o, "dt")[0];
            o.ms = C.Gs(o.dt, "a");
            o.cs = C.Gs(o, "dd");
            for (var i = 0; i < o.ms.length; i++) {
                var a = o.ms[i];
                a.setAttribute("n", i);
                a.o = o;
                a.ct = o.cs[i];
                C.AddEvent(o.ms[i], o.en, this.swc, a);
            }
            if (o.fg != 0) {
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
            var o = a.o;
            if (o.la) {
                C.DelClass(o.la, "cm");
                o.la.ct.style.display = "none";

            }
            var n = C.Attr(a, "n");
            C.AddClass(a, "cm");
            a.ct.style.display = "block";
            o.la = a;
            o.lc = a.ct;
            o.n = n;
        }

    };
    C.Batch();
}