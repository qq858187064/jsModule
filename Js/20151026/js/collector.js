/*collector.aspx页面级*/
var ws = "/ws/Wcf.svc/",
slct = C.G("category"),
p = C.Ce("p"),
dt = C.Ce("i"),
rpt = C.G("body_m_rpt"),
r = C.G("body_m_r"),
url = C.G("url"),
end = C.G("end"),
ts = C.G("ts"),
te = C.G("te"),
start = C.G("start"),
end = C.G("end"),
reg = C.G("reg"),
//filt = C.G("filt"),
si = C.G("si"),
ei = C.G("ei"),
Cis = C.G("Cis1"),
ls = C.Gs(Cis, "li", true),
m = C.G("menus"),
nm = C.G("cmn"),
    sm = C.G("sm"),
    h = C.G("h"),
    mu = C.G("mu"),
        sts,
    ste,
     ss,
    ssi,
    se,
    sei,
    sreg,
//sfilt,
    sfp,
    pt = C.G("path"),
    tc = C.G("t"),
    stm = C.G("stm"),
    h = C.G("h"),
    mu = C.G("mu"),
    ms = C.G("ms");

function rplc(s) {
    return s ? s.replace(/&lt;/g, "<").replace(/&gt;/g, ">") : "";
    //return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">");s.replace("&lt;", "<").replace("&gt;", ">");
}
function csm() {
    if (!sm.fill) {
        sm.innerHTML += C.Pre(sm).innerHTML.replace("fp", "sfp");
        var lbs = C.Gs(sm, "label", true);

        sts = C.Gs(lbs[0], "input")[0];
        ste = C.Gs(lbs[1], "input")[0];
        ss = C.Gs(lbs[2], "input")[0];
        ssi = C.Gs(lbs[3], "input")[0];
        se = C.Gs(lbs[4], "input")[0];
        sei = C.Gs(lbs[5], "input")[0];
        sreg = C.Gs(lbs[6], "input")[0];
        //sfilt=C.Gs(lbs[7],"input")[0];
        sfp = C.Gs(lbs[7], "input", true);
        sfp[0].name = sfp[1].name = "sfp";
        for (var i = 0; i < lbs.length; i++) {
            lbs[i].setAttribute("for", "");
        }
        sfp[0].parentNode.setAttribute("for", "sfp0");
        sfp[0].id = "sfp0"
        sfp[1].parentNode.setAttribute("for", "sfp1");
        sfp[1].id = "sfp1"

        sm.fill = true;
    }
}

//Checkbox("Fa_Ivs");
Trees(Cis);
/*_右键菜单左击事件_*/
Cis.el = function (li) {
    var p = path(li),
    i = p.lastIndexOf("/") + 1;
    Cis.cp = p;
    nm.value = li.innerText;
    Cis.cid = li.id;

    C.EXHR(function (o) {
        var m = C.Gs(o, "m", true)[li.id],
            s = C.Gs(m, "s")[0],
            //p=s||m;
            t = C.Gs(m, "t")[0],
            b = C.Gs(m, "b")[0],
            tsv = "",
            tev = "";

        radioGroup("us", m.getAttribute("t"));
        url.value = m.getAttribute("u");

        if (t) {
            tsv = rplc(C.Gs(t, "s")[0].firstChild.nodeValue);
            tev = rplc(C.Gs(t, "e")[0].firstChild.nodeValue);
        }
        ts.value = tsv;
        te.value = tev;


        if (b) {
            var bs = C.Gs(b, "s")[0],
                be = C.Gs(b, "e")[0],
                f = b.getAttribute("f") || "0";

            start.value = rplc(bs.firstChild.nodeValue) || "";
            end.value = rplc(be.firstChild.nodeValue) || "";

            si.checked = bs && bs.getAttribute("i") == "1" ? true : false;
            ei.checked = be && be.getAttribute("i") == "1" ? true : false;

            // filt.checked = f=="1"? true : false;
            reg.value = b.getAttribute("r") || "";
            radioGroup("fp", f);
            //radioGroup("str", m.getAttribute("p");
            pt.value = m.getAttribute("p") || "";
        }
        if (s) {
            csm();

            var st = C.Gs(s, "t")[0],
                sb = C.Gs(s, "b")[0],
        ssn = C.Gs(sb, "s")[0],
        sen = C.Gs(sb, "e")[0];

            sts.value = rplc(C.Gs(st, "s")[0].firstChild.nodeValue) || "";
            ste.value = rplc(C.Gs(st, "e")[0].firstChild.nodeValue) || "";
            ss.value = rplc(ssn.firstChild.nodeValue) || "";
            se.value = rplc(sen.firstChild.nodeValue) || "";
            ssi.checked = ssn.getAttribute("i") == "1" ? true : false;
            sei.checked = sen.getAttribute("i") == "1" ? true : false;
            sreg.value = rplc(sb.getAttribute("r")) || "";
            radioGroup("sfp", sb.getAttribute("f") || "0");

            sm.style.display = "inline-block";
        }
        else {
            C.DelAttr(sm, "style");
        }
        /*_定时采集相关_*/
        var msv = m.getAttribute("f"),
        tcv = m.getAttribute("d"),
        gt = 0,
        di = 3600;

        if (tcv) {
            tc.checked = true;

            /*  时、分、秒   */
            if (msv >= 3600) {
                h.value = Math.floor(msv / 3600);
                gt = msv % 3600;
                if (gt >= 60) {
                    mu.value = Math.floor(gt / 60);
                    ms.value = gt % 60;
                }
                else {
                    mu.value = 0;
                    ms.value = gt;
                }
            }
            else if (msv >= 60) {
                h.value = 0;
                mu.value = Math.floor(msv / 60);
                ms.value = msv % 60;
            }
            else {
                ms.value = msv;
            }


            C.G("f").style.width = "";
            stm.value = tcv;
        }
        else {
            tc.checked = false;
            C.G("f").style.width = "80px";
        }
        rpter("任务加载成功！", "ok");
    }, "get", "http://localhost:60080/page/data/mission.xml?Math.random()");
    //xmlhttp.setRequestHeader("If-Modified-Since","0");
};
/*选中/取消定时采集*/
function swct(o) {
    if (o.checked) {
        C.G("f").style.width = "";
        var d = new Date();
        stm.value = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join("/") + " " + [d.getHours(), d.getMinutes(), d.getSeconds()].join(":");
    }
    else {
        C.G("f").style.width = "80px";
        C.EXHR(function () { rpter("定时采集已取消！", "ok"); }, "GET", ws + "stop?id=" + Cis.cid);
    }
}
xmlSelect(slct);
/*_根据传入的li元素，获取并返回其在xml文件中的Xpath_*/
function path(li) {
    var l = li,
p = li.firstChild.nodeValue;
    while (l.parentNode.parentNode.tagName.toLowerCase() == "li") {
        l = l.parentNode.parentNode;
        p = l.firstChild.nodeValue + "/" + p;
    }
    return p;
}

/*_设置单选组中选中的项_*/
function radioGroup(nm, vu) {
    var rs = C.Gn(nm);
    for (var i = 0; i < rs.length; i++) {
        var t = rs[i];
        if (t.value == vu) {
            t.checked = true;
            break;
        }
        else {
            t.checked = false;
        }
        // r.innerHTML+=t.name+t.value+"<br />";
    }
}

/*_获取传入单选组中选中的值_*/
function radiosValue(nm) {
    var rs = C.Gn(nm);
    for (var i = 0; i < rs.length; i++) {
        var t = rs[i];
        if (t.checked) {
            return t.value
        }
    }
}


/*_添加任务_*/
function AddMission() {
    var mn = C.G("mn").value.Trim(),
        ri = slct.selectedIndex,
p = "/";
    if (mn == "") {
        rpter("任务名称为必填项", "no");
    }
    else {
        if (ri != 0) {
            var s = slct.options[ri],
            ss = slct.sc,
            sc = ss.options[ss.selectedIndex],
            d = ss.selectedIndex > 0 ? "," + sc.text : "",
            p = s.text + d;
        }
        C.EXHR(function () { rpter("任务添加成功！", "ok"); }, "GET", ws + "AddMission?n=" + mn + "&p=" + p);
    }
}

/*_保存任务_*/
function saveMission() {
    if (verify()) {
        var arr = [
         nm.value,
             radiosValue("us"),
             url.value,
             ts.value,
             te.value,
             start.value,
             si.checked ? 1 : 0,
             end.value,
             ei.checked ? 1 : 0,
             reg.value,
             radiosValue("fp")
        ];
        if (tc.checked)
        {
            arr.push(stm.value, parseInt(h.value &&h.value !="0"?h.value * 3600:"" + mu.value && mu.value != "0" ? mu.value * 60 : "" + ms.value && ms.value != "0" ? ms.value : ""));
        }
        if (sm.style.display) {
            //,sfilt.checked ? 1 : 0
            arr.push(sts.value, ste.value, ss.value, ssi.checked ? 1 : 0, se.value, sei.checked ? 1 : 0, sreg.value, radiosValue("sfp"));
        }
        C.EXHR(function () { rpter("任务保存成功！", "ok"); }, "GET", ws + "SaveMission?p=" + Cis.cp + "&i=" + arr.join("$"));
    }
}

/*_采集网页_*/
function getHtml() {
    if (verify()) {
        if (radiosValue("us") == 0) {
            C.EXHR(function (arr) {
                rpter("采集成功！", "ok");
                r.innerHTML = arr[1];
            },
    "GET",
    ws + "gArt?url=" + url.value + "&start=" + start.value + "&end=" + end.value + "&reg=" + reg.value + "&p=" + radiosValue("fp") + "&ts=" + ts.value + "&te=" + te.value);

        }
        else {
            C.EXHR(function (arr) {
                rpter("有" + (arr[0].length < 3 ? 0 : arr.length) + "条新网址", "ok");
                r.innerHTML = arr.join("<br />");
            },
            "GET",
            ws + "gＨref?url=" + url.value + "&start=" + start.value + "&end=" + end.value + "&p=" + Cis.cp + "&ts=" + ts.value + "&te=" + te.value);
        }
    }
}

/*_入库_*/
function save() {
    if (verify()) {
        var u = "?url=" + url.value + "&start=" + start.value + "&end=" + end.value + "&reg=" + reg.value + "&p=" + radiosValue("fp") + "&ts=" + ts.value + "&te=" + te.value,
            g = "GET",
            f = function (arr) { arr[0] > 0 ? rpter("入库" + arr.length + "个文章", "ok") : rpter("入库失败！", "no"); };

        if (radiosValue("us") == 0) {
            //C.EXHR(f, g, ws + "Save"+u);
            C.EXHR(f, g, ws + "Save?cp=" + Cis.cp);
        }
        else {
            C.EXHR(f, g, ws + "Saves" + u + "&mp=" + Cis.cp + "&ss=" + ss.value + "&se=" + se.value + "&sreg=" + sreg.value + "&sp=" + radiosValue("sfp") + "&sts=" + sts.value + "&ste=" + ste.value);
        }
    }
}
/*_验证输入_*/
function verify() {
    var v = true;
    if (url.value.trim().length < 5) {
        rpter("请输入采集地址", "no");
        v = false;
    }
    return v;
}
/*_向用户反馈状态_*/
function rpter(ct, cls) {
    var t = "",
    ndt = dt.cloneNode(),
    np = p.cloneNode(),
    r = dt.cloneNode();
    ndt.innerText = tm() + " ";
    np.appendChild(ndt);
    r.innerText = ct;
    if (cls) {
        C.AddClass(r, cls);
    }
    np.appendChild(r);
    rpt.insertBefore(np, rpt.firstChild);
}

/*_构造并输出时间_*/
function tm() {
    var D = new Date,
    Ds = D.getUTCDate(),
    H = D.getHours(),
    Mt = D.getUTCMinutes().toString(),
    S = D.getUTCSeconds().toString();
    return H + ":" + (Mt.length < 2 ? "0" + Mt : Mt) + ":" + (S.length < 2 ? "0" + S : S);
}

/*_右键菜单_*/
function rightMenu(ls, m) {
    for (var i = 0; i < ls.length; i++) {
        ls[i].i = i;
        C.AddEvent(ls[i], "contextmenu", function (e) {
            var e = e || window.event,
                       o = e.target || e.srcElement;
            m.o = o;
            m.cp = path(o);
            rpter(m.cp);
            m.style.top = e.clientY + "px";
            m.style.left = e.clientX + "px";
            m.style.display = "block";
            C.PreventDefault(e);
            C.StopBubble(e);
        });
    }
    C.AddEvent(m, "mouseout", function (e) {
        var to = e.relatedTarget || e.toElement,
        frm = e.target || e.srcElement;
        rpter("frm:" + frm.tagName + "_to:" + to.tagName);
        if (frm == m && (to.parentNode || to.parentNode.parentNode || to.parentNode.parentNode.parentNode) != m) {
            m.on = false;
            setTimeout(function () {
                if (!m.on) {
                    m.style.display = "none";
                }
            }, 900);
        }
    });
    C.AddEvent(m, "mouseover", function (e) { m.on = true; });
}
rightMenu(ls, m);