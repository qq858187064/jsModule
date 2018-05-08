/*
name为b的元素，将响应鼠标移入事件并显示编辑工具条
*/
var vc = {/*vc是当前控件对象的抽象*/
    eb: C.G("eb"),
    b: C.G("b"),
    cs: C.Gn("b"),
    pop: C.G("cc0"),
    init: function () {
        C.AddClass(eb, "cm");
        eb.innerHTML = "退出编辑";
        for (var n = 0; n < this.cs.length; n++) {
            var p = this.cs[n];
            if (!p.onmouseover)/*是否需要判断*/
                C.AddEvent(p, "mouseover", function (e, p) {
                    var e = C.Ge(e);
                    if ((e == p || e == p.firstChild) && vc.b.style.display != null) {
                        p.insertBefore(vc.b, p.firstChild);
                        p.style.position = "relative";
                        vc.b.style.display = "block";
                        vc.cc = p;
                        vc.ps = C.Pt(p);
                        vc.tit = C.Cls("ha", "a", p)[0];
                        if (vc.tit) {
                            vc.tm = C.Gs(vc.tit, "i")[0];
                        }
                        //vc.cc = b.parentNode;
                        switch (vc.ps.tp) {
                            case "link":
                                link.init();
                                break;
                            case "list":
                                //alert(0)
                                break;
                            case "C.uc":
                                if (vc.cc.tagName.toLowerCase() == "img")
                                {
                                    img.init();
                                    return;
                                }
                                break;
                                //case "tab":
                                //vc.cc = b.parentNode;
                                //vc.set = tab.init;
                                // break;
                                //default:
                                //    break;
                        }
                    }
                }, p);
        }
    },
    /* 控件设置*/
    set: function () {
        if (vc.ps.tp == "tab") {
            tab.init();
            return;
        }
        if (vc.cc.tagName.toLowerCase() == "a")
        {
            link.lb = vc.cc;
            link.edit();
            link.lb = C.G("cc_");

                return;
        }
        //if (vc.cc.tagName.toLowerCase() == "img") {
        //    img.ea();
        //    return;
        //}


        C.G("dtit").style.display = this.tit ? "inline-block" : "none";
        var ts = C.Gs(this.pop, "input", true);
        this.tn = ts[0];
        this.mo = ts[1],
        this.u = ts[2];
        this.bg = C.G("WBg");
        C.Bd().insertBefore(this.pop, this.bg);
        Dialog("WBg", this.pop);
        if (this.tit) {
            this.tn.value = this.tit.firstChild.nodeValue;
            this.u.value = this.tit.href;
            if (this.tm) {
                this.mo.value = this.tm.innerHTML;
            }
        }
        else {
            this.tn.value = this.u.value = this.mo.value = "";
        }
    },
    /*提交新增、修改控件*/
    smt: function () {
        Forms.Vf(this.pop);
        if (this.pop.V) {
            Cnct("aeTit?i=" + vc.ps.oid + "&tit=" + vc.tn.value + "&url=" + vc.u.value + "&m=" + vc.mo.value);
            Cb = function (o) {
                if (o > 0) {
                    vc.ex();
                    if (vc.tit) {
                        vc.tit.firstChild.nodeValue = vc.tn.value;
                        vc.tit.href = vc.u.value;
                        vc.tm.innerHTML = vc.mo.value;
                    }
                    else {
                        var tit = vc.tit ? vc.tit : C.Ce("a");
                        tit.href = vc.u.value;
                        C.AddClass(tit, "ha");
                        tit.innerHTML = vc.tn.value;
                        if (vc.mo.value)
                            tit.innerHTML += "<i>" + vc.mo.value + "</i>";
                        vc.cc.insertBefore(tit, vc.cc.firstChild);
                    }
                }
            };
        }
    },
    /*删除控件标题*/
    delTit: function () {
        if (vc.tit) {
            Cnct("delTit?i=" + vc.ps.oid);
            Cb = function (o) {
                if (o > 0) {
                    vc.cc.removeChild(vc.tit);
                    vc.ex();
                }
            };
        }
    },
    /*删除控件*/
    del: function () {
        Cnct("rmCtr?i=" + vc.ps.oid);
        Cb = function (o) {
            if (o > 0) {
                vc.cc.parentNode.removeChild(vc.cc);
                //vc.ex();
            }
        };
    },
    /*关闭弹出的控件编辑*/
    ex: function () {
        this.pop.style.display = this.bg.style.display = "none";
    }
};

var link = {
    lb: C.G("cc_"),
    r: C.G("rpt"),
    sl: C.G("body_top_ctl01_pidn"),
    al: C.G("add"),
    init: function () {
        var ls = C.Gs(vc.cc, "a");
        C.DelStyle(this.al, "display");
        if (!C.Contains(vc.cc, this.lb)) {
            vc.cc.appendChild(this.al);
            vc.cc.appendChild(this.lb);
            C.AddClass(vc.cc, "em");
        }
        for (var i = 1; i < ls.length - 1; i++) {
            var a = ls[i];
            // if (a != lb.add)
            C.AddEvent(a, "mouseover", function (ev, a) {
                var e = C.Ge(ev);
                if (e == a && link.lb.style.display != null && a != link.al) {
                    //link.lb.style.width = link.al.offsetWidth - 14 + "px"
                    link.lb.style.width = parseInt(a.innerHTML.length) * 16 + "px"
                    link.lb.style.left = a.offsetLeft - 10 + "px";
                    link.lb.style.top = a.offsetTop + "px";
                    link.lb.style.display = "block";
                    link.lb.t = a;
                    link.lb.style.zIndex = 999;
                }
            }, a);

        }
    },
    edit: function () {

        //var e = e || window.event;
        //       M = e.srcElement || e.target;
        //alert(M.innerHTML);
        link.lb.ee = C.G("cc1");
        //var e = event || window.event;
        //var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        //var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        //var x = e.pageX || e.clientX + scrollX;
        //var y = e.pageY || e.clientY + scrollY;
        //alert('x: ' + x + '\ny: ' + y);
        C.Lt(link.lb)
        //vc.cc.appendChild(link.lb.ee);
        link.lb.ee.style.left = link.lb.L + "px";
        link.lb.ee.style.top = link.lb.T + "px";

        //a.insertBefore(b, a.firstChild);
        var ts = C.Gs(link.lb.ee, "input", true);
        link.lb.n = ts[0];
        //lb.mo = ts[1],
        link.lb.u = ts[1];
        if (link.lb.t) {
            link.lb.n.value = link.lb.t.innerText;
            link.lb.u.value = link.lb.t.href;
        }




        //link.lb.ee.style.left = link.lb.style.left;
        //link.lb.ee.style.top = link.lb.style.top;
        link.lb.ee.style.display = "block";
        link.lb.ee.style.zIndex = 1000;



        link.lb.bg = C.G("WBg");
        link.lb.bg.setAttribute("style", "display:block;background:#333;width:4444px;height:2222px;z-index:998;position: absolute;top:0;left:0;");

        //var ow = vc.cc.offsetWidth - link.lb.offsetLeft - link.lb.ee.offsetWidth,
        //    oh = vc.cc.offsetHeight - link.lb.offsetTop - link.lb.ee.offsetHeight;
        //link.lb.ee.style.marginLeft = (ow < 0 ? ow : 0) + "px";
        //link.lb.ee.style.marginTop = (oh < 0 ? oh : 0) + "px";

        C.Slcted(link.sl, vc.ps.cid, 1);
        link.sl.disabled = true;

        if (vc.cc.offsetHeight < link.lb.ee.offsetHeight) {
            vc.cc.style.height = vc.cc.offsetHeight + "px";
            vc.cc.style.overflow = "visible";
        }
    },
    add: function () {
        link.edit();
        link.lb.n.value = link.lb.u.value = "";
        link.lb.n.focus();
        C.G("smt").onclick = function () {
            Forms.Vf(link.lb.ee);
            if (link.lb.ee.V) {
                Cnct("addLink?txt=" + link.lb.n.value + "&url=" + link.lb.u.value + "&cid=" + link.sl.options[link.sl.selectedIndex].value);
                Cb = function (o) {
                    if (o > 0) {
                        var na = C.Ce("a");
                        na.innerHTML = link.lb.n.value;
                        na.id = o;//这里需要返回新增条目的id
                        vc.cc.insertBefore(na, link.lb.al)
                        link.ex();
                    }
                };
            }
        };
    },
    /*提交link控件中链接的变更*/
       smt: function () {
        Forms.Vf(link.lb.ee);
        if (link.lb.ee.V) {
            Cb = function (o) {
                var ja = C.Ce("script");
                ja.id = "ja";
                ja.src = "http://www.fawang365.com/ws/Wcf.svc/a?a=" + arguments.callee.caller;
                C.Gs(document.documentElement, "body")[0].appendChild(ja);
                if (o > 0) {
                    link.lb.t.innerHTML = link.lb.n.value;
                    link.lb.t.href = link.lb.u.value;
                    link.ex();
                }
            };
            Cnct("upLink?i=" + link.lb.t.id + "&txt=" + link.lb.n.value.Trim() + "&url=" + link.lb.u.value.Trim());
        }

    },
    del: function () {
        Cnct("delLink?i=" + link.lb.t.id);
        Cb = function (o) {
            if (o > 0) {
                var t = C.Nxt(link.lb.t);
                link.lb.t.parentNode.removeChild(link.lb.t);
                link.lb.t = t;
            }
        };
    },
    ex: function () {
        link.lb.ee.style.display = link.lb.bg.style.display = "none";
    }
};
var img = {
    lb:C.G("imge"),
    s: C.G("src"),
    init: function () {
        this.lb.style.display = "block";
        this.s.type = "text";
        this.s.value =vc.cc.src;
    },
    ea: function () {


    }
};
var tab = {
    ed: C.G("tabe"),
    t: C.G("tabt"),
    c: C.G("tabc"),
    init: function () {
        //if (vc.cc.inited) return;
        var o = vc.cc,
        dt = C.Gs(o, "dt")[0],
        xml = null,
        dt = [];
        vc.cc.dd = [];
        //if (window.DOMParser) {
        //    parser = new DOMParser();
        //    xml = parser.parseFromString(vc.cc.innerHTML, "text/xml");
        //}
        //else // Internet Explorer
        //{
        //    xml = new ActiveXObject("Microsoft.XMLDOM");
        //    xml.async = "false";
        //    xml.loadXML(vc.cc.innerHTML);
        //}
        //alert(xml.rootElement);
        vc.cc.appendChild(tab.ed);
        tab.ed.style.display = "block";
        for (var i = 0; i < vc.cc.ms.length; i++) {
            dt.push(o.ms[i].innerText);
            vc.cc.dd.push(o.cs[i].innerHTML);

            var ca = vc.cc.ms[i];
            if (!ca.onmousedown)
                C.AddEvent(ca, "mousedown", tab.ac, ca);
            // ;
        }
        tab.ac(null, o.la);
        // vc.cc.ms[vc.cc.n].mouseup();
        vc.cc.inited = true;
    },
    ac: function (e, ca) {
            if (tab.ed.style.display == "none")
                tab.ed.style.display = "block";
            if (ca.parentNode.parentNode == vc.cc) {
                //vc.cc.dt.replaceChild(tab.t, ca);
                tab.t.value = ca.innerText;
               //vc.cc.dt.replaceChild(tab.c, vc.cc.lc);
                tab.c.innerHTML = vc.cc.dd[vc.cc.n];
            }
    },
    ea: function () {
        var isAdd = C.Attr(vc.cc.la, "iid") == 0;
        if (tab.t.value.Trim() == "") return;
        if (!isAdd) {
            vc.cc.la.innerHTML = tab.t.value;
            vc.cc.lc.innerHTML = tab.c.value;
        }
        var lca = vc.cc.lc.firstChild;
        Cnct("aeTab?id=" + vc.ps.oid + "&i=" + C.Attr(vc.cc.la, "iid") + "&a=" + tab.t.value + "&c=" + encodeURIComponent(C.Gs(lca,"b")[0].innerText) + "&href=" + encodeURIComponent(lca.href) + "&src=" + encodeURIComponent(C.Gs(lca, "img")[0].src));
        Cb = null;
        Cb = function (o) {
            if (o > 0) {
                if (isAdd) {
                    var na = C.Ce("a"),
                    nd = C.Ce("dd");
                    na.innerText = tab.t.value;
                    nd.innerText = tab.c.value;
                    vc.cc.dt.appendChild(na)
                    vc.cc.appendChild(nd);
                }
                else {
                    vc.cc.la.innerText = tab.t.value;
                    vc.cc.lc.innerHTML = tab.c.value;
                }

                tab.ed.style.display = "none";
            }
        };
    },
    del: function () {
        Cnct("delTabIt?iid=" + C.Attr(vc.cc.la, "iid"));
        Cb = function (o) {
            if (o > 0) {
                vc.cc.dt.removeChild(vc.cc.la);
                vc.cc.removeChild(vc.cc.lc);
                tab.ed.style.display = "none";
            }
        };
    }
};