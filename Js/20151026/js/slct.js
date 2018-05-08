function slct() {
    slct.prototype = {
        Init: function (o)
        {
            var ss = o.id.split("_");
            o.a = C.G(ss[1]);
            o.a.a = C.G(ss[2]);
            o.a.o = o;
            o.a.a.o = o.a;
            this.bd(o, cts)
        },
        bd: function (o, arr)
        {
            for (var i = 0; i < arr.length; i++) {
                var p = C.Ce("option");
                p.value = arr[i].i;
                p.text = arr[i].n;
                p.c = arr[i].c;
                o.add(p);
            }
            C.AddEvent(o, "change", this.sc, o);
            this.sc(null, o);
        },
        sc: function (e, o)
        {
            var so = C.So(o);
            if (o.a)
                o.a.length = 1;
            if (so.c)
            {
                slct.prototype.bd(o.a, so.c);
            }
            else if (o.a && o.a.a)
            {
                o.a.a.length = 1;
            }
        }
    }
    C.Batch();
}