function Sys()
{
    this.IsFirst = typeof Sys.Initialized == "undefined" ? true : false;
    if (this.IsFirst)
    {
        var Ca = C.G("Sce"),
        Cdt = Ca.parentNode,
        Cdl = Ca.parentNode.parentNode,
        Cds = C.Gs(Cdl, "dd"),
        Lst = Cds.length - 1,
        Ed = Cds[Lst],
        Pn = C.Gs(C.Gs(C.G("C2Cot"), "dt")[0], "a");
        for (var i = 0; i < Pn.length;i++)
        {
            Pn[i].setAttribute("m", i);
        }
        C.AddClass(Pn[parseInt(Pn[window.Cm].getAttribute("m"))], "CM");
        Sys.prototype.Code = function ()
        {
            var Ci = parseInt(Cdl.n);
            if (Ci != Lst)
            {
                Ed.innerText = Ed.textContent = Cds[Ci].innerHTML.toLowerCase();
            }
        }
        C.AddEvent(Ca, "mouseover", Sys.prototype.Code);
    }
    
    Sys.Initialized = true;
}
function Bscd()
{
    var Bsc = C.G("Bsc");
    for (p in C)
    {
        var Pro = typeof C[p] == "function" ? C[p].toString().replace("function (", "function " + p + "(") : p+":"+C[p];
        Bsc.innerHTML += Pro + "<br /> <br /> ";
    }
}
/*
function Sys() {
    this.IsFirst = typeof Sys.Initialized == "undefined" ? true : false;
    if (this.IsFirst) {
        var Ca = C.G("Sce"),
        Cdt = Ca.parentNode,
        Cdl = Ca.parentNode.parentNode,
        Cds = C.Gs(Cdl, "dd"),
        Lst = Cds.length - 1,
        Ed = Cds[Lst],
        Pn = C.Gs(C.Gs(C.G("C2Cot"), "dt")[0], "a");
        for (var i = 0; i < Pn.length; i++) {
            Pn[i].setAttribute("m", i);
        }
        C.AddClass(Pn[parseInt(Pn[window.Cm].getAttribute("m"))], "CM");
        Sys.prototype.Code = function () {
            var Ci = parseInt(Cdl.oi);
            if (Ci != Lst) {
                Ed.innerText = Ed.textContent = Cds[Ci].innerHTML.toLowerCase();
            }
        }
        C.AddEvent(Ca, "mouseover", Sys.prototype.Code);
    }

    Sys.Initialized = true;
}
function Bscd() {
    var Bsc = C.G("Bsc");
    for (p in C) {
        var Pro = typeof C[p] == "function" ? C[p].toString().replace("function (", "function " + p + "(") : p + ":" + C[p];
        Bsc.innerHTML += Pro + "<br /> <br /> ";
    }
}
*/