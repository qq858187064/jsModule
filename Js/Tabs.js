function Tabs() {
    Tabs.prototype = {
        Init: function (o) {
            o.en = o.id.charAt(0).toLowerCase() == 'c' ? "mousedown" : "mouseover";
            o.fg = o.id.charAt(1);
            //o.ao = o.id.charAt(2);
            o.ms = C.Gs(C.Gs(o, "dt")[0], "a");
            o.cs = C.Gs(o, "dd");
            for (var i = 0; i < o.ms.length; i++) {
                var a = o.ms[i];
                a.setAttribute("n", i);
                a.o = o;
                a.ct = o.cs[i];
                C.AddEvent(o.ms[i], o.en, this.swc, a);
            }
            if (o.fg != 0) {
                this.swc(o.ms[o.fg - 1]);
            }
            if (o.fg == 0) {
                C.AddEvent(o, "mouseout", function (o, e) {
                    var e = e || window.event,
                        t = e.toElement || e.relatedTarget;
                    if (t.contains(o)) {
                        C.DelClass(o.la, "cm");
                        o.la.ct.style.display = "none";
                    }
                }, o);
            }
            o.i = o.id.indexOf("_") + 1;
            if (o.i > 0) {
                this.startTime(o);
                C.AddEvent(o, "mouseover", function (o, e) {
                    clearInterval(o.timer);
                }, o)
                C.AddEvent(o, "mouseout", function (o, e) {
                    Tabs.prototype.startTime(o);
                }, o)
            }
        },
        startTime: function (o) {
            o.timer = setInterval(function () {
                if (o.n == o.ms.length) {
                    o.n = 0;
                }
                Tabs.prototype.swc(o.ms[o.n]);
                o.n++;
            }, o.id.substring(o.i));
        },
        swc: function (a, e) {
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
//if (typeof module === "object" && typeof module.exports === "object") {
//    module.exports = Tabs
//}