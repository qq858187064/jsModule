function Trees()
{
    this.Et;
    this.Hi;
    Trees.prototype = {
        Init: function (o)
        {
            var Ls = C.Gs(o, "li");
            if (Trees.prototype.Init.caller == C.Batch)
            {
                Et = o.id.charAt(0).toUpperCase() == "C" ? "click" : "mouseover";
                Hi = o.id.charAt(1).toUpperCase() == "I" ? true : false;
            }
            for (var i = 0; i < Ls.length; i++)
            {
                var Us = C.Gs(Ls[i], "ul");
                if (Us.length > 0)
                {
                    C.AddEvent(Ls[i], Et, this.Fold, Ls[i]);
                    this.Init(Us[0]);
                    if (Hi)
                    {
                        var Cb = C.Gs(Ls[i], "input", true)[0];
                        if (Cb)
                        {
                            C.AddEvent(Cb, "click", this.Ss, [Cb, Ls[i]]);
                            //C.AddEvent(Cb, "click", C.CA, [Cb, C.Gs(Ls[i], "input")]);
                        }
                    }
                }
            }
        },
        Fold: function (e, o)
        {
            var that = (e.target) ? e.target : e.srcElement;
            if (that == o)
            {
                var Cn = o.getAttribute("className") || o.getAttribute("class");
                if (!Cn || (Cn && Cn.indexOf("Fold") == -1))
                {
                    C.AddClass(o, "Fold");
                }
                else if (Cn && Cn.indexOf("Fold") > -1)
                {
                    C.DelClass(o, "Fold");
                }
            }
        },
        Ss: function (e, Arr)
        {
            var Cb = Arr[0],
             Li = Arr[1],
             Cs = C.Gs(Li, "input", true);
            for (var j = 0; j < Cs.length; j++)
            {
                Cs[j].checked = Cb.checked ? true : false;
            }
        }
    };
    C.Batch();
}