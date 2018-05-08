function xmlSelect()
{
    this.select = document.createElement("select");
    this.select.add(new Option("请选择"));
    this.so = function (o) { return o.options[o.selectedIndex] };
    xmlSelect.prototype = {
        Init: function (o)
        {
            xmlSelect.prototype.loop(C.G(o.name), o);
        },
        cc: function (e)
        {
            var e = e || window.event,
                o = e.target || e.srcElement;
            if (o.selectedIndex != 0 && so(o).hu)
            {
                xmlSelect.prototype.spawn(o);
            }
            if (!so(o).hu)
            {
                o.sc.style.display = "none";
               // o.parentNode.removeChild(C.Nxt(o));
            }
        },
        spawn:function(o)
        {
            var sv = so(o).value,
                ss = sv.indexOf(",") == -1 ? [sv] : sv.split(","),
                prt = o.parentNode,
                cs = select.cloneNode();
            for (var i = 0; i < ss.length; i++)
            {
                var p = document.createElement("option");
                p.text = ss[i];
                cs.add(p);
            }
            cs.selectedIndex = 0;
            if (!o.sc)
            {
                o.sc = cs;
                prt.appendChild(o.sc);
                //prt.insertBefore(o.sc, prt.lastChild);
            }
            else
            {
                o.sc.style.display = "block";
                prt.replaceChild(cs, o.sc);
                o.sc = cs;
            }
        },
        loop: function (ul, select)
        {
            var ls = C.Gs(ul, "li");
            for (var i = 0; i < ls.length; i++)
            {
                var l = ls[i],
                    su = C.Gs(l, "ul"),
                    s = "",
                    hu = su.length > 0 ? true : false;
                if (su.length > 0)
                {
                    var sn = C.Gs(su[0], "li");
                    for (var j = 0; j < sn.length; j++)
                    {
                        var ew = j == sn.length - 1 ? "" : ",";
                        s += sn[j].firstChild.nodeValue.trim() + ew;
                    }
                }
                    var opt = new Option(l.firstChild.nodeValue);
                    if (s != "")
                    {
                        opt.value = s;
                    }
                    opt.hu = hu;
                    select.options.add(opt);
            }
            C.AddEvent(select, "change", xmlSelect.prototype.cc);
        }
    };
    C.Batch();
}