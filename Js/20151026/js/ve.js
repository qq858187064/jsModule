/*
name为b的元素，将响应鼠标移入事件并显示编辑工具条
*/
var vc = {/*vc是当前控件对象的抽象*/
    wbg: "display:block;background:#333;width:4444px;height:3444px;z-index:998;position: absolute;top:0;left:0;",
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
                        if (p.tagName.toLowerCase() != "img")/*是否为单标签元素*/ {
                            vc.b.style.top = vc.b.style.left = null;
                            p.insertBefore(vc.b, p.firstChild);
                        }
                        else {
                            p.parentNode.insertBefore(vc.b, p);
                            vc.b.style.position = "absolute";
                            vc.b.style.width = p.offsetWidth + "px";
                            C.Lt(p);
                            vc.b.style.top = p.T + "px";
                            vc.b.style.left = p.L + "px";
                        }
                        p.style.position = "relative";
                        vc.b.style.display = "block";
                        //p.pop = C.G("cc0");//提升到vc顶级变量
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
                            case "art":
                                art.insert();
                                break;
                            case "C.uc":
                                if (vc.cc.tagName == "IMG") {
                                    //img.init();
                                    //return;
                                }
                                else if (vc.cc.tagName == "A") {
                                    link.lb = C.G("cc_");
                                    link.lb.t = vc.cc;
                                    //link.edit();
                                    link.lb.t.id = vc.ps.oid;
                                    var hi = C.Gs(vc.cc, "img");
                                    if (hi.length > 0) {
                                        // link.lb.t.href="javascript:"
                                        vc.cc.img = hi[0];
                                        if (!link.lb.t.hf) {
                                            link.lb.t.hf = vc.cc.href;
                                            //console.log(link.lb.t.hf)
                                            C.DelAttr(vc.cc, "href");
                                            //console.log(link.lb.t.hf+"ed")

                                        }
                                        vc.cc.ondblclick = function (e) {
                                            var t = C.Ge(e);
                                            //if (t == "A")
                                            //    link.edit();
                                            if (t.tagName == "IMG") {
                                                vc.cc = t;
                                                img.init();
                                                if (t.parentNode.getAttribute("p").indexOf("C.uc") > -1) {
                                                    C.G("ist").onclick = function () {
                                                        img.ea();
                                                        //Cb = function () { };
                                                        img.sv();
                                                        if (vc.b)
                                                            link.lb.t.removeChild(vc.b);
                                                        //C.DelAttr(vc.cc, "name");
                                                        C.DelAttr(link.lb.t, "p")
                                                        C.DelAttr(link.lb.t, "id")
                                                        C.DelStyle(link.lb.t);
                                                        // C.DelAttr(link.lb.t, "id")
                                                        //var oh = link.lb.t.cloneNode(true);
                                                        C.Jsp("editCtrl?i=" + vc.ps.oid + "&s=" + encodeURIComponent(C.htmlEncode(link.lb.t.outerHTML.replace('<img name="b"', '<img name=""'))));//name属性好像删不掉
                                                    };
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case "prs":
                                prs.init();
                                break;
                            case "guige":
                                C.DelStyle(C.G("add4"), "display");
                                C.G("add4").style.marginLeft = "100px";
                               dupfname.appendChild(C.G("add4"));
                                C.DelStyle(C.G("add5"), "display");
                                C.G("add5").style.marginLeft = "20px";
                               dupfname.appendChild(C.G("add5"));
                                break;
                            case "tab":
                                tab.init();
                                break;
                            case "pics":
                                pics.init();
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
        else if (vc.cc.tagName == "A") {
            // link.lb = vc.cc;
            link.edit();
            link.lb.n.value = vc.b.nextSibling.nodeValue;
            link.lb.u.value = link.lb.t.hf;

            /*以上原版为以下内容，上部内容需要检验
            link.lb = vc.cc;
            link.edit();
            link.lb = C.G("cc_");
            */
            return;
        }
        else if (vc.cc.tagName == "IMG") {
            //C.Slice.call(arguments, 3))
            img.init();
            return;
            // lb:C.G("imge"),

        }

        if (vc.ps.tp == "art") {
            art.init();
            return;
        }

        /*编辑商品信息chenjuntao 2015/10/14*/
        if (vc.ps.tp == "guige") {
            guige.init();
            return;
        }

        if (vc.ps.tp == "prode") {
            prode.init();
            return;
        }
        if (vc.ps.tp == "prospeci") {
            prospeci.init();
            return;
        }

        
        //if (vc.ps.tp == "prs") {
        //    prs.init();
        //    return;
        //}

        //if (vc.cc.tagName.toLowerCase() == "img") {
        //    img.ea();
        //    return;
        //}

        //vc.bg = C.G("WBg");
        //C.Bd().insertBefore(this.pop, this.bg);
        //Dialog(this.bg, this.pop);
        this.dlg();

        C.G("dtit").style.display = this.tit ? "inline-block" : "none";
        var ts = C.Gs(this.cc.pop, "input", true);
        this.tn = ts[0];
        this.mo = ts[1],
        this.u = ts[2];

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
    /*弹出框*/
    dlg: function () {
        vc.bg = C.G("WBg");
        C.Bd().insertBefore(vc.cc.pop, this.bg);
        Dialog(this.bg, vc.cc.pop);
    },
    /*提交新增、修改控件*/
    smt: function () {
        Forms.Vf(this.pop);
        if (this.pop.V) {
            C.Jsp("aeTit?i=" + vc.ps.oid + "&tit=" + vc.tn.value + "&url=" + vc.u.value + "&m=" + vc.mo.value);
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
            C.Jsp("delTit?i=" + vc.ps.oid);
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
        /*chenjuntao20151015start*/
        if (vc.ps.tp == "guige") {
            guige.init();
            return;
        }

        if (vc.ps.tp == "art") {
            art.del();
            return;
        }
        /*chenjuntao20151015end*/

        C.Jsp("rmCtr?i=" + vc.ps.oid);
        Cb = function (o) {
            if (o > 0) {
                vc.cc.parentNode.removeChild(vc.cc);
                //vc.ex();
            }
        };
    },
    /*关闭弹出的控件编辑*/
    ex: function (pop) {
        if (vc.bg)
            vc.bg.style.display = "none";
        (pop || vc.cc.pop).style.display = "none";
    }
};
var link = {
    lb: C.G("cc_"),
    r: C.G("rpt"),
    sl: C.G("body_top_ctl00_pidn"),
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
        link.lb.ee = C.G("cc1");
        vc.cc.pop = link.lb.ee;
        //a.insertBefore(b, a.firstChild);
        var ts = C.Gs(link.lb.ee, "input", true);
        link.lb.n = ts[0];
        //lb.mo = ts[1],
        link.lb.u = ts[1];
        if (link.lb.t) {
            link.lb.n.value = link.lb.t.innerText;
            //if (vc.cc.tagName == "A")
            //{
            //    link.lb.n.value = vc.b.nextSibling.nodeValue;
            //    link.lb.t.id = vc.ps.oid;
            //    C.DelAttr(link.lb.t, "href");
            //    C.Gs(vc.cc, "img")[0].ondblclick = function () {
            //        img.init();
            //    }
            //}
            link.lb.u.value = link.lb.t.href;
        }

        //link.lb.ee.style.display = "block";
        //link.lb.ee.style.zIndex = 1000;
        //link.lb.bg = C.G("WBg");

        vc.dlg();

        C.Lt(link.lb.t)
        link.lb.ee.style.left = link.lb.t.L + "px";
        link.lb.ee.style.top = link.lb.t.T + "px";
        /*合并时不明添加start*/
        link.lb.ee.style.left = link.lb.L + "px";
        link.lb.ee.style.top = link.lb.T + "px";
        var ts = C.Gs(link.lb.ee, "input", true);
        link.lb.n = ts[0];
        link.lb.u = ts[1];
        if (link.lb.t) {
            link.lb.n.value = link.lb.t.innerText;
            link.lb.u.value = link.lb.t.href;
        }
        link.lb.ee.style.display = "block";
        link.lb.ee.style.zIndex = 1000;
        if (document.all)
            link.lb.ee.style.filter = 'alpha(opacity=' + 90 + ')';
        else
            link.lb.ee.style.opacity = 0.9;

        link.lb.bg = C.G("WBg");
        /*合并时不明添加end*/
        /*屏蔽还是不屏蔽不明确，线上未屏蔽start*/
        link.lb.bg.setAttribute("style", "display:block;background:#333;width:4444px;height:3444px;z-index:998;position: absolute;top:0;left:0;");
        /*屏蔽还是不屏蔽不明确，线上未屏蔽end*/
        /*改成dlg*/
        //link.lb.bg.setAttribute("style", "display:block;background:#333;width:4444px;height:2222px;z-index:998;position: absolute;top:0;left:0;");

        C.Slcted(link.sl, vc.ps.cid, 1);
        link.sl.disabled = true;

        if (vc.cc.offsetHeight < link.lb.ee.offsetHeight) {
            vc.cc.style.height = vc.cc.offsetHeight + "px";
            vc.cc.style.overflow = "visible";
        }
        //if (arguments.callee.caller == vc.set)
        //{
        //    img.init();
        //}

        //vc.bg = link.lb.bg;
        //vc.pop = link.lb.ee;
    },
    /*新增link前后移动start*/
    mv: function (d) {
        var j, i, t = link.lb.t;
        if (d) {
            i = C.Nxt(t);
            j = C.Nxt(i);
        }
        else {
            j = i = C.Pre(t);
        }
        var Cls = i.getAttribute("class") || i.getAttribute("className")
        if (Cls != "ha" && Cls != "al")
            vc.cc.insertBefore(t, j);
    },
    /*新增link前后移动end*/
    add: function () {
        link.edit();
        link.lb.n.value = link.lb.u.value = "";
        link.lb.n.focus();
        C.G("smt").onclick = function () {
            Forms.Vf(link.lb.ee);
            if (link.lb.ee.V) {

                C.Jsp("addLink?txt=" + encodeURI(link.lb.n.value.Trim()) + "&url=" + link.lb.u.value + "&cid=" + link.sl.options[link.sl.selectedIndex].value); /*为txt添加url编码*/
                Cb = function (o) {
                    if (o > 0) {
                        var na = C.Ce("a");
                        na.innerHTML = link.lb.n.value;
                        na.id = o;//这里需要返回新增条目的id
                        vc.cc.insertBefore(na, link.al)/*由vc.cc.insertBefore(na, link.lb.al)改成*/
                        // link.ex();/*线上未屏蔽待验证*/
                        vc.ex(link.lb.ee)
                        /*新增排序start*/
                        var a = ""
                        var ls = C.Gs(vc.cc, "a");
                        for (var i = 1; i < ls.length - 2; i++) {
                            a += ls[i].id + ",";
                        }
                        a = a.substr(0, a.length - 1);
                        C.Jsp("aesort?cid=" + link.sl.options[link.sl.selectedIndex].value + "&sort=" + a);
                        Cb = function () { }
                        /*新增排序end*/

                    }
                };
            }
        };
    },
    /*提交link控件中链接的变更*/
    smt: function () {
        /*新增 组织排列顺序start*/
        var x = ""
        var ls = C.Gs(vc.cc, "a");
        for (var i = 1; i < ls.length - 2; i++) {
            x += ls[i].id + ",";
        }
        x = x.substr(0, x.length - 1);
        /*新增 组织排列顺序end*/
        Forms.Vf(link.lb.ee);
        if (link.lb.ee.V) {
            Cb = function (o) {
                if (o > 0) {
                    link.lb.t.innerHTML = link.lb.n.value;
                    link.lb.t.href = link.lb.u.value;
                    vc.ex(link.lb.ee)
                }
            };

            // C.Jsp("upLink?i=" + link.lb.t.id + "&txt=" + link.lb.n.value.Trim() + "&url=" + link.lb.u.value.Trim());
            var a = C.Ce("a");
            a.href = link.lb.u.value.Trim();
            a.name = "b"
            a.innerHTML = link.lb.n.value.Trim();
            if (vc.cc.img) {
                a.appendChild(vc.cc.img);
                C.Jsp("editCtrl?i=" + link.lb.t.id + "&s=" + encodeURIComponent(C.htmlEncode(a.outerHTML)));
            }
            else
                C.Jsp("upLink?i=" + link.lb.t.id + "&txt=" + encodeURI(link.lb.n.value.Trim()) + "&url=" + link.lb.u.value.Trim());


            //

            //C.Jsp(encodeURIComponent("editCtrl?cont=<a href=" + link.lb.u.value.Trim() + ">" + link.lb.n.value.Trim() + vc.cc.img.outerHTML + "</a>"));
        }

        C.Jsp("aesort?cid=" + link.sl.options[link.sl.selectedIndex].value + "&sort=" + x);/*新增提交排序*/
    },
    del: function () {
        C.Jsp("delLink?i=" + link.lb.t.id);
        Cb = function (o) {
            if (o > 0) {
                var t = C.Nxt(link.lb.t);
                link.lb.t.parentNode.removeChild(link.lb.t);
                link.lb.t = t;
                /*新增 删除后重新排序start*/
                var a = ""
                var ls = C.Gs(vc.cc, "a");
                for (var i = 1; i < ls.length - 2; i++) {
                    a += ls[i].id + ",";
                }
                a = a.substr(0, a.length - 1);
                C.Jsp("aesort?cid=" + vc.ps.cid + "&sort=" + a);
                Cb = function () { }
                /*新增 删除后重新排序end*/
            }
        };
    }
    //,
    //ex: function () {
    //    link.lb.ee.style.display = link.lb.bg.style.display = "none";
    //}
};
var img = {
    lb: C.G("imge"),
    s: C.G("fu"),
    net: C.G("net"),
    is: "",
    init: function () {
        //var im = vc.cc.cloneNode(true);
        //im.style.position = null;
        //C.DelAttr(im, "p")
        //this.is = im.outerHTML;
        vc.cc.pop = this.lb;
        vc.dlg();
        if (net.checked)
            img.txt();
        else {
            img.s.type = "file";
            img.s.value = null;
        }
    },
    ea: function () {
        if (this.s.value.length > 3) {
            Forms.Vf(this.lb);
            this.lb.V = true;
            var sr = this.lb.fu.value,
                b = "";
            //console.log("ea中：" +arguments.callee+ this.ea.caller.name)//img.smt    C.G("ist").onclick
            this.is = "<img name='b' src=\"" + sr + "\" ",
                cls = vc.cc.getAttribute("class") || vc.cc.getAttribute("className"),
                wht = this.lb.wht.value,
                hit = this.lb.hit.value,
                dis = this.lb.dis.value;
            if (cls) {
                this.is += "class=" + cls;
            }
            if (wht || hit) {
                this.is += "style=\"" + (wht ? "width:" + wht + "px;" : "") + (hit ? "height:" + hit + "px" : "") + "\"";
            }
            if (dis) {
                this.is += " alt=\"" + dis + "\"";
            }
            this.is += " />";
            vc.cc.outerHTML = this.is;
            console.log(vc.cc.outerHTML)

            ///vc.cc.src = sr;
            //setTimeout(function () { console.log(window.Hi.document.body.firstChild.innerHTML)}, 2000)
        }
    },
    smt: function () {
        img.ea();
        C.Jsp("editCtrl?i=" + vc.ps.oid + "&s=" + this.is);
        Cb = function (o) {
            if (o > 0) {
                img.sv();
            }
        }
    },
    sv: function () {
        vc.cc.src = img.s.value;
        //if (img.lb.wht.value || img.lb.hit.value) {
        //    var wh = (img.lb.wht.value ? "width:" + img.lb.wht.value + "px;" : "") + (img.lb.hit.value ? "height:" + img.lb.hit.value + "px" : "");
        //    vc.cc.style = wh;
        //    console.log(vc.cc.style.width + "_" + vc.cc.style.height + "_" + wh)
        //}
        if (img.lb.wht.value) {
            vc.cc.style.width = img.lb.wht.value + "px";
        }
        if (img.lb.hit.value) {
            vc.cc.style.height = img.lb.hit.value + "px";
        }
        if (img.lb.dis.value) {
            vc.cc.alt = img.lb.dis.value;
        }
        vc.ex(img.pop);
    },
    txt: function () {
        this.s.type = "text";
        this.s.value = vc.cc.src;
        if (vc.cc.style) {
            img.lb.wht.value = vc.cc.style.width.slice(0, -2);
            img.lb.hit.value = vc.cc.style.height.slice(0, -2);
            img.lb.dis.value = vc.cc.alt;
        }


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
        C.Jsp("aeTab?id=" + vc.ps.oid + "&i=" + C.Attr(vc.cc.la, "iid") + "&a=" + tab.t.value + "&c=" + encodeURIComponent(C.Gs(lca, "b")[0].innerText) + "&href=" + encodeURIComponent(lca.href) + "&src=" + encodeURIComponent(C.Gs(lca, "img")[0].src));
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
        C.Jsp("delTabIt?iid=" + C.Attr(vc.cc.la, "iid"));
        Cb = function (o) {
            if (o > 0) {
                vc.cc.dt.removeChild(vc.cc.la);
                vc.cc.removeChild(vc.cc.lc);
                tab.ed.style.display = "none";
            }
        };
    }
};
/*商品图片编辑shi*/
var pics = {
    tb: C.G("tb"),
    al: C.G("addtab"),
    init: function () {
        //if (vc.cc.inited) return;
        var o = vc.cc,
        dt = C.Gs(o, "dt")[0],
        dd = C.Gs(o, "dd"),
        xml = null,
        dt = [];
        vc.cc.dd = [];


        C.DelStyle(this.al, "display");
        vc.cc.appendChild(pics.al); vc.cc.appendChild(pics.tb); pics.al.style.display = "block";/*插入到dt后Shi*/

        /*暂时屏蔽end*/
        for (var i = 0; i < vc.cc.ms.length; i++) {
            dt.push(o.ms[i].innerText);
            vc.cc.dd.push(o.cs[i].innerHTML);

            var ca = vc.cc.ms[i];
            if (!ca.onmousedown) {
                C.AddEvent(dd[i], "dblclick", function (ev, ca) {
                    pics.tb.i = ca;
                    pics.edit();
                }, dd[i]);  /*将mousedown事件改为dbclick事件Shi*/
            }
            /*添加鼠标经过小图片时悬浮删除按钮start*/
            C.AddEvent(ca, "mouseover", function (ev, ca) {
                var e = C.Ge(ev);
                if (e == ca && pics.tb.style.display != null && ca != pics.al) {
                    pics.tb.style.width = 16 + "px"
                    pics.tb.style.left = 320 - 10 + "px";
                    pics.tb.style.top = 320 + "px";
                    pics.tb.style.display = "block";
                    pics.tb.t = ca;
                    pics.tb.style.zIndex = 999;
                }
            }, ca);
            /*添加鼠标经过小图片时悬浮删除按钮end*/
        }
        vc.cc.inited = true;
    },
    add: function () {
        pics.edit();
    },
    edit: function () {

        pics.tb.cc = C.G("imge");

        C.Lt(pics.tb);
        // pics.tb.cc.fu.files = pics.tb.t.src;
        pics.tb.cc.style.left = M1a.offsetLeft + "px";
        pics.tb.cc.style.top = M1a.offsetHeight + "px";
        pics.tb.cc.style.width = "350px";
        pics.tb.cc.style.display = "block";
        pics.tb.cc.style.zIndex = 1000;

        /*遮罩*/
        pics.bg = C.G("WBg");
        pics.bg.setAttribute("style", vc.wbg);
    },
    smt: function () {

        var id = 0, iid = 0, pid = C.G("number"), src = C.G("fu");
        if (pics.tb.t != undefined)
            iid = pics.tb.t.id;
        if (pics.tb.i != undefined)
            id = pics.tb.t.name;
        C.Jsp("/aeproinimg?id=" + id + "&iid=" + iid + "&pid=" + pid.innerText + "&src=" + src.value, "../../flhz/pf.svc");
        Cb = function (o) {
            if (o > 0) {
                if (id > 0) {
                    //编辑
                    pics.tb.t.src = src.value;
                    pics.tb.i.children[0].src = src.value;
                } else {
                    //新增
                    if (vc.cc.cs != undefined) {
                        for (var i = 0; i < vc.cc.cs.length; i++) {
                            vc.cc.cs[i].style.display = "none";
                        }
                    }
                    var im = C.Ce("img");
                    im.src = src.value;
                    im.id = id;
                    im.name = 0;

                    im.setAttribute("n", im.length + 1);
                    im.o = M1a;

                    im.o = vc.cc;
                    //vc.cc.
                        dt.appendChild(im);
                    var d = C.Ce("dd");
                    var im2 = C.Ce("img");
                    im2.src = src.value;
                    d.appendChild(im2);
                    vc.cc.dd.push(im);
                    //vc.cc.cs.push(d);
                    vc.cc.insertBefore(d, pics.al);
                    im.ct = d;

                    C.AddEvent(im, vc.cc.en, Tabs.prototype.swc, im);
                    Tabs.prototype.swc(null, im);
                }
                pics.ex();
            }
        }
    },
    del: function () {
        var id = pics.tb.t.name;
        C.Jsp("/dproinimg?id=0&iid=" + id, "../../flhz/pf.svc");
        Cb = function (o) {
            if (o > 0) {
                pics.tb.t.remove();
                //pics.tb.i.remove();
                //Tabs.prototype.swc(null, vc.cc.cs[0]);
            }
        }
    },
    ex: function () {
        this.tb.cc.fu.type = "file";
        pics.bg.style.display = this.tb.cc.style.display = "none";
    }
};

/*seo 编辑 start*/
var seo = {
    nm: gqs("nm"),
    tit: C.G("stit"),
    dis: C.G("dis"),
    key: C.G("key"),
    k: C.G("seo_seo_k"),
    d: C.G("seo_seo_d"),
    t: document.title,
    init: function () {
        seo.dis.value = seo.d.content;
        seo.key.value = seo.k.content;
        seo.tit.value = seo.t.substring(0, seo.t.lastIndexOf('_'));
    },
    ae: function () {
        Cb = function (o) {
            if (o > 0) {
                alert("保存成功");
            } else alert("保存失败");
        };
        C.Jsp("aeseo?nm=" + encodeURIComponent(seo.nm) + "&tit=" + encodeURIComponent(seo.tit.value.Trim()) + "&dis=" + encodeURIComponent(seo.dis.value.Trim()) + "&key=" + encodeURIComponent(seo.key.value.Trim()));
    }
}
/*seo 编辑 end/

/*根据name获取地址连参数值start*/
function gqs(name) {
    var h = window.location.search;
    if (h == "") {
        h = window.location.host;
        return h.substring(h.indexOf(".") + 1, h.lastIndexOf("."));
    } else {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
}
/*根据name获取地址连参数值end*/

var art = {
    ar: C.G("art"),
    atit: C.G("tit"),
    aauthor: C.G("author"),
    aorigi: C.G("origi"),
    aimg: C.G("img"),
    atm: C.G("tm"),
    acid: C.G("body_top_ctl00_cid"),
    aedt: C.G("edt"),
    artb: C.G("artb"),
    acount: C.G("count"),
    show: C.Gn("show"),
    url: C.G("url"),
    ae: function () {

        var sho = false;
        for (var a = 0; a < art.show.length; a++) {
            if (art.show[a].checked == true) {
                sho = art.show[a].value;
            }
        }
        if (gqs("i") != null) {

            var h = window.location.href;
            if (!/^[1-9][\d]*$/.test(art.acount.value)) {
                alert("请输入正整数！");
                return false;
            }
            if (art.atm.value == "") {
                alert("请选择时间！");
                return false;
            }
            var data = "show=" + sho + "&type=2&aid=" + gqs("i") + "&tit=" + encodeURIComponent(C.htmlEncode(art.atit.value)) + "&author=" + art.aauthor.value + "&origi=" + art.aorigi.value + "&tm=" + art.atm.value + "&cid=" + art.acid.options[art.acid.selectedIndex].value + "&body=" + encodeURIComponent(C.htmlEncode(edt.contentWindow.editor1.html())) + "&count=" + art.acount.value;
            C.EXHR(function (arr) {
                if (arr > 0) {
                    alert("编辑成功！");
                    Dialog.Close();
                } else {
                    alert("编辑失败！");
                }
            }, "POST", "../fwdh/art.ashx", data);

            /*edit by ShiJianYing at 2015/9/26,update jquery methods to ajax */


        } else {
            if (!/^[1-9][\d]*$/.test(art.acount.value)) {
                alert("请输入正整数！");
                return false;
            }
            if (art.atm.value == "") {
                alert("请选择时间！");
                return false;
            }
            var data = "show=" + sho + "&aid=0&tit=" + art.atit.value + "&author=" + art.aauthor.value + "&origi=" + art.aorigi.value + "&tm=" + art.atm.value + "&cid=" + art.acid.options[art.acid.selectedIndex].value + "&body=" + encodeURIComponent(C.htmlEncode(edt.contentWindow.editor1.html())) + "&count=" + art.acount.value;
            C.EXHR(function (arr) {
                if (arr > 0) {
                    alert("添加成功！");
                    var h = window.location.host;
                    h = h.substring(h.indexOf(".") + 1);
                    var url = "http://www.fawang365.com/page/p.aspx?nm=art&m=1&i=" + arr;
                    switch (h) {
                        case "flhz.org":
                            url = "http://www.flhz.org/page/p.aspx?nm=hzdetail&m=2&i=" + arr;
                            break;
                        case "flyj.org":
                            url = "http://www.flyj.org/page/p.aspx?nm=fzcmdetail&m=3&i=" + arr;
                            break;
                    }
                    art.url.innerText = url;
                } else {
                    alert("编辑失败！");
                }
            }, "POST", "../fwdh/art.ashx", data);

            /*edit by ShiJianYing at 2015/9/26,update jquery methods to ajax */


        }
    },
    init: function () {
        C.EXHR(function (arr) {
            if (arr != "") {
                var a = arr.split("@@@@@");
                art.atit.value = a[2];
                art.aauthor.value = a[8];
                art.aorigi.value = a[9];
                edt.contentWindow.editor1.html(a[7].replace("<span id=\"span\"></span>", "<img src=" + a[6] + "\ data-ke-src=" + a[6] + " alt=\"\" //>"));
                art.acount.value = a[1]
                /*绑定select*/
                C.Slcted(art.acid, a[4], 1);
                Dialog('WBg', 'art');
            } else {
                alert("编辑失败！");
            }
        }, "GET", "../fwdh/art.ashx?aid=" + gqs("i") + "&type=3");
    },
    del: function () {

        Cb = function (o) {
            if (o > 0)
                alert("删除成功！");
            else
                alert("删除失败！");
        };
        Str = "/delArt?id=" + gqs("i");
        C.Jsp(Str, "http://www.fawang365.com/flhz/pf.svc");
    },
};


var duprices = C.G("body_m_5510_prices"),
    duchoo = C.G("body_m_5510_choo"),
    dupid = C.G("body_m_5509_pid"),
    ducid = C.G("body_m_5510_cid"),
    dupname = C.G("body_m_5510_pname"),
    dupfname = C.G("body_m_5510_pfname"),
    dufuw = C.G("body_m_5510_fuw"),
    dupropri = C.G("body_m_5510_propri"),
    prds = C.G("body_top_ctl00_prds"),
    pctg = C.G("body_top_ctl00_pctg");


/*编辑商品咨询 chenjuntao 2015/10/09*/
var guige = {
    er: C.G("guer"),
    pric: duprices,
    init: function (aer) {
        if (aer == 1) {
            C.DelStyle(duprices, "display")
            C.G("edguige").style.display = "none";
            guige.er.innerHTML = "";

        } else {
            C.DelStyle(C.G("edguige"), "display")
            C.G("pprice").value = duprices.innerHTML.replace("￥", "");
            duprices.style.display = "none";
            //Dialog('WBg', 'hus');
        }
    },
    shuba: function (del) {
        var pprice = C.G("pprice").value,
        value = C.Gs(duchoo, "input"),
        id = C.G("number").innerHTML,
        prolist = C.G("body_m_mr_prolist");
        if (del == 0) {
            if (/^-?\d+\.?\d{0,2}$/.test(pprice.Trim()) == false) {
                guige.er.innerHTML = "价格不正确！";
                return;
            } else {
                guige.er.innerHTML = "";
            }
        }
        var t2 = new Array();
        var temp = window["vid"].split(',');
        var tempa = 0;
        for (i = 1; i < temp.length; i++) {

            t2[tempa] = window['a' + temp[i]].value == undefined ? window['a' + temp[i]].id : window['a' + temp[i]].value;
            tempa++;
        }
        for (j = 0; j < t2.length; j++) {
            if (t2[j] == "") {
                guige.er.innerHTML = "请补全属性值！";
                return;
            }
        }
        Cb = function (o) {
            if (o > 0) {
                if (del == 0) {
                    C.DelStyle(duprices, "display")
                    duprices.innerHTML = "￥" + C.G("pprice").value;
                    C.G("edguige").style.display = "none";
                    guige.er.innerHTML = "";
                } else {
                    guige.er.innerHTML = "删除成功！";
                }

            } else {
                guige.er.innerHTML = "提交失败！";
            }
        }
        if (pprice == "") {
            pprice = 0.00;
        }
        if (id == "") {
            id = 0;
        }
        Str = "/aehubatrus?id=" + id + "&pid=" + dupid.innerHTML + "&price=" + pprice + "&spfi=&hus=" + t2.sort() + "&del=" + del;
        C.Jsp(Str, "../../flhz/pf.svc");
    }
};
/*编辑产品详情 chenjuntao2015/10/17*/
var prode = {
    er: C.G("erproe"),
    init: function () {
        proedt.contentWindow.editor1.html(C.G("detile").innerHTML);
        Dialog('WBg', 'Cck');
    },
    shuba: function (del) {

        Cb = function (o) {
            if (o > 0) {
                prode.er.innerHTML = "成功！";
                C.G("detile").innerHTML = proedt.contentWindow.editor1.html();
                Dialog.Close();
            } else {
                prode.er.innerHTML = "失败！";
            }
        }
        if (dupid.innerHTML == "") {
            prode.er.innerHTML = "产品不存在！";
            return;
        }
        var details = encodeURIComponent(C.htmlEncode(proedt.contentWindow.editor1.html()));
        if (details == "") {
            prode.er.innerHTML = "请填写规格！";
            return;
        }
        Str = "/aeProduct?id=" + dupid.innerHTML + "&cid=0&nm=&cont=&price=0&pro=&details=" + details + "&del=" + del;
        C.Jsp(Str, "../../flhz/pf.svc");
    }
}

/*编辑商品规格 chenjuntao2015/10/17*/
var prospeci = {
    er: C.G("erspeci"),
    init: function () {
        speciedt.contentWindow.editor1.html(C.G("parameter").innerHTML);
        Dialog('WBg', 'Cck1');
    },
    shuba: function (del) {

        Cb = function (o) {
            if (o > 0) {
                prospeci.er.innerHTML = "成功！";
                C.G("parameter").innerHTML = speciedt.contentWindow.editor1.html();
                Dialog.Close();
            } else {
                prospeci.er.innerHTML = "失败！";
            }
        }
        if (C.G("number").innerHTML == "") {
            prospeci.er.innerHTML = "商品不存在！";
            return;
        }
        var spfi = encodeURIComponent(C.htmlEncode(speciedt.contentWindow.editor1.html()));
        if (spfi == "") {
            prospeci.er.innerHTML = "请填写内容！";
            return;
        }
        Str = "/aehubatrus?id=" + C.G("number").innerHTML + "&pid=0&price=0" + "&spfi=" + spfi + "&hus=&del=" + del;
        C.Jsp(Str, "../../flhz/pf.svc");
    }
    // , del: function () {
    //    Cb = function (o) {
    //        if (o > 0) {
    //            C.G("parameter").innerHTML = "";
    //        } else {
    //        }
    //    }
    //    if (C.G("number").innerHTML == "") {
    //        prospeci.er.innerHTML = "商品不存在！";
    //        return;
    //    }
    //    Str = "/aehubatrus?id=" + C.G("number").innerHTML + "&pid=0&price=0" + "&spfi=&hus=&del=" + del;
    //    C.Jsp(Str, "../../flhz/pf.svc");
    //}
}
/*编辑商品属性值chenjuntao 2015/10/09*/
var prs = {
    lb: C.G("prs"),
    ld: C.G("prd"),
    r: C.G("rpt1"),
    al: C.G("add1"),
    dl: C.G("add2"),
    lbd: C.G("prd"),
    dld: C.G("adds"),//添加属性
    produ: C.G("produ"),//添加属性弹出框
    init: function () {
        var ls = C.Gs(vc.cc, "a");
        C.DelStyle(this.dld, "display");
        if (!C.Contains(vc.cc, this.lb)) {
            vc.cc.appendChild(this.dl);
            vc.cc.appendChild(this.lb);
            vc.cc.appendChild(this.dld);
            C.AddClass(vc.cc, "em");
        }
        /*添加属性值事件*/
        for (var i = 0; i < ls.length - 2; i++) {
            var a = ls[i];
            C.AddEvent(a, "mouseover", function (ev, a) {
                var e = C.Ge(ev);
                if (e == a && prs.lb.style.display != null && a != prs.al) {
                    prs.lb.style.width = parseInt(a.innerHTML.length) * 16 + "px"
                    prs.lb.style.left = a.offsetLeft - 10 + "px";
                    prs.lb.style.top = a.offsetTop + "px";
                    prs.lb.style.display = "block";
                    prs.lb.t = a;
                    prs.lb.style.zIndex = 999;
                    //alert(a.innerHTML);
                }
            }, a);

        }
        /*添加属性事件*/
        var li = C.Gs(vc.cc, "i");
        for (var j = 0; j < li.length; j++) {
            var tempi = li[j];
            tempi.title = "双击编辑属性";
            C.AddEvent(tempi, "dblclick", function (ev, tempi) {
                var tempe = C.Ge(ev);
                if (tempe == tempi && prs.lbd.style.display != null) {
                    prs.lbd.style.width = parseInt(tempi.innerHTML.length) * 16 + "px"
                    prs.lbd.style.left = tempi.offsetLeft - 10 + "px";
                    prs.lbd.style.top = tempi.offsetTop + "px";
                    prs.lbd.style.display = "block";
                    prs.lbd.t = tempi;
                    prs.lbd.style.zIndex = 999;
                    prs.prdins();
                }
            }, tempi);

        }
    },
    edit: function () {
        prs.lb.ee = C.G("cc2");

        C.Lt(prs.lb)

        prs.lb.ee.style.left = prs.lb.L + "px";
        prs.lb.ee.style.top = prs.lb.T + "px";


        var ts = C.Gs(prs.lb.ee, "input", true);
        prs.lb.n = ts[0];

        prs.lb.u = ts[1];

        if (prs.lb.t) {
            prs.lb.n.value = prs.lb.t.innerText;
            prs.lb.n.id = prs.lb.t.id;
            prs.lb.n.name = prs.lb.t.name;
        }

        prs.lb.ee.style.display = "block";
        prs.lb.ee.style.zIndex = 1000;
        if (document.all)
            prs.lb.ee.style.filter = 'alpha(opacity=' + 90 + ')';
        else
            prs.lb.ee.style.opacity = 0.9;


        prs.lb.bg = C.G("WBg");
        prs.lb.bg.setAttribute("style", vc.wbg);


        //prs.sl.disabled = true;

        if (vc.cc.offsetHeight < prs.lb.ee.offsetHeight) {
            vc.cc.style.height = vc.cc.offsetHeight + "px";
            vc.cc.style.overflow = "visible";
        }
    },
    add: function () {
        prs.lb.n.value = "";
        prs.lb.n.focus();
        C.G("sub").onclick = function () {
            Cb = function (o) {
                if (o > 0) {
                    var na = C.Ce("a");
                    na.innerHTML = prs.lb.n.value;
                    na.id = o;//这里需要返回新增条目的id
                    na.name = prs.lb.n.name;
                    na.setAttribute("target", "_blank");
                    vc.cc.insertBefore(na, prs.dl)
                    prs.ex();
                }
            }
            Str = "/aeprdatrs?id=0&rid=" + prs.lb.n.name + "&value=" + prs.lb.n.value;
            C.Jsp(Str, "../../flhz/pf.svc");
        }
    },
    /*添加属性*/
    addprds: function () {
        prs.prdin();
        prs.produ.n.value = "";
        prs.produ.n.focus();
        C.G("suprs").onclick = function () {
            Cb = function (o) {
                if (o > 0) {
                    var na = C.Ce("a");
                    na.innerHTML = prs.produ.n.value;
                    na.id = o;//这里需要返回新增条目的id 
                    na.name = rid;
                    na.setAttribute("target", "_blank");
                    vc.cc.insertBefore(na, C.Gn("" + rid + "")[0]);
                    prs.exds();
                }
            }
            var rid = prds.options[prds.selectedIndex].value;
            if (rid == "") {
                C.G("prdser").innerHTML = "请先添加分类！";
                return;
            }
            Str = "/aeprdatrs?id=0&rid=" + rid + "&value=" + prs.produ.n.value;
            C.Jsp(Str, "../../flhz/pf.svc");
        }
    },
    sub: function () {
        Cb = function (o) {
            if (o > 0) {
                prs.lb.t.innerHTML = prs.lb.n.value;
                prs.ex();
            }
        }
        Str = "/aeprdatrs?id=" + (prs.lb.n.id == "" ? 0 : prs.lb.n.id) + "&rid=" + prs.lb.n.name + "&value=" + prs.lb.n.value;
        C.Jsp(Str, "../../flhz/pf.svc");

    },
    del: function () {
        //删除商品属性值
        C.Jsp("dprdatrs?id=" + prs.lb.t.id, "../../flhz/pf.svc/");
        Cb = function (o) {
            if (o > 0) {
                var t = C.Nxt(prs.lb.t);
                prs.lb.t.parentNode.removeChild(prs.lb.t);
                prs.lb.t = t;
            }
        };

    },
    ex: function () {
        prs.lb.ee.style.display = prs.lb.bg.style.display = "none";
    },
    /*弹出添加属性框*/
    prdin: function () {
        prs.produ.ee = C.G("produs");

        C.Lt(prs.produ)

        prs.produ.ee.style.left = (document.body.offsetWidth - 540) / 2 + 300 + "px";
        prs.produ.ee.style.top = "430px";


        var ts = C.Gs(prs.produ.ee, "input", true);
        prs.produ.n = ts[0];
        prs.produ.u = ts[1];
        if (prs.produ.t) {
            prs.produ.n.value = prs.lbd.t.innerText;
            prs.produ.n.id = prs.lbd.t.id;
        }

        prs.produ.ee.style.display = "block";
        prs.produ.ee.style.zIndex = 1000;
        if (document.all)
            prs.produ.ee.style.filter = 'alpha(opacity=' + 90 + ')';
        else
            prs.produ.ee.style.opacity = 0.9;


        prs.produ.bg = C.G("WBg");
        prs.produ.bg.setAttribute("style", vc.wbg);


        //prs.sl.disabled = true;

        if (vc.cc.offsetHeight < prs.produ.ee.offsetHeight) {
            vc.cc.style.height = vc.cc.offsetHeight + "px";
            vc.cc.style.overflow = "visible";
        }
    },
    /*弹出编辑属性分类框*/
    prdins: function () {
        prs.lbd.ee = C.G("cc3");

        C.Lt(prs.lbd)

        prs.lbd.ee.style.left = (document.body.offsetWidth - 540) / 2 + "px";
        prs.lbd.ee.style.top = "500px";


        var ts = C.Gs(prs.lbd.ee, "input", true);
        prs.lbd.n = ts[0];
        prs.lbd.u = ts[1];
        if (prs.lbd.t) {
            prs.lbd.n.value = prs.lbd.t.innerText;
            prs.lbd.n.id = prs.lbd.t.id;
        }

        prs.lbd.ee.style.display = "block";
        prs.lbd.ee.style.zIndex = 1000;
        if (document.all)
            prs.lbd.ee.style.filter = 'alpha(opacity=' + 90 + ')';
        else
            prs.lbd.ee.style.opacity = 0.9;


        prs.lbd.bg = C.G("WBg");
        prs.lbd.bg.setAttribute("style", vc.wbg);


        //prs.sl.disabled = true;

        if (vc.cc.offsetHeight < prs.lbd.ee.offsetHeight) {
            vc.cc.style.height = vc.cc.offsetHeight + "px";
            vc.cc.style.overflow = "visible";
        }
    },
    /*修改属性*/
    subpd: function () {
        Cb = function (o) {
            if (o > 0) {
                prs.lbd.t.innerHTML = prs.lbd.n.value;
                prs.exd();
            }
        }
        Str = "/aeprdatr?id=" + prs.lbd.n.id + "&nm=" + prs.lbd.n.value + "&pid=0";
        C.Jsp(Str, "../../flhz/pf.svc");

    },
    /*添加属性分类*/
    addpd: function () {

        C.G("prsp").style.display = "inline-block";
        C.G("subpds").style.display = "none";
        C.G("subpdsss").onclick = function () {
            C.G("prsp").style.display = "none";
            C.G("subpds").style.display = "inline-block";
        }
        C.G("subpdss").onclick = function () {
            Cb = function (o) {
                if (o > 0) {
                    var na = C.Ce("i");
                    na.innerHTML = prs.produ.u.value;
                    na.id = o;//这里需要返回新增条目的id
                    na.setAttribute("class", "dt");
                    var br = C.Ce("br");
                    vc.cc.insertBefore(br, C.G("add2"));
                    vc.cc.insertBefore(na, C.G("add2"));
                    var aa = C.Ce("a");
                    aa.setAttribute("target", "_blank");
                    aa.name = o;
                    vc.cc.insertBefore(aa, C.G("add2"));
                    var ption = C.Ce("option");
                    ption.value = o;
                    ption.innerHTML = prs.produ.u.value;
                    prds.appendChild(ption);
                    prs.exd();
                }
            }
            Str = "/aeprdatr?id=0&nm=" + prs.produ.u.value + "&pid=" + dupid.innerHTML;
            C.Jsp(Str, "../../flhz/pf.svc");
        }
    },
    delpd: function () {

        Cb = function (o) {
            if (o > 0) {
                prs.lbd.t.parentNode.removeChild(prs.lbd.t);
                var ts = C.Gs(duchoo, "a", true);
                for (i = 0; i < ts.length; i++) {
                    if (ts[i].name == prs.lbd.t.id) {
                        duchoo.removeChild(ts[i]);
                    }
                }
                prs.lbd.t = t;
                prs.exd();
            }
        }
        Str = "/dprdatr?rid=" + prs.lbd.n.id;
        C.Jsp(Str, "../../flhz/pf.svc");
    },
    exd: function () {
        prs.lbd.ee.style.display = prs.lbd.bg.style.display = "none";

    },
    exds: function () {
        prs.produ.ee.style.display = prs.produ.bg.style.display = "none";
        //prs.dld.eeC.G("produ").style.display = C.G("produ").bg.style.display = "none";

    },
    /*编辑产品信息弹出框*/
    aeproduct: function () {
        var pnm = C.G("pnm"),
            cont = C.G("cont"),
            price = C.G("price"),
            prome = C.G("prome"),
            cid = ducid,
            id = dupid.innerHTML;
        pnm.value = dupname.innerHTML;
        cont.value =dupfname.innerHTML.substring(0,dupfname.innerHTML.indexOf('<'));
        prome.value = dufuw.innerText;
        price.value = dupropri.innerText;
        C.Slcted(pctg, cid.innerText, 1);
        Dialog('WBg', 'product');

        C.G("edpro").onclick = function () {
            if (id == "") {
                id = 0;
            }
            if (price.value == "") {
                price.value = 0;
            }
            cid = pctg.options[pctg.selectedIndex].value;
            if (cid == "") {
                cid = 0;
            }
            Cb = function (o) {
                if (o > 0) {
                    C.G("erpro").innerHTML = "提交成功！";
                } else {
                    C.G("erpro").innerHTML = "提交失败！";
                }
            }
            Str = "/aeProduct?id=" + id + "&cid=" + cid + "&nm=" + pnm.value + "&cont=" + cont.value + "&price=" + price.value + "&pro=" + prome.value + "&details=";
            C.Jsp(Str, "../../flhz/pf.svc");
        }
    },
    /*删除商品*/
    deproduct: function () {
        Cb = function (o) {
            if (o > 0) {
                C.G("add4").innerHTML = "删除成功！";
            } else {
                C.G("add4").innerHTML = "删除失败！";
            }
        }
        Str = "/dProduct?id=" + dupid.innerHTML;
        C.Jsp(Str, "../../flhz/pf.svc");
    }
}