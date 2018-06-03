function Cal() {
    Cal.prototype = {
        Preset: function () {
            Cal.Td = new Date();
            Cal.y = Cal.Td.getFullYear();
            Cal.m = Cal.Td.getMonth();
            Cal.d = Cal.Td.getDate();
        },
        Init: function (o)//o是日历p的抽象
        {
            var Et = "click";
            p = C.Pt(o);
            o.c = p.c || 1;
            //o.f = p.f || 0;
            o.tabIndex = -1;//让o响应onblur事件

            o.a = p.a || false;//用来指示点击时触发该日历的元素的id，或元素id的列表(以逗号分隔)
            o.y = p.y || Cal.y;

            o.m = p.m || Cal.m + 1;
            o.no = p.no || [];
            o.ol = o.childNodes.length;
            //o.b = p.b || "";//用来指示当点击日历中某一天时执行的函数名
            o.Py = C.Cls("Py", null, o)[0];
            o.Pm = C.Cls("Pm", null, o)[0];
            o.Nm = C.Cls("Nm", null, o)[0];
            o.Ny = C.Cls("Ny", null, o)[0];
            if (o.Py != undefined) C.AddEvent(o.Py, Et, function () { o.s = -12; Cal.prototype.Walk(o); });
            if (o.Pm != undefined) C.AddEvent(o.Pm, Et, function () { o.s = -1; Cal.prototype.Walk(o); });
            if (o.Nm != undefined) C.AddEvent(o.Nm, Et, function () { o.s = 1; Cal.prototype.Walk(o); });
            if (o.Ny != undefined) C.AddEvent(o.Ny, Et, function () { o.s = 12; Cal.prototype.Walk(o); });
            if (o.c > 1) {
                for (var i = 1; i < o.c; i++) {
                    o.appendChild(o.lastChild.cloneNode(true));
                }
            }
            if (!o.a) {
                this.Walk(o);
            }
            else {
                var Arr;
                if (o.a.indexOf(",") > -1) {
                    Arr = o.a.split(",");
                }
                else {
                    Arr = [o.a];
                }
                for (var i = 0; i < Arr.length; i++) {
                    var Aid = Arr[i];
                    var ipt = C.G(Arr[i]);
                    C.AddEvent(ipt, Et, function (It) {
                        var t = C.sliceC(It.value.split("/"));
                        o.It = It;
                        o.It.lst = It.id.slice(-1);
                        o.It.o = o;
                        ipt.o = o;
                        o.y = o.It.y = t[0] || o.y;
                        o.m = o.It.m = parseInt(t[1])-o.s || o.m;
                        if (t.length > 2) {
                            o.Tsd = o.It.d = t[2];
                        }
                        if (o.style.display != "block") {
                            o.style.display = "block";
                        }
                        Cal.prototype.Walk(o);
                        C.Lt(It);
                        o.style.left = It.L + "px";
                        o.style.top = It.T + It.clientHeight + "px";
                        o.focus();
                        // console.log(ipt+ipt.sm)
                    }, ipt);
                }
                C.AddEvent(o, "blur", function () {
                    setTimeout(function () { if (document.activeElement != o) o.style.display = "none"; }, 200);
                });
            }
        },
        Walk: function (o) {
            var hi = o.It;
            y = hi ? o.It.y : o.y,
            m = hi ? o.It.m : o.m;
            o.n = o.n || 0;
            o.s = o.s || 0;

            if (!(hi && hi.sm && (y < hi.piy || hi.pim < hi.sm))) {
                m += o.s;
            }

            if (((o.no && o.no[0] == 0) || (hi && hi.lst == 0)) && (o.s == -1 || o.s == -12) && o.y <= Cal.y && ((o.m <= Cal.m + 1) || hi && (o.m <= hi.sm))) {
                o.s = 0;
                return;
            }

            //this.Ymr(y, m)
            if (m >= 13) {
                y++;
                m = m % 12;
            }
            else if (m <= 0) {
                y--;
                m += 12;
            }

            if (hi) {
                o.It.y = y;
                o.It.m = m;
            }
            else {
                o.y = y;
                o.m = m;
            }
            var op = o;
            if (o.c > 1) {
                for (var i = 0; i < o.c; i++) {
                    op = o.childNodes[o.ol - 1 + i];
                    op.y = y;
                    op.m = m + i;

                    //this.Ymr(op.y,op.m)
                    if (op.m >= 13) {
                        op.y++;
                        op.m = op.m % 12;
                    }
                    else if (op.m <= 0) {
                        op.y--;
                        op.m += 12;
                    }
                    

                    op.a = o.a;
                    op.c = o.c;
                    op.s = o.s;
                    op.no = o.no;
                    if (!op.fd) {
                        op.ol = op.childNodes.length;
                    }
                    this.Fill(op);
                }
                o.y = op.y;
                //console.log("op.m"+op.m)
                o.m = op.m - o.c + 1
            }
            else {
                op.m = m;
                op.y = y;
                this.Fill(op);
            }
        },
        Fill: function (o) {

            o.Ey = o.Ey || C.Cls("Y", null, o);
            o.Em = o.EM || C.Cls("M", null, o);

            o.Ey[0].innerHTML = o.y;
            o.Em[0].innerHTML = o.m;
            o.Lst = new Date(o.y, o.m - 1, 0);//上月最后一天
            o.Pm = o.Lst.getDate();//上月最后一天几号
            o.Ow = o.Lst.getDay();//上月最后一天周几?0（周日） 到 6（周六）
            o.Crm = new Date(o.y, o.m, 0).getDate();//当月的最后一天几号
            o.Ni = 43 - o.Crm - o.Ow;//当前日历中显示的最后一个下月日期
            o.Ps = o.Pm - o.Ow + 1;//当前日历中显示的上月起始日
            o.Ism = o.y == Cal.y && o.m == Cal.m + 1;

            //o.ltm = o.y <= Cal.y && o.m < Cal.m + 2;
            o.ltm = false;
            if (o.Ow == 0) {
                o.Ps = o.Pm - 6;
                o.Ni = o.Ni - 7;
            }
            var ito = o.It || o.parentNode.It,
                itf = ito ? ito.lst : 1,
                tk = ito ? ito.id.indexOf("_") + 1 : 0,
                cm = ito ? ito.pim == o.m : false,
                //t = o.ld > 1 ? parseInt(o.ld) + 2 : 0;
            t = ito ? parseInt(o.c > 1 ? o.parentNode.ld : o.ld) + 2 : 0;
            for (var i = 1, j = o.Ps, k = 1; j <= o.Pm, i <= o.Crm, k < o.Ni;) {
                var R,
                    Sd = C.Ce("a"),
                    cls = false;
                Sd.s = 0;//会增加一月
                if (j <= o.Pm) {
                    R = j;
                    j++;

                    Sd.s = -1;
                    cls = "Pn";
                }
                else if (i <= o.Crm) {
                    if (o.Ism && i == Cal.d) {
                        cls = "Td";
                    }
                    if (o.Tsd && o.Tsd == i)//|| (ito&&ito.lst == i)
                    {
                        cls = "Sd";
                        o.Tsd = false;
                    }
                    R = i;
                    i++;
                }
                else {
                    R = k;
                    k++;

                    Sd.s = 1;
                    cls = "Pn";
                }
                if (o.no || (itf == 0)) {
                    if ((((o.no[0] == 0) || (itf == 0)) && o.Ism && i <= Cal.d) || cm && i < t) {
                        if (cls == false || (cls == "Sd" || cls == "Td")) {
                            cls = "No";
                        }
                    }
                    else {
                        if (o.no[0] == i) {
                            cls = "No";
                            o.no.shift();
                        }
                    }
                }
                if (cls) {
                    C.AddClass(Sd, cls);
                }
                Sd.d = R;
                if (o.fd) {
                    o.removeChild(o.childNodes[o.ol]);
                }
                var pn = cls != "Pn";
                if (cls !== "No" && pn) {
                    C.AddEvent(Sd, "click", function (Sd) {//
                        if (Sd.s != 0) {
                            o.s = Sd.s;
                            o.Tsd = Sd.d;
                            var co = o;
                            if (o.c > 1) {
                                co = o.parentNode;
                                //co.s = Sd.s;
                            }
                            Cal.prototype.Walk(co);
                        }
                        else {
                            C.DelClass(C.Cls("Sd", "a", o.parentNode)[0], "Sd")
                            C.AddClass(Sd, "Sd");
                            o.Sd = Sd;
                        }
                        var ipt = o.It,
                            ym = o.y + "/" + o.m + "/",
                        ymd = ym + Sd.d,
                        p = o,
                        w = o;
                        if (o.c > 1) {
                            ipt = o.parentNode.It;
                            p = o.parentNode;
                            w = o.parentNode;
                        }
                        if (ipt) {
                            ipt.w = w;
                            ipt.o.s = 0;
                            ipt.value = ym + Sd.d;
                            //var k = ipt.id.indexOf("_") + 1;
                            if (tk) {
                                var r = C.G(ipt.id.substring(tk)),
                                    nx = Sd.d + 1,
                                 ny = o.m;
                                if (Sd.d == o.Crm)
                                {
                                    ipt.o.s = 1;
                                    nx = 1;
                                    //ny++;
                                    if (ny == 13) {
                                        ny = 1;
                                        o.y++;
                                    }
                                    //Cal.prototype.Ymr(o.y, ny);
                                    //ym = o.y + "/" + ny + "/";
                                }
                                r.value = o.y+"/"+(o.m+ipt.o.s)+"/" + nx;
                                r.sm = r.m = ny;
                                r.piy = o.y;
                                r.pim = o.m;
                                r.ymd = ymd;
                                //console.log("r.m=" + r.sm)
                                //r.sm = r.m = (o.c > 1 ? o.m + o.c : o.m)+1;
                                o.ld = Sd.innerHTML;
                                //console.log("o.ld:" + o.ld)

                                if (r.o) {
                                    //r.o.ld = Sd.d;
                                    r.o.m = ny;
                                    r.o.ld = o.ld;
                                }
                                //o.cm = o.m;
                                //ipt.o.s = 0;
                                //ipt.o.s = Sd.d == o.Crm ? 1 : 0;


                                r.click();

                                //r.o.ld = Sd.d;
                                //console.log(o.ld)
                            }
                            else {
                                o.ld = false;
                                setTimeout(function () { ipt.w.style.display = "none"; }, 200);
                            }
                        }
                        else {
                            p.cd = ymd;
                        }
                    }, Sd);
                }
                if (pn || o.c == 1) {
                    Sd.innerHTML = R;
                }
                o.appendChild(Sd);
            }
            o.fd = true;
        },
        Ymr: function (y, m) {
            if (m >= 13) {
                y++;
                m = m % 12;
            }
            else if (m <= 0) {
                y--;
                m += 12;
            }
        }
    }
    Cal.prototype.Preset();
    C.Batch();
}