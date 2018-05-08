function Timers()
{
    Timers.prototype = {
        Init: function (o)
        {
            C.AddEvent(o, "click", this.Count, o);
            o.ps = C.Pt(o);
            /*o.d = o.ps.d.split(",");*/
            o.h = o.ps.h;
            o.r = (o.ps && o.ps.r)?C.G(o.ps.r):o;
            o.Rule = o.id.charAt(0).toUpperCase() == "U";
            o.n = parseInt(o.id.substring(2));
        },
        Count: function (e, o, fn)
        {
            if (o.status) { return; }
            o.Ms = o.Rule ? 0 : o.n;
            o.setAttribute("disabled", true);
            /*
            for (var i = 0; i < o.d.length; i++)
            {
                var sd = C.G(o.d[i]);
                sd.setAttribute("disabled", true);
            }
            */
            o.r.innerHTML = "(" + o.Ms + ")";
            o.Tm = setInterval(function ()
            {
                if ((!o.Rule && o.Ms < 1) || (o.Rule && o.Ms > o.n - 1))
                {
                    o.status = false;
                    clearInterval(o.Tm);
                    C.DelClass(o, "ti");
                    if (o.ot)
                    {
                        o.r.innerHTML = "(" + o.ot + ")";
                    }
                    else
                    {
                        C.DelAttr(o, "disabled")
                        /*
                        for (var i = 0; i < o.d.length; i++) {
                            var sd = C.G(o.d[i]);
                            C.DelAttr(sd,"disabled");
                        }
                        */
                        o.r.innerHTML = "";
                    }
                }
                else
                {
                    o.status = true;
                    o.r.innerHTML ="("+ (o.Rule ? ++o.Ms : --o.Ms)+")";
                    C.AddClass(o, "ti");
                }
            }, 1000);
        }
    }
    Timers.Count = Timers.prototype.Count;
    C.Batch();
}
