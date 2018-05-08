function Checkbox()
{
    Checkbox.prototype = {
        Init: function (o)
        {
            if (!o.Init)
            {
                var o = C.G(o);
                o.Cs = C.Gs(o, "input", true);
                switch (o.id.charAt(0).toUpperCase())
                {
                    case "F":
                        o.Itr = o.Cs.shift();
                        break;
                    case "L":
                        o.Itr = o.Cs.pop();
                        break;
                    case "A":
                        o.Itr = o.Cs.pop();
                        o.Cs[0].onchange = function () { o.Itr.click(); };
                        break;
                }
                C.AddEvent(o.Itr, "click", this.Ca, o);
                for(var i=0;i<o.Cs.length;i++)
                {
                    if (o.Cs[i].type != "checkbox")
                    {
                        o.Cs.splice(i, 1);
                    }
                    else
                    {
                        C.AddEvent(o.Cs[i], "change", this.Refle, o);
                    }
                }
                if (o.id.indexOf("_") != -1)
                {
                    var Params = o.id.split("_"),
                        Ivs = C.G(Params[1]);
                    C.AddEvent(Ivs, "click", this.Inverse, o);
                }
            }
            o.Init = true;
        },
        Ca: function (o)
        {
            for (var i = 0; i < o.Cs.length; i++)
            {
                if (o.Cs[i].type == "checkbox")
                {
                    o.Cs[i].checked = o.Itr.checked ? true : false;
					//if()
					//console.log(o.Cs[i].id+"_"+o.Cs[i].checked+"_"+o.Itr.checked)
                }
            }
        },
        Inverse:function (o)
        {
            for (var i = 0; i < o.Cs.length; i++)
            {
                o.Cs[i].checked = o.Cs[i].checked ? false : true;
            }
            Checkbox.prototype.Refle(null,o);
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
            }
            else if (o.Itr.checked)
            {
                o.Itr.checked = false;
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
        return Ckd;
    }
};
Checkbox.Checked = Checkbox.prototype.Checked;
C.Batch();
}