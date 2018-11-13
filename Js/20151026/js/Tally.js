function Tally()
{
    Tally.prototype = {
        Init: function (o)
        {
            o.oR = C.G("R" + o.id);
            o.nMax = parseInt(o.id.substring(3)) * 2;
            if (o.oninput != undefined)
                C.AddEvent(o, "input", Tally.prototype.Limit, o);
            else
                C.AddEvent(o, "propertychange", Tally.prototype.Limit, o);

            C.AddEvent(o, "keyup", Tally.prototype.Limit, o);
            C.AddEvent(o, 'afterpaste', Tally.prototype.Limit, o);
        },
        Bytes: function (o)
        {
            return String(o.value).replace(/[^\x00-\xff]/g, 'aa').length;
        },
        LimitLength: function (o)
        {
            return o.match(/[^ -~]/g) == null ? o.length : o.length + o.match(/[^ -~]/g).length;
        },
        Limit: function (o)
        {
            var oValLen = Tally.prototype.Bytes(o),
                sum = 0;

            if (o.nMax >= oValLen)
            {
                o.oR.style.color = "";
                o.oR.innerHTML = Math.floor((o.nMax - oValLen) / 2);
            } else
            {
                o.oR.style.color = "#F00";
                for (var i = 0; i < o.value.length; i++)
                {
                    sum += Tally.prototype.LimitLength(o.value.substring(i, 1+i));
                    if (sum > o.nMax)
                    {
                        o.value = o.value.substring(0, i);
                    }
                }
            }
        }
    };
    C.Batch(Tally, arguments);
}
/*
substring第二个参数表示截取到字符串的第几位。
substr        第二个参数表示截取多少位字符串。
*/
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