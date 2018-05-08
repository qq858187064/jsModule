var e = C.G("e"),
ec = C.G("ec"),
slct = C.G("body_m_mr_lst_pid"),
add = C.G("add"),
nem = C.G("nem"),
d = "none",
w = "新增成员",
sl = slct?slct.cloneNode(true):false,
ev1 = C.Gs(ec, "input", true)[0],
oa = C.Gs(ec, "a", true),
 tb = C.G("tb");
if(slct)C.G("22").appendChild(sl);
//修改
function swe(f) {
    if (f) {
        f();
    }
    else if (d == "none") {
        on();
    }
    else {
        off();
    }
    e.style.display = d;
    add.innerHTML = w;
}
function on() {
    d = "table-row";
    w = "取消新增";
}
function off() {
    d = "none";
    w = "新增成员";
}
//新增
function smt(p,bu) {
    //var p = "Reg?Em=" + nem.value + "&Pwd=" + sha1("123") + "&Rid=" + slct.options[slct.selectedIndex].value;parseInt(o)
    C.Jsp(p,bu);
    Cb = function (o) {
        if (o > 0) {
            var isr = p.indexOf("Reg?") > -1 || p.substring(0, 3).toLowerCase() == "add";//p.indexOf("addCateg?") > -1 || p.indexOf("AddRole?") > -1 || p.indexOf("addPage?") > -1,
                 tr = isr ? C.Gs(tb, "tr", true)[3].cloneNode(true) : C.Nxt(ec),//C.Gs(tb, "tr", true)[1].cloneNode(true),
            s = C.Gs(tr, "td"),
            sll=isr?slct:sl;
            s[0].innerHTML = isr ? o : C.Gs(ec, "td")[0].innerHTML;
            s[1].innerHTML = isr ? nem.value : ev1.value;
            if (sll&&s.length > 3)
                s[2].innerHTML = sll.options[sll.selectedIndex].text;
            C.DelAttr(tr, "style")
            tb.appendChild(tr);
            swe(off);
            if(!isr)back();
        }
    };
}
//修改
function chg(p,bu) {
    //var uid = C.Gs(ec, "td")[0].innerHTML,
    var r = sl.options[sl.selectedIndex];
    //p = "ReMb?Uid=" + uid + "&Nem=" + ev1.value + "&Rid=" + r.value;
    C.Jsp(p,bu);
    Cb = function () {
        var ts = C.Gs(tb.et, "td");
        ts[1].innerHTML = ev1.value;
        ts[2].innerHTML = r.text;
        back();
    };
}

//删除
function del(d, nd,bu) {
    var r = d.parentNode.parentNode;
    p = nd + "=" + r.firstChild.innerHTML;
    C.Jsp(p,bu);
    Cb = function (o) {
        if (o > 0) {
            r.parentNode.removeChild(r);
        }
    }
}
//为编辑模式赋值
function sv(cs, es) {
    for (var i = 0; i < cs.length; i++) {
        var td = es[i],
        v = cs[i].innerHTML,
        t = parseInt(td.id[0]);
        if (t == 0) {
            td.innerHTML = v;
        }
        else if (t == 1) {
            ev1.value = v;
        }
        else if (t == 2) {
            C.Slcted(sl, v);
        }
    }
}
//编辑模式
function em(ed) {
    if (tb.et) { C.DelAttr(tb.et, "style") }
    var cr = ed.parentNode.parentNode,
    es = C.Gs(ec, "td"),
    cs = C.Gs(cr, "td");
    sv(cs, es);
    cr.parentNode.insertBefore(ec, cr);
    ec.style.display = "table-row";
    cr.style.display = "none";
    tb.et = cr;
    ev1.focus();
}

//退出编辑模式
function back() {
    ec.style.display = "none";
    tb.et.style.display = "table-row";
}
