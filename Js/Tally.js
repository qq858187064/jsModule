function Tally()
{
    Tally.prototype = {
        Init: function (o)
        {
            var ie = ! -[1, ];

            C.AddEvent(o, "focus", Tally.prototype.Count, o);

            if (ie)
            {
                C.AddEvent(o, "propertychange", Tally.prototype.Count, o);
            } else
            {
                C.AddEvent(o, "input", Tally.prototype.Count, o);
            }

            C.AddEvent(o, "keyup", Tally.prototype.Count, o);
        },
        Count: function (e, o)
        {
            var oR = C.G("R" + o.id),
				nMax = parseInt(o.id.substring(3)) * 2;

            Tally.prototype.Limit(o, nMax, oR);
        },
        Bytes: function (o)
        {
            return String(o.value).replace(/[^\x00-\xff]/g, 'aa').length;
        },
        LimitLength: function (o)
        {
            return o.match(/[^ -~]/g) == null ? o.length : o.length + o.match(/[^ -~]/g).length;
        },
        Limit: function (o, nMax, oR)
        {
            var oValLen = Tally.prototype.Bytes(o),
				sum = 0;

            if (nMax >= oValLen)
            {
                oR.style.color = "";
                oR.innerHTML = Math.floor((nMax - oValLen) / 2);
            } else
            {
                oR.style.color = "#F00";
                for (var i = 0; i < o.value.length; i++)
                {
                    sum += Tally.prototype.LimitLength(o.value.substr(i, 1));
                    if (sum > nMax)
                    {
                        o.value = o.value.substr(0, i);
                    }
                }
            }
        }
    };
    C.Batch();
}
//function Tally()
//{
//    Tally.prototype = {
//        Init: function (o)
//        {
//            C.AddEvent(o, "keyup", Tally.prototype.Count, o);
//            C.AddEvent(o, "propertychange", Tally.prototype.Count, o);
//        },
//        Count: function (e, o)
//        {
//            var Rt = C.G("R" + o.id),
//            Ps = parseInt(o.id.substring(3)),
//            //n = Ps - Tally.prototype.Bytes(o.value);
//            n = Ps - o.value.length;
//            if (n <= Ps)
//            {
//                o.value = o.value.substring(0, Ps);
//            }
//            Rt.innerHTML = Ps - o.value.length;
//        }
////        Bytes: function (Str)
////        {
////            var Bc = 0;
////            if (Str != null)
////            {
////                for (var i = 0; i < Str.length; i++)
////                {
////                    if (/^[\u0000-\u00ff]$/.test(Str.charAt(i)))
////                    {
////                        Bc += 1;
////                    }
////                    else
////                    {
////                        Bc += 2;
////                    }
////                }
////            }
////            return Bc/2;
////        }
//    }
//    C.Batch();
//}