function Forms()
{
    this.Rqd = /^.+$/m;
    this.Rqd.No = "该项不能为空！";
    this.Ph = /^\((\d{3,4})\)|\1-?\d{5,8}$/;
    this.Ph.No = "电话格式不正确！";
    this.Mb = /^\0?\d{11}$/;
    this.Mb.No = "手机格式不正确！";
    this.Cn = /^[\u4E00-\u9FA5]{1,}$/;
    this.Cn.No = "不允许出现非中文";
    this.Pwd = /^(\w|[^\(\)\{\}\=\:\;\.\s]){1,}$/;
    this.Pwd.No = "密码不不能包含'(){}=:;. '等敏感字符";
    this.Cpt = /./;
    this.Cpt.No = "两次输入不一致!";
    var that = this;
    Forms.prototype = {
        Init: function (F)
        {
            var F = C.G(F);
            F.V = undefined;
            for (var i = 0; i < F.elements.length; i++)
            {
                var T = F.elements[i],
                    N = T.type.toLowerCase();
                T.Cst = C.Attr(T, "Ps");
                if ((N == "textarea" || N == "password" || N == "text") && T.Cst)
                {
                    if (F.id.charAt(0).toLowerCase() != "c" && !T.Ed)
                    {
                        C.AddEvent(T, "blur", Forms.prototype.Ve, T);
                        T.Ed = true;
                    }
                    Forms.prototype.Ve(false, T);
                }
            }
            F.V = F.V == undefined ? true : false;
            //            if (F.V == undefined)
            //            {
            //                F.V = true;
            //            }
        },
        Ve: function (e, T)
        {
            T.V = undefined;
            T.Em = "";
            T.value = T.value.Trim();
            T.Rpt = C.Attr(T, "Rpt") ? C.G(C.Attr(T, "Rpt")) : T.nextSibling;
            T.Ps = eval("({" + T.Cst + "})");
            var Pt = [];
            for (var p in T.Ps)
            {
                switch (p.toLowerCase())
                {
                    case "preset":
                        if (T.Ps[p] in that)
                        {
                            Pt.push(that[T.Ps[p]]);
                        }
                        else
                        {
                            var Pp = T.Ps[p].split(" ");
                            for (var j = 0; j < Pp.length; j++)
                            {
                                Pt.push(that[Pp[j]]);
                            }
                        }
                        break;
                    case "regex":
                        Pt.push(eval(T.Ps[p]));
                        break;
                    case "cpt":
                        alert(that.Cpt.No);
                        that.Cpt = RegExp("^" + C.G(T.Ps[p]).value + "$");
                        that.Cpt.compile(that.Cpt);
                        alert(typeof that.Cpt);
                        Pt.push(that.Cpt);
                        break;
                }
            }
            //alert(Pt.join());
            //            for (var j = 0; j < Pt.length; j++)
            //            {
            //                if (T.value.search(Pt[j]) > -1)
            //                {
            //                    //T.Cls = "Ok";
            //                    //C.DelClass(T.Rpt, "No");
            //                    T.Rpt.innerHTML = "";
            //                }
            //                else
            //                {
            //                    //T.Cls = "No";
            //                    T.V = false;
            //                    //C.DelClass(T.Rpt, "Ok");
            //                    //T.Rpt.innerHTML = Pt[j] in that ? T.Ps.No : T.Ps.Cem;
            //                    T.Rpt.innerHTML = Pt[j].No ? Pt[j].No : Pt[j].Cem;
            //                    T.form.V = false;
            //                }
            //            }
            //            T.V = T.V === undefined ? true : false;
            //            if (T.V)
            //            {
            //                C.AddClass(T.Rpt, "Ok");
            //            }
            //            var Dp = T.V ? "No" : "Ok";
            //C.DelClass(T.Rpt, Dp);
            //C.AddClass(T.Rpt, T.Cls);
        }
    }
    Forms.Vf = Forms.prototype.Init;
    C.Batch();
}


/*

function Fm(Id)
{
this.F = C.G(Id);
var Fs = this;
Fm.prototype = {
Dt: function ()
{
var Es = Fs.F.elements,
Str = "type=0";
for (var i = 0; i < Es.length; i++)
{
Str += "&" + Es[i].id + "=" + Es[i].value;
}
return Str;
},
Gi: function ()
{
var Url = "Login.php",
Data = Fm.prototype.Dt();
C.EXHR(function (Bj) { Fm.prototype.Cb(Bj); }, "POST", Url, Data);
},
Cb: function (Bj)
{
var Rt = C.G("Rpt"),
Cd = C.G("Cd");
if (Bj.lognum > 3)
{
Cd.style.display = "block";
}
switch (Bj.errorno)
{
case "000":
Rst = "登陆成功";
Rt.className = "Ok";
setTimeout(function ()
{
window.parent.location.href = location.href.substring(location.href.indexOf("#")); ;
}, 100);
break;
default:
Rst = Bj.error;
Rt.className = "No";
break;
}
Rt.innerHTML = Rst;
}
}
Fm.prototype.Gi(Id);
}
*/