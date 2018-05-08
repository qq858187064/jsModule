function Menus()
{
    Menus.Hn = true;
    Menus.prototype = {
        Init: function (o)
        {
            var f = (o.id && o.id.charAt(0) || C.Gnm(o).charAt(0)).toLowerCase(),
                s = (o.id && o.id.charAt(1) || C.Gnm(o).charAt(1)).toLowerCase(),
                isc = s == "c",
                isd=s == "d",
                En = f == "c" ? "click" : "mouseover",
                Cen = (isc||isd)? "click" : "mouseout";
            o.Ct = C.Nxt(o);
            
            C.AddEvent(o.Ct, "mouseover", function () { window.mcv = true; });
            C.AddEvent(o.Ct, "mouseout", function () { window.mcv = false; });

           // o.Ct.tabIndex = -1;
            o.Ct.m = o;
            if (!isc && !isd)
            {
                C.AddEvent(o, Cen, Menus.prototype.HideNext, o);
                //C.AddEvent(o, Cen, function (e, m) {
                //    Menus.prototype.HideNext(e,m);
                //}, o);
            }
            if (!isd)
            {
                C.AddEvent(o, En, Menus.prototype.ShowNext);
                C.AddEvent(o.Ct, Cen, Menus.prototype.HideNext, o.Ct);

                //C.AddEvent(o.Ct, Cen, function (e,m) {
                //    Menus.prototype.HideNext(m);
                //}, o.Ct);



                var b = C.Bd();//document.documentElement
                if(!b.ck)
                C.AddEvent(b, "click", function (e,o) {
                    var tgt = e.target || e.srcElement;
                    //var tb = tgt.parentNode.parentNode;
                    //console.log(tgt.parentNode.tagName);
                    if (tgt != o && tgt != o.Ct &&!C.Contain(o.Ct, tgt))
                        //if (tgt != o || tgt != o.Ct || (tgt.parentNode && t.parentNode != o.Ct))
                        //if (tgt != o && tgt.parentNode && tgt.parentNode.tagName != "DT")
                    {
                        o.Ct.style.display = "none";
                    }
                    b.ck=true;
                },o);
            }
            else
            {
                C.AddEvent(o, Cen, function (e, o)
                {
                    var s = "block";
                    if (o.style.display && o.style.display != "none")
                    {
                        s = "none";
                    }
                    o.style.display = s;
                }, o.Ct);
            }
            var cs = C.Cls("Cls", null, o.Ct);
            for(var i=0;i<cs.length;i++)
            {
                C.AddEvent(cs[i], "click", function (e, ct) { ct.style.display = "none"; },o.Ct)
            }
        },
        ShowNext: function (e)
        {
            var e = e || window.event,
            M = e.srcElement || e.target,
            ct = C.Nxt(M);
            Cts = ct.style;
            Cts.display = "block"
            C.AddClass(M, "Ex");
            Cts.top = M.offsetTop + M.offsetHeight + "px";
            //Cts.top = M.offsetTop + M.offsetHeight+1 + "px";
            Cts.left = M.offsetLeft-1 + "px";
            //ct.focus();
        },
        HideNext: function (e, m)
        {
                var e = e || window.event,
                    isc = e.type == "click",
                    Et = isc ? m : e.relatedTarget || e.toElement,
                    Ct = m.Ct || m,
                    m = m.m || m,
                    h = Et == Ct || (Et.parentNode && Et.parentNode == Ct) || (Et.parentNode && Et.parentNode.parentNode && Et.parentNode.parentNode == Ct) || Et == m;
                var Nom = Et != Ct && Et.parentNode.tagName != "DT";
                if ((!h || isc) && Nom)
                {
                   setTimeout(function (m)
                   {
                       if (!window.mcv)
                           {
                       m.Ct.style.display = "none";
                       C.DelClass(m, "Ex");
                            }
                    }, 300, m)
                }
        }
    }
    C.Batch();
}
