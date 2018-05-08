function Trees()
{
    this.Et;
    this.Hi;
    this.Ds;
    Trees.prototype = {
        Init: function (o)
        {
            var Ls = C.Gs(o, "li"),
             Iss = Trees.prototype.Init.caller == null || Trees.prototype.Init.caller == C.Batch;
            if (Iss)
            {

                Et = o.id.charAt(0).toUpperCase() == "C" ? "click" : "mouseover";
                Hi = o.id.charAt(1).toUpperCase() == "I" ? true : false;
                Ds = o.id.charAt(2).toUpperCase() == "S" ? true : false;
            }
            for (var i = 0; i < Ls.length; i++)
            {
                var Us = C.Gs(Ls[i], "ul"),
                 Cb = C.Gs(Ls[i], "input", true)[0];
                if (Hi && Cb)
                {
                    C.AddEvent(Cb, "click", this.Ss, [Cb, Ls[i]]);
                }
                if (Us.length > 0)
                {
                    C.AddEvent(Ls[i], Et, this.Fold, Ls[i]);
                    this.Init(Us[0]);
                }
                else if (Ds)
                {
                    C.AddEvent(Ls[i], "click", function (e, li)
                    {
                        var root = li.parentNode;
                        while (root.parentNode.tagName.toLowerCase() == "li")
                        {
                            root = root.parentNode.parentNode;
                        }
                        var cn = "cli";
                        C.DelClass(C.Cls(cn, "li", Cis)[0], cn);
                        C.AddClass(li, cn);
                        root.el(li);
                    }, Ls[i]);
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
             Cs = C.Gs(Li, "input", true), //传入Li中的所有input
             Isl = Li.parentNode.parentNode.tagName.toUpperCase() == "LI";
            for (var j = 0; j < Cs.length; j++)
            {
                if (Cb.checked)
                {
                    Cs[j].checked = true;
                }
                else
                {
                    Cs[j].checked = false;
                }
            }
            if (Isl)
            {
                var Prt = Li.parentNode;
                while (Prt.parentNode.tagName.toUpperCase() == "LI")
                {
                    var Ps = C.Gs(Prt, "input", true),
                    Cds = 0;
                    for (var k = 0; k < Ps.length; k++)
                    {
                        if (Ps[k].checked)
                        {
                            Cds++;
                        }
                    }
                    C.Gs(Prt.parentNode, "input", true)[0].checked = Cds > 0 ? true : false;
                    Prt = Prt.parentNode.parentNode;
                }
            }
        }
    };
    C.Batch();
}