function Wa()
{
    Wa.prototype = {
        Init: function (o)
        {
            o.Ts = C.Gs(o, "a");
            o.Cs = C.Gs(o, "div");
            var Et = o.id.charAt(0).toUpperCase() == "C" ? "click" : "mouseover";
            for (var i = 0; i < o.Ts.length; i++)
            {
                o.Ts[i].setAttribute("n", i);
                C.AddEvent(o.Ts[i], Et, Wa.prototype.Sc, o)
            }
        },
        Sc: function (e,o)
        {
            var M = (e.target || e.srcElement).getAttribute("n");
            for (var j = 0; j < o.Ts.length; j++)
            {
                C.DelClass(o.Ts[j], "CM");
                o.Cs[j].style.display = "none";
            }
            C.AddClass(o.Ts[M], "CM");
            o.Cs[M].style.display = "block";
        }
    }
    C.Batch();
}