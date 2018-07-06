function Checkbox()
{
    Checkbox.prototype = {
        Init: function (o)
        {
                var o = C.G(o);
                o.Cs = C.Gs(o, "input", true);
                o.rcs = [];
                o.fn = C.Attr(o, "fn");/*再扩展属性加入p,指定name更合理*/
                var fn = o.fn ? true : false;
                switch (o.id.charAt(0).toUpperCase())
                {
                    case "F":
                        o.Itr = o.Cs.shift();
                        break;
                    case "L":
                        o.Itr = o.Cs.pop();
                        break;
                    case "A":
                        o.Itr = o.Cs.shift();
                        o.Itr2 = o.Cs.pop();
                        C.AddEvent(o.Itr2, "click", this.Ca, o);
                         //o.Itr2.onchange =o.Itr.onchange= o.Itr.click;// function () { o.Itr.click(); };
                        break;
                }
                C.AddEvent(o.Itr, "click", this.Ca, o);
                for(var i=0;i<o.Cs.length;i++)
                {
                    var ck = o.Cs[i];
                    if (ck.type == "checkbox")
                    {
                       o.rcs.push(ck);
                        C.AddEvent(ck, "change", this.Refle, o);
                        if (fn)
                            C.AddEvent(ck, "change", function(a) { window[o.fn](a); }, ck)
                    }
                }
                o.Cs=o.rcs;
                if (o.id.indexOf("_") != -1)
                {
                    var Params = o.id.split("_"),
                        Ivs = C.G(Params[1]);
                    C.AddEvent(Ivs, "click", this.Inverse, o);
                }
        },
        Ca: function (o,e)
        {
            var ck = e.target || e.toElement
            if (o.Itr==ck && o.Itr2)
                o.Itr2.checked = ck.checked;
                
            for (var i = 0; i < o.Cs.length; i++)
            {
                o.Cs[i].checked = ck.checked ? true : false;
            }
        },
        Inverse:function (o)
        {
            for (var i = 0; i < o.Cs.length; i++)
            {
                o.Cs[i].checked = o.Cs[i].checked ? false : true;
            }
            Checkbox.prototype.Refle(o);
        },
        Refle:function (o)
        {
            var Total = 0;
            for (var i = 0; i < o.Cs.length; i++)
            {
                if (o.Cs[i].checked)
                {
                    Total++;
                }
            }
            if (Total == o.Cs.length)
            {
                o.Itr.checked = true;
                if(o.Itr2)
                 o.Itr2.checked = true;
            }
            else if (o.Itr.checked || (o.Itr2&&o.Itr2.checked))
            {
                o.Itr.checked = false;
                if (o.Itr2)
                    o.Itr2.checked = false;
            }
        },
    Checked: function (Id)
    {
        var Ckd = [],
        Uck = [],
        Ack = C.G(Id).Cs;
        for (var i = 0; i < Ack.length; i++)
        {
            var Ck = Ack[i];
            if (Ck.checked)
            {
                Ckd.push(Ck);
            }
            else
            {
                Uck.push(Ck);
            }
        }
        Id.checked = Ckd;
        return Ckd;
    }
};
Checkbox.Checked = Checkbox.prototype.Checked;
C.Batch();
}