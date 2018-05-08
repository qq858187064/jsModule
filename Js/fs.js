function fs() {
    fs.prototype = {
        Init: function (o) {
            var t = C.G(C.Pt(o).t);
            t.t = t;
            console.log(t.tagName)
            t.title = "全屏";
            C.AddEvent(o, "click", fs.prototype.swc, t);
        },
        swc: function (e, o) {
            var f;
            if (o.f)
            {
                o.t.title = "全屏";
                f = C.DelClass;
                o.f = false;
            }
            else
            {
                o.t.title = "恢复";
                f = C.AddClass;
                o.f = true;
            }
            f(o, "fs");
        }
    }
    C.Batch();
}