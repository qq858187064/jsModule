function Tabs()
{
    this.Ids = C.Slice.apply(arguments);
    this.IsFirst = typeof Tabs.Initialized == "undefined" ? true : false;
    if (true)
    {
        var Arr = [];
        Tabs.prototype.Swc = function (L)
        {
            var oDL = L.parentNode.parentNode,
                 Ms = C.Gs(L.parentNode, L.tagName),
				 Cs = C.Gs(oDL, "dd");
            for (var i = 0; i < Ms.length; i++)
            {
                if (Ms[i].parentNode.tagName.toLowerCase() == "dt")
                {
                    Ms[i].setAttribute("n", i);
                }
                Cs[i].style.display = "none";
            }
            if (!this.IsFirst && oDL.oi > -1)
            {
                C.DelClass(Ms[oDL.oi], "cm");
                C.DelStyle(Cs[oDL.oi]);
            }
            var n = L.getAttribute("n");
            C.AddClass(L, "cm");
            Cs[n].style.display = "block";
            oDL.oi = parseInt(n);
        };
        Tabs.prototype.Dls = function ()
        {
            for (var i = 0; i < this.Ids.length; i++)
            {
                var oDl = C.G(this.Ids[i]);
                if (oDl.tagName.toLowerCase() == "dl")
                {
                    Arr.push(oDl);
                }
                else
                {
                    var sDs = C.Gs(oDl, "dl", true);
                    for (var p = 0; p < sDs.length; p++)
                    {
                        sDs[p].name = oDl.id;
                        Arr.push(sDs[p]);
                    }
                }
            }
            for (var j = 0; j < Arr.length; j++)
            {
                var dId = (Arr[j].id != "") ? Arr[j].id : Arr[j].name,
                        Md = dId.charAt(2),
                        Tn = Md == "i" ? "img" : "a",
                         Ls = C.Gs(C.Gs(Arr[j], "dt")[0], Tn),
						 Fg = parseInt(dId.charAt(1)) - 1,
						 Et = dId.charAt(0).toLowerCase() == 'c' ? "mousedown" : "mouseover",
                         IA = dId.indexOf("_");
                if (Fg > -1)
                {
                    this.Swc(Ls[Fg]);
                    if (IA > 0)
                    {
                        var Tm = parseInt(dId.slice(IA + 1)),
						ALs = C.Gs(C.Gs(C.G(dId), "dt")[0], Tn),
                        AFg = parseInt(dId.charAt(1)) - 1;
                        Arr[j].T = setInterval(function ()
                        {
                            AFg = AFg < ALs.length ? AFg++ : 0;
                            Tabs.prototype.Swc(ALs[AFg++]);
                        }, Tm);
                    }
                }
                for (var k = 0; k < Ls.length; k++)
                {
                    C.AddEvent(Ls[k], Et, function (e)
                    {
                        var that = (e.target) ? e.target : e.srcElement,
                        that = that.getAttribute("n") != null ? that : that.parentNode,
                        Dl = that.parentNode.parentNode;
                        if (Dl.id.indexOf("_") > 0)
                        {
                            clearInterval(Dl.T);
                            var n = parseInt(that.getAttribute("n")),
                             Ln = C.Gs(C.Gs(Dl, "dt")[0], Dl.id.charAt(2)=="i"?"img":"a");
                            Tabs.prototype.Swc(Ln[n]);
                            Dl.T = setInterval(function ()
                            {
                                n = Ln.length == n ? 0 : n;
                                Tabs.prototype.Swc(Ln[n++]);
                            },  parseInt(Dl.id.slice(Dl.id.indexOf("_") + 1)));
                        }
                        else
                        {
                            Tabs.prototype.Swc(that);
                        }
                    });
                }
            }
        };
        this.Dls();
        Tabs.Initialized = true;
    }
}