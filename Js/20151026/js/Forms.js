function Forms() {
    this.Rqd = /^.+$/m;
    this.Rqd.No = "该项不能为空！";
    this.Ph = /^\((\d{3,4})\)|\1-?\d{5,8}$/;
    this.Ph.No = "电话格式不正确！";
    //this.Mb = /^\0?\d{11}$/;
    this.Mb = /^1[34578]+\d{9}$/;
    this.Mb.No = "手机格式不正确！";
    this.Cn = /^[\u4E00-\u9FA5]{1,}$/;
    this.Cn.No = "不允许出现非中文";
    this.Pwd = /^(\w|[^\(\)\{\}\=\:\;\.\s]){1,}$/;
    this.Pwd.No = "密码不能包含'(){}=:;. '等敏感字符";
    this.Em = /^[\w|\-|\.]+@[\w|-]+(\.[\w|-]+)+$/;
    this.Em.No = "邮箱格式不正确";
    this.Url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    this.Url.No = "Url格式不正确";
    this.Idn = /^\d{17}\d|X$/;
    this.Idn.No = "身份证号码不合法";
    this.Cpt = 1;
    this.Cpt.No = "两次输入不一致!";
    this.Cpe = "两次输入不一致!";
    var that = this;

    // /^[\w|-|\.]++@[\w|-]+(\.[\w|-]+)+$/

    Forms.prototype = {
        Init: function (F) {
            var F = typeof F == "string" ? C.G(F) : F;
            F.V = undefined;
            F.S = F.id.charAt(0).toLowerCase() == "c";
            F.Rpt = C.Attr(F, "Rpt");
            F.Rpt = F.Rpt ? C.G(F.Rpt) : false;

            F.es = F.id[1].toLowerCase() == "c" ? C.Gs(F, "input", true) : F.elements
            for (var i = 0; i < F.es.length; i++) {
                var T = F.es[i],
                    N = T.type.toLowerCase(),
                    p = C.Pt(T);
                if (p) {
                    for (var a in p) {
                        T[a] = p[a]
                    }
                }
                if ((N == "textarea" || N == "password" || N == "text") && (typeof T.Preset == "string" || typeof T.Regex == "string" || typeof T.Cpt == "string")) {
                    T.f = F;
                    if (F.S && arguments.callee.caller != C.Batch) {
                        Forms.prototype.Ve(T);
                    }
                    else {
                        if (!T.Ed) {
                            C.AddEvent(T, "blur", Forms.prototype.Ve, T);
                            T.Ed = true;
                        }
                        else {
                            Forms.prototype.Ve(T);
                        }

                    }
                    if (T.Rpt && typeof T.Rpt == "string")
                        T.Rpt = C.G(T.Rpt);
                    C.AddClass(T.Rpt, T.Cls);
                    if (F.V == false) { return; }
                }
            }
            if (F.V == undefined) {
                F.V = true;
                if (F.id.slice(-1) == "s") {
                    F.D = Forms.Gv(F);
                }
            }
            else {
                F.D = "未通过验证!不返回键值对哦";
            }
        },
        Ve: function (T) {
            var T = arguments.length == 1 ? T : arguments[1];
            if ((T.Preset && T.Preset.indexOf("Rqd") > -1) || T.value != "" || T.Regex || T.Cpt) {
                var Rs = T.Preset ? T.Preset.split(" ") : [];//Hr = (typeof T.Regex == "string") && T.Regex.Trim() != "";
                if (T.Regex) { Rs.push(eval(T.Regex)) }
                if (typeof T.Cpt == "string" && T.Cpt != "undefined") {
                    that.Cpt = new RegExp("^" + C.G(T.Cpt).value + "$", "g");
                    Rs.push(that.Cpt);
                }
                T.V = false;
                T.Nt = (T.Rpt &&typeof T.Rpt!="string"&& T.Rpt.tagName.toLowerCase() == "input") ? false : T.Rpt;
                T.Rpt = C.G(T.Rpt) || T.Nt || T.f.Rpt;
                //T.Rpt = C.G(C.Attr(T, "Rpt")) || T.Nt;
                T.value = T.value.Trim();
                T.Em = "";
                for (var j = 0; j < Rs.length; j++) {
                    if (T.Rpt && (Rs[j] in that || typeof Rs[j] == "object")) {
                        var Rg = that[Rs[j]] || Rs[j];
                        if (T.value.search(Rg) > -1 || T.value.search(Rs[j]) > -1) {
                            T.Cls = "Ok";
                            C.DelClass(T.Rpt, "No");
                            T.Rpt.innerHTML = "";
                        }
                        else {
                            T.Cls = "No";
                            C.DelClass(T.Rpt, "Ok");
                           T.Rpt.innerHTML = (Rs[j] in that || (that.Cpt.source == Rs[j].source)) ? (that[Rs[j]] ? that[Rs[j]].No : that.Cpe) : T.Cem;//C.Attr(T, "Cem")
                            T.f.V = false;
                            //break;
                            return;
                        }
                    }
                }
                //C.AddClass(T.Rpt, T.Cls);
            }
        },
        Gv: function (f) {
            var s = "";
            if (f.V) {
                for (var i = 0; i < f.es.length; i++) {
                    var t = f.es[i];
                    if (t.id.slice(-1).toLowerCase() == "n") {
                        continue;
                    }
                    if (t.type == "radio") {
                        if (t.checked && s.indexOf(t.name)<0) {
                            s += t.name + "=" + f[t.name].value + "&";
                            f[t.name].ed = true;
                        }
                        else {
                            continue;
                        }
                    }
                    else if (t.type == "text" && t.Cpt) {
                        continue;
                    }
                    else {
                        s += t.id + "=" + t.value + "&";
                    }
                }
                //s = s.slice(0, -1);
                f.D = s.slice(0, -1);
            }
            return f.D;
        }
    }
    Forms.Vf = Forms.prototype.Init;
    Forms.Gv = Forms.prototype.Gv;
    C.Batch();
}
