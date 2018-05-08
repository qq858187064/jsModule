/*
调用组件用new，this指向组件本身，不用new时指向window
*/
var C = {
    Slice: Array.prototype.slice,
    /* 判断传入对象是否为数组 */
    isArr: function (o) {
        return toString.apply(o) === '[object Array]';
    },
    sliceC: function (arr) {
        var a = [];
        for (var i = 0; i < arr.length; i++) {
            a.push(arr[i]);
        }
        return a;
    },

    /* 获取并返回传入id的对象 */
    G: function (Id) {
        return typeof (Id) == "string" ? document.getElementById(Id) : Id;
    },

    /*创建并返回传入标签名的元素 */
    Ce: function (Tag) {
        return document.createElement(Tag);
    },

    /* 获取并返回传入document的body元素 */
    Bd: function (D) {
        var D = D || document;
        return C.Gs(D.documentElement, "body")[0];
    },

    /* 获取并返回传入Name的集合对象*/
    Gn: function (Nm, Tg) {
        var a = document.getElementsByName(Nm);
        if (Tg) {
            var es = document.getElementsByTagName(Tg),
                arr = new Array();
            for (var i = 0; i < es.length; i++) {
                var e = es[i];
                if (C.Attr(e, "name") == Nm) {
                    arr.push(e);
                }
            }
            a = arr;
        }
        return a;
    },
    /* 获取并返回传入对象的name的值*/
    Gnm: function (o) {
        return o.name || C.Attr(o, "name");
    },
    /* 获取并返回传入对象和传入标签子元素的数组 */
    Gs: function (prt, tg, Progeny) {
        var prt = typeof (prt) == "string" ? C.G(prt) : prt,
		         Childs = new Array(),
		         Ds = prt.getElementsByTagName(tg),
                 Progeny = !Progeny ? false : true;
        for (var i = 0; i < Ds.length; i++) {
            if (Ds[i].parentNode == prt || Progeny) {
                Childs.push(Ds[i]);
            }
        }
        return Childs;
    },

    /* 获取并返回具有传入样式名的元素的数组 */
    Cls: function (ClsNm, Tag, Prt) {
        var Tags = Tag || "*",
        Prt = C.G(Prt) || document;
        Reg = new RegExp("(^| )" + ClsNm + "( |$)"),
        t = C.Gs(Prt, Tags, true),
        Arr = [];
        for (var i = 0; i < t.length; i++) {
            if (Reg.test(t[i].className)) {
                Arr.push(t[i]);
            }
        }
        return Arr;
    },
    /* 获取并选回radio选定的元素     */
    radio:function(nm)
    {
        var es = C.Gn(nm);
        for(var i=0;i<es.length;i++)
        {
            t=es[i];
            if (t.checked)
                return t;//.value;
        }
    },
    /* 为传入元素设置T属性和L属性，其值分别为该元素相对于Body元素的偏移量offsetTop和offsetLeft */
    Lt: function (o) {
        o.L = o.offsetLeft;
        o.T = o.offsetTop;
        var Ele = o;
        // while (Ele.offsetParent.tagName.toLowerCase() != "body")
        while (Ele.offsetParent && Ele.offsetParent.tagName.toLowerCase() != "body") {
            Ele = Ele.offsetParent;
            o.L += Ele.offsetLeft;
            o.T += Ele.offsetTop;
        }
    },

    /* 获取并返回传入元素的上一个非空元素 */
    Pre: function (Ele) {
        return C.Sbl(Ele, "previousSibling");
    },

    /* 获取并返回传入元素的下一个非空元素 */
    Nxt: function (Ele) {
        return C.Sbl(Ele, "nextSibling");
    },

    /* 获取并返回传入元素的上一个或下一个非空元素 */
    Sbl: function (Ele, Fn) {
        var E = Ele[Fn];
        while (E && (E.nodeType != 1))/*while (E && (E.nodeType != 1 && E.nodeType != 3))*/ {
            E = E[Fn];
        }
        return E;
    },

    /* 获取并返回传入字符串所字义的Json对象 */
    Json: function (Str) {
        if (Str)
        {
            return eval(Str.startsWith("{") ? "(" + Str + ")" : "({" + Str + "})")
        }
    },
    /*html转码*/
    htmlEncode: function (html) {
        var temp = document.createElement("div");
        (temp.textContent != undefined) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*html解码*/
    htmlDecode: function (text) {
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    },
    /* 获取并返回传入对象的p属性,如果元素没有该属性, 则为其添加，且其值为空对象*/
    Pt: function (o) {
        var p = C.Attr(o, "p");
        o.ps = C.Json(p);
        return p ? o.ps : {};
    },
    /* 判断元素是否为包含关系*/
    Contains: function (parentNode, childNode) {
        if (parentNode.contains) {
            return parentNode != childNode && parentNode.contains(childNode);
        } else {
            return !!(parentNode.compareDocumentPosition(childNode) & 16);
        }
    },
    
    /* 获取传入td对应的tr、table */
    table: function (td)
    {
        var tr = td.parentNode,
            tb = tr.parentNode;
        if (tb.tagName == "TBODY")
            tb = tb.parentNode;
        return { tr: tr, tb: tb };
    },
    /* 获取传入tr中的td数组 
    tds: function (tr) {
        return C.Gs("tr", "td");
    },
    */

    /* 获取传入td对应的tr、table */
    rpt: function (o,r)
    {
        if (o.code > 1)
        {
        cls = "ok"
        dc = "no";
    }
else {
        cls = "no"
        dc = "ok";
}
C.DelClass(r, dc);
C.AddClass(r, cls);
r.innerHTML = o.msg;
r.style.visibility = "visible";
    },
    /* 隐藏元素 */
    Hide: function (Id) {
        var oE = C.G(Id),
        H = oE.offsetHeight;
        if (H > 0) {
            H--;
        }
        else {
            return;
        }
        oE.style.height = H + "px";
        setTimeout(function () { C.Hide(Id) }, 100);
    },

    /* 显示元素 */
    Show: function (Id) {
        var oE = C.G(Id),
        Max = parseInt(Id.substring(2));
        oE.style.height = !oE.style.height ? "0px" : oE.style.height;
        Ch = parseInt(oE.style.height.slice(0, -2));
        if (Ch < Max) {
            Ch++;
            oE.style.height = Ch + "px";
            setTimeout(function () { C.Show(Id) }, 0);
        }
    },

    /* 用该方法调用函数的原型初始化方法Init，批处理该方法调用函数的实参对象 */
    Batch: function () {
        var Cl = C.Batch.caller,
            arg = Cl.arguments;
        if (!Cl.Initialized) {
            var Ns;
            if (Cl.Hn)/*组件允许传入name属性*/
            {
                for (var j = 0; j < arg.length; j++) {
                    var a = arg[j],
                    k = (a.id || a).indexOf("_") + 1,/*a.id应该是a.name*/
                    ist = k > 0,
                   // lt = a.slice(-2).toLowerCase() == "nm",
                    lt = (a.id || a).slice(-1) == "_";

                    if (typeof a == "string" && ist)//后缀为_,则取该name的集合
                    {
                        var s = C.sliceC(C.Gn(a));
                        if (!lt) {
                            s = C.sliceC(C.Gn(a, a.substring(k)));
                        }
                        Ns = Ns ? Ns.concat(s) : s;
                    }
                    else {
                        if (Ns) {
                            Ns.push(a)
                        }
                        else {
                            Ns = [a];
                        }

                    }
                }
            }
            else
			{
                Ns = C.Slice.apply(arg);
            }

            for (var i = 0; i < Ns.length; i++) {

                var n = Ns[i],
                    o = C.G(n);
				/*为了接收对象参数，如{f:'f2',id:'box',bg:'bg'}，已废弃
				if(typeof n != "string")
				{
					o=C.G(n.id);
					for(var a in n)
					{
					o[a]=n[a];
					}
				}*/
				if(o.length>0)
				{
					
				}
					
                if (!o) {
                    o = n;
                }
                Cl.prototype.Init(o);
            }
            Cl.Initialized = true;
        }
    },

    /* 获取传入元素的当前样式对象 */
    CurrentStyle: function (element) {
        return element.currentStyle || document.defaultView.getComputedStyle(element, null);
    },

    AttrStyle: function (Elem, Attr) {
        if (Elem.Attr) {
            return Elem.style[Attr];
        } else if (Elem.currentStyle) {
            return Elem.currentStyle[Attr];
        } else if (document.defaultView && document.defaultView.getComputedStyle) {
            Attr = Attr.replace(/([A-Z])/g, '-$1').toLowerCase();
            return document.defaultView.getComputedStyle(Elem, null).getPropertyValue(Attr);
        } else {
            return null;
        }
    },

    /*将传入的第二个元素的高度设成与等一个元素等高 */
    eh: function (a, b) {
        var a = C.G(a),
            b = C.G(b);
        b.style.height = a.offsetHeight + "px";
    },
    /*
    old
        Eh: function (Id, Tg) {
        var Ctn = C.G(Id),
        Sbs = C.Gs(Ctn, Tg),
        Hs = [];
        for (var i = 0; i < Sbs.length; i++) {
            Hs[i] = Sbs[i].clientHeight;
        }
        for (var j = 0; j < Sbs.length; j++) {
            Sbs[j].style.height = Hs.sort(function (a, b) { return b - a; })[0] + "px";
        }
    },

    */

    /* 设置传入元素等高 */
    Ehs: function () {
        var Es = [],
        Hs = [];
        for (var i = 0; i < arguments.length; i++) {
            var El = C.G(arguments[i]);
            if (El.nodeType == 1) {
                Es.push(El);
                Hs.push(El.clientHeight);
            }
        }
        for (var j = 0; j < Es.length; j++) {
            Es[j].style.height = Hs.sort(function (a, b) { return b - a; })[0] + "px";
        }
    },
    /*  获取并返回传入select选中项 */
    So: function (o) {
        return o.options[o.selectedIndex];
    },
    /* 将传入iFrame的高度设为载入文档的实际高度 */
    Fi: function (Id) {
        var F = C.G(Id),
        Vh = C.Gs(F.contentWindow.document.documentElement, "body")[0].clientHeight;
        F.style.height = Vh + "px";
    },

    /* 获取并返回时间 */
    Ts: function () {
        return "timestamp=" + new Date().getTime().toString();
    },
    /* 获取并返回触发事件的对象*/
    Ge: function (e) {
        var e = e || window.event,
               mt = e.target || e.toElement;
        return mt;
    },

    /* 为对象添加的事件监听  */
    AddEvent: function (obj, ev, fn, arg) {
        obj = C.G(obj);
        var Ehd = fn;
        if (arg) {
            Ehd = function (ev) { fn(ev, arg) };
        }
        //if (arguments.length > 4)
        //{
        //    Ehd = function () { return function () { fn.apply(obj, C.Slice.call(arguments, 3)); }; }();
        //}

        if (window.addEventListener) {
            obj.addEventListener(ev, Ehd, false);
        }
        else if (window.attachEvent) {
            obj.attachEvent("on" + ev, Ehd);
        }
        else {
            obj["on" + ev] = Ehd;
        }
    },

    /* 删除对象的事件监听 */
    DelEvent: function (obj, ev, fn) {
        if (window.removeEventListener) {
            obj.removeEventListener(ev, fn, false);
        }
        else if (window.detachEvent) {
            obj.detachEvent("on" + ev, fn);
        }
        else {
            obj["on" + ev] = null;
        }
    },



    // And don't let anyone else see this event.
    //    if (e.stopPropagation) e.stopPropagation();  // Standard
    //else e.cancelBubble = true;                  // IE

    /* 阻止事件冒泡 */
    StopBubble: function (e) {
        if (e && e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            window.event.cancelBubble = true;
            e.cancelBubble = true;
        }
    },

    /* 阻止事件默认行为 */
    PreventDefault: function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    },

    /* 删除传入元素的class属性  */
    DelClass: function (M, Cn) {
        if (M) {
            if (typeof (M) == "string")
                M = C.G(M);
            var Cls = M.getAttribute("class") || M.getAttribute("className");
            if (Cls) {
                if (RegExp("^\\s*" + Cn + "\\s*$").test(Cls)) {
                    C.DelAttr(M, "className");
                    C.DelAttr(M, "class");
                }
                else {
                    M.className = Cls.replace(new RegExp("( ?|^)" + Cn + "\\b"), "");
                }
            }
        }
    },
    //
    /* 添加传入元素的class属性  */
    AddClass: function (M, Cn) {
        if (M) {
            if (typeof (M) == "string")
                M = C.G(M);
            var Cls = M.getAttribute("class") || M.getAttribute("className");
            if (Cls != null) {
                Cn = Cls.indexOf(Cn) == -1 ? Cls + " " + Cn : Cls;
            }
            M.className = Cn;
        }
    },

    /* 获取元素属性  */
    Attr: function (Id, Attr) {
        var obj = C.G(Id), oAttr;
        if (obj.getAttribute(Attr)) {
            oAttr = obj.getAttribute(Attr)
        }
        else if (obj.attributes[Attr]) {
            oAttr = obj.attributes[Attr];
        }
        return oAttr;
    },

    /* 删除元素属性  */
    DelAttr: function (Id, Attr) {
        var obj = C.G(Id), oAttr;
        if (obj.getAttribute(Attr)) {
            obj.removeAttribute(Attr);
        }
        else if (obj.attributes[Attr]) {
            obj.removeAttributeNode(obj.attributes[Attr]);
        }
    },
    /* 删除传入元素的style属性  */
    DelStyle: function (Ele) {
        if (Ele.getAttribute("style")) {
            Ele.removeAttribute("style");
        }
        else if (Ele.attributes["style"]) {
            Ele.removeAttributeNode(Ele.attributes["style"]);
        }
    },
    /* 全选和取消全选  */
    Sa: function (Sp, Intro) {
        var Sp = C.G(Sp),
        Cs = C.Gs(Sp, "input", true),
        Itr = null;
        if (Intro) {
            Itr = C.G(Intro); /* Itr如果是否包含在Cs中，则删除  */
        }
        else {
            switch (Sp.id.charAt(0).toUpperCase()) {
                case "F":
                    Itr = Cs.shift();
                    break;
                case "L":
                    Itr = Cs.pop();
                    break;
            }
        }
        C.AddEvent(Itr, "click", function () {
            for (var i = 0; i < Cs.length; i++) {
                if (Cs[i].type == "checkbox") {
                    Cs[i].checked = Itr.checked ? true : false;
                }
            }
        });
    },
    /* 设置select选中和传入值相同的项  */
    Slcted: function (slct, v, vt) {
        for (var i = 0; i < slct.length; i++) {
            if ((vt ? slct.options[i].value : slct.options[i].text) == v) {
                slct.options[i].selected = true;
                break;
            }
        }
    },

    /* 创建并返回一个XMLHttpRequest对象  */
    XHR: function () {
        var XHR;
        try {
            XHR = new XMLHttpRequest();
        }
        catch (e1) {
            try {
                XHR = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e2) {
                try {
                    XHR = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e3) {
                    XHR = false;
                }
            }
        }
        return XHR;
    },

    /* 执行异步请求 */
    EXHR: function (CallBack, Method, Url, Data, Proc, Async) {
        var oXHR = this.XHR(),
            Rst = null,
            Junctor = Url.indexOf("?") != -1 ? "&" : "?";
        oXHR.onreadystatechange = function () {
            switch (oXHR.readyState) {
                case 0:
                    Rst = "请求未初始化";
                    break;
                case 1:
                    Rst = "服务器连接已建立";
                    break;
                case 2:
                    Rst = "请求已接收";
                    break;
                case 3:
                    Rst = "请求处理中";
                    break;
                case 4:
                    Rst = "请求已完成，且响应已就绪";
                    if (oXHR.status == 200) {
                        var Rsp = null,
                                 cType = oXHR.getResponseHeader("Content-Type");
                        //oXHR.getAllResponseHeaders
                        //获取服务端header里时间戳，在IE下必须做些特殊处理，需要在后端关闭缓存：header( 'Cache-Control: no-store');
                        if (cType && cType.indexOf("text/xml") != -1) { Rsp = oXHR.responseXML; }
                        else if (cType && (cType.indexOf("text/json") != -1 ||
			                //返回html时eval时会报错20160504 cType.indexOf("text/html") != -1 ||
                            cType.indexOf("text/javascript") != -1 ||
                            cType.indexOf("application/javascript") != -1 ||
                            cType.indexOf("application/json") != -1 ||
                            cType.indexOf("application/x-javascript") != -1)) {
							//alert(typeof oXHR.responseText+oXHR.responseText+"\n"+ oXHR.responseText.slice(1,-1));
							

                            Rsp = eval('(' + oXHR.responseText+ ')');//oXHR.responseText
                            //Rsp = JSON.parse(oXHR.responseText);
                        }
                        else {
					        Rsp = oXHR.responseText;
                        }
                        CallBack(Rsp);/*C.Json(Rsp)*/

                        //CallBack(Rsp,oXHR);传入XHR可以使调用者使用xmlHttpRquest对象，如获取Headers等
                    }
                    break;
            }
            if (Proc) { Proc(Rst); }
        };
        Data = Method == "GET" ? null : Data;
        //Url += Junctor + "timeStamp=" + new Date().getTime();
        Async = Async != false ? true : false;
        oXHR.open(Method, encodeURI(Url), Async);
        //oXHR.responseType = "msxml-document";//兼容IE10+版本，调用selectSingleNode类似方法
        if (Method == "POST") {
            oXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            //oXHR.setRequestHeader("Content-type", "multipart/form-data");
        }
        oXHR.send(Data);
    },
   
    /*ajax跨域兼容IE*/
    /*C.DXHR = function (fns, method, url, data, Proc, Async) {

        var suc = typeof fns == 'function' ? fns : (fns.suc ? fns.suc : null);
        var nData = (data.indexOf('?') == -1 && url.indexOf('?') == -1) ? '?' + data : data;

        try {
            url = method.toLowerCase() == 'get' ? url + data : url;

            C.EXHR(suc, method, url, data, Proc, Async);
        } catch (e) {
            //IE 789
            var xhr = new XDomainRequest();

            xhr.onload = function () {
                suc(xhr.responseText);
            };

            if (fns.err) { xhr.onerror = fns.err; }
            if (fns.oto) { xhr.ontimeout = fns.oto; };

            xhr.open(method, url + nData);
            xhr.send();
        }
    }，
    */
    
   
    /* Jsonp
        */
    Jsp: function (str) {
        var  //rUrl = bu ? bu : "../../ws/Wcf.svc/",/*站群系统中使用*/
        Jt = C.G("Cbf"),
        Jn = Jt.cloneNode(),
        Bd = C.Bd();// C.Gs(document.documentElement, "body")[0];
        Jn.src = str;/*bu + bu：各站点请求的基础url*/
        Jn.id = "cloneCbf";
        Bd.appendChild(Jn);
        //Bd.replaceChild(Jn, Jt);

        //setTimeout(function () { Jn.parentNode.removeChild(Jn) }, 5000)
        //Jn.parentNode.removeChild(Jn);
    },
    /* 加入收藏 */
    Collect: function (sUrl, Tit) {
        var sUrl = !sUrl ? document.URL : sUrl,
         Tit = !Tit ? document.title : Tit;
        try {
            window.external.addFavorite(sUrl, Tit);
        }
        catch (e) {
            try {
                window.sidebar.addPanel(Tit, sUrl, "");
            }
            catch (eb) {
                alert("对不起，您所使用的浏览器不允许点击收藏!\n请使用Ctrl+D进行收藏。");
            }
        }
    },

    /* 设为首页 */
    SetHome: function (sUrl) {
        var sUrl = !sUrl ? document.URL : sUrl;
        try {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(sUrl);
        }
        catch (e) {
            alert("抱歉!您的浏览器不支持直接设为首页。您可通过浏览器 工具->选项->使用当前页->确定，完成设为首页。");
        }
    },

    /* 获取客户机日期并返回字符串
    传入ID的第一个字符代表不同时区： A:当前时区(北京) +8    B:伦敦 0    C:纽约 -9    D:东京 +9    E:芝加哥 -6
    传入ID的第二个字符代表不同的精确模式：D 精确到日期  W 星期 M为精确到分钟 S为精确到秒的时间
    */
    sDate: function () {
        this.Ts = arguments.length == 0 ? this.Ts : C.Slice.apply(arguments);
        var D = new Date,
        Wd = ["日", "一", "二", "三", "四", "五", "六"],
        Y = D.getUTCFullYear(),
        M = (D.getUTCMonth() + 1),
        Ds = D.getUTCDate(),
        H = D.getUTCHours(),
        Mt = D.getUTCMinutes(),
        S = D.getUTCSeconds(),
        W = Wd[D.getDay()];
        for (var i = 0; i < this.Ts.length; i++) {
            var Pl = C.G(this.Ts[i]),
            Str = "",
            Jetlag = -D.getTimezoneOffset(),
            J;
            switch (this.Ts[i].charAt(0).toUpperCase()) {
                case "A":
                    J = 8;
                    break;
                case "B":
                    J = 0;
                    break;
                case "C":
                    J = -4;
                    break;
                case "D":
                    J = 9;
                    break;
                case "E":
                    J = -5;
                    break;
            }
            H = D.getUTCHours() + J;
            if (H >= 24) {
                Ds += 1;
                H = H - 24;
            }
            else if (H < 0) {
                Ds -= 1;
                H += 24;
            }
            S = S.toString().length != 2 ? S = "0" + S : S;
            Mt = Mt.toString().length != 2 ? Mt = "0" + Mt : Mt;
            switch (this.Ts[i].charAt(1).toUpperCase()) {
                case "D":
                    Str = Y + "年" + M + "月" + Ds + "日";
                    break;
                case "W":
                    Str = Y + "年" + M + "月" + Ds + "日" + " 星期" + W;
                    break;
                case "M":
                    Str = H + ":" + Mt;
                    break;
                case "S":
                    Str = H + ":" + Mt + ":" + S;
                    break;
            }
            Pl.innerHTML = Str;
        }
        setTimeout(function () { C.sDate() }, 1000);
    },
    /* 显示百度广告 */
    Bdo: function () {
        var Baw = C.G("Bas"),
        Args = arguments;
        for (var i = 0; i < Args.length; i++) {
            BAIDU_CLB_fillSlot(arguments[i]);
        }
        //Baw.id += Math.random().toString().replace(".", "");
        window.setTimeout(function () {
            var Bad = C.Gs(Baw, "div");
            for (var j = 0; j < Args.length; j++) {
                var Win = C.G("baidu_clb_slot_iframe_" + Args[j]);
                if (Win != null) {

                    //tn = "a" || "object" || "embed",
                    var Ad = Win.contentWindow.document.getElementsByTagName("a")[0] || Win.contentWindow.document.getElementsByTagName("object")[0] || Win.contentWindow.document.getElementsByTagName("embed")[0];
                    if (!Ad) { continue; }
                    C.G(Bad[j].id.substring(15)).innerHTML = Ad.parentNode.innerHTML;
                }
            }
            //Baw.parentNode.removeChild(Baw);
        }, 2400);
    },
    Contain: function (a, b) {
        //console.log(a.compareDocumentPosition(b));
        return a.contains ? a != b && a.contains(b) : a.compareDocumentPosition(b) == 16//!!(a.compareDocumentPosition(b) & 16);
    }
};
Function.prototype.Method = function (Nm, Fun) {
    if (!this.prototype[Nm]) {
        this.prototype[Nm] = Fun;
    }
};
String.Method("trim", function () { return this.replace(/^\s+|\s+$/g, ""); });
String.Method("endsWith", function (pattern) { var d = this.length - pattern.length; return d >= 0 && this.lastIndexOf(pattern) === d; });
String.Method("startsWith", function (pattern) { return this.slice(0, pattern.length) === pattern; });
String.Method("format", function (args) {
    var result = this;
    // if (arguments.length < 1) {
        // return result;
    // }

    var data = arguments;       //如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replace("{" + key + "}", value);
        }
    }
    return result;
});
/*
function stringFormat() {
         if (arguments.length == 0)
             return null;
         var str = arguments[0];
         for (var i = 1; i < arguments.length; i++) {
             var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
             str = str.replace(re, arguments[i]);
         }
         return str;
     } 
 
 StringFormat("&Type={0}&Ro={1}&lPlan={2}&Plan={3}&={4}&Id={5}&Id={6}", data1, data2, data3,data4, data5,data6,data7);
*/

Array.Method("contains", function (item) {
    for (i = 0; i < this.length; i++) {
        if (this[i] == item) { return true; }
    }
    return false;
})


//Element.Method("getElementsByName", function ()
//{
//    ;
//});
/*

String.prototype.format = function(args) {
    var result = this;
    if (arguments.length < 1) {
        return result;
    }

    var data = arguments;       //如果模板参数是数组
    if (arguments.length == 1 && typeof (args) == "object") {
        //如果模板参数是对象
        data = args;
    }
    for (var key in data) {
        var value = data[key];
        if (undefined != value) {
            result = result.replace("{" + key + "}", value);
        }
}
    return result;
}
//两种调用方式
var template1="我是{0}，今年{1}了";
var result1=template1.format("loogn",22);

var template2="我是{name}，今年{age}了";
var result2=template2.format({name:"loogn",age:22});

*/