function Forms() {
    Forms.Rqd = /^.+$/m;
    Forms.Rqd.No = "该项不能为空！";
    Forms.Ph = /^\((\d{3,4})\)|\1-?\d{5,8}$/;
    Forms.Ph.No = "电话格式不正确！";
    //Forms.Mb = /^\0?\d{11}$/;
    Forms.Mb = /^1[34578]+\d{9}$/;
    Forms.Mb.No = "手机格式不正确！";
    Forms.Cn = /^[\u4E00-\u9FA5]{1,}$/;
    Forms.Cn.No = "不允许出现非中文";
    Forms.Pwd = /^(\w|[^\(\)\{\}\=\:\;\.\s]){1,}$/;
    Forms.Pwd.No = "不能包含'(){}=:;. '等敏感字符";
    Forms.Em = /^[\w|\-|\.]+@[\w|-]+(\.[\w|-]+)+$/;
    Forms.Em.No = "邮箱格式不正确";
    Forms.Url = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
    Forms.Url.No = "Url格式不正确";
    Forms.Idn = /^\d{17}\d|X$/;
    Forms.Idn.No = "身份证号码不合法";
    Forms.Cpt = 1;
    Forms.Cpt.No =Forms.Cpe= "两次输入不一致!";
	Forms.Cp="两项输入不能相同";
	Forms.Ns = /^[A-Za-z0-9\u4e00-\u9fa5]+$/;
    Forms.Ns.No = "请输入字母、数字、汉字或其组合";

    var that = this;
    // /^[\w|-|\.]++@[\w|-]+(\.[\w|-]+)+$/

    Forms.prototype = {
        Init: function (F) {
            var F = typeof F == "string" ? C.G(F) : F;
            F.V = undefined;
            F.b = F.id.charAt(0).toLowerCase() == "b";
            F.Rpt = C.Attr(F, "rpt");
            F.Rpt = F.Rpt ? C.G(F.Rpt) : "";
            F.es =F.tagName=="FORM"?F.elements:C.Gs(F, "input", true);//F.id.charAt(1).toLowerCase() == "c" 
            for (var i = 0; i < F.es.length; i++) {
                var T = F.es[i],
                    N = T.type.toLowerCase();
                if(!T.p)
                    T.p = C.Pt(T);
                if (T.p) {
                    for (var a in T.p) {
                        //console.log(a, p.hasOwnProperty[a])
                       // if (!p.hasOwnProperty[a])
                          //  if(T[a])
                        T[a] = T.p[a]
                    }
                }
                if ((N == "textarea" || N == "password" || N == "text") && (typeof T.Preset == "string" || typeof T.Regex == "string" || typeof T.Cpt == "string"))
				{
                    T.f = F;
                   // if ((!F.S || arguments.callee.caller != C.Batch) && !T.Ed) {
                    if (F.b && !T.Ed)
                    {
					    C.AddEvent(T, "blur", Forms.prototype.Ve, T);
					    T.Ed = 1;
                    }
					else
					{
						 Forms.prototype.Ve(T);
						 if(!T.V)
						 {
							 
						 }
					}
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
                F.D = "未通过验证！不返回键值对。";
            }
        },
        Ve: function (T) {
            var T = arguments.length == 1 ? T : arguments[1];
            if (T.offsetHeight == 0){//如果元素未显示则认为验证通过
                T.V = true;return}
            if ((T.Preset && T.Preset.indexOf("Rqd") > -1) || T.value != "" || T.Regex || T.Cpt) {
                var Rs = T.Preset ? T.Preset.split(" ") : [];//Hr = (typeof T.Regex == "string") && T.Regex.Trim() != "";
                if (T.Regex) { Rs.push(eval(T.Regex)) }
                if (typeof T.Cpt == "string" && T.Cpt != "undefined") {
                    Forms.Cpt = new RegExp("^" + C.G(T.Cpt).value + "$", "g");
                    Rs.push(Forms.Cpt);
                }
                T.V = false;
                T.Nt = (T.Rpt && typeof T.Rpt != "string" && T.Rpt.tagName.toLowerCase() == "input") ? false : T.Rpt;
                T.Rpt = C.G(T.Rpt) || T.Nt || T.f.Rpt;
                //T.Rpt = C.G(C.Attr(T, "Rpt")) || T.Nt;
                T.value = T.value.trim();
                T.Em = "";
                for (var j = 0; j < Rs.length; j++) {
                    //if (T.Rpt && (Rs[j] in that || typeof Rs[j] == "object"))
                    if (Rs[j] in Forms || typeof Rs[j] == "object")
                    {
                        var Rg = Forms[Rs[j]] || Rs[j];
                        if (T.value.search(Rg) > -1 || T.value.search(Rs[j]) > -1)
                        {
                            if(!T.f.Rpt){/*如果是共用的rpt,通过验证不新增class*/
                            C.AddClass(T.Rpt, "ok");
                            C.DelClass(T.Rpt, "no");
							}
                            if(T.Rpt)
                            T.Rpt.innerHTML = "";
                        }
                        else
						{
                            C.AddClass(T.Rpt, "no");
                            C.AddClass(T, "tn")
							if(T.Rpt)
								C.Sr(T);
							{
                            // T.parentNode.appendChild(T.Rpt)
						C.Lt(T)
						// if(dw&&dw.offsetLeft<0)
							// T.L=T.L-dw.offsetLeft;
						T.Rpt.style.left=T.L+"px";
						T.Rpt.style.top=T.T+T.offsetHeight+3+"px";
}
						
							if (!T.onkeyup)
                            {
                                function fcs(e, T)
                                {
                                    C.DelClass(T, "tn");
                                    setTimeout(function (T) {
                                       T.Rpt.innerHTML = "";
                                    }(T), 1000)
                                }
                                C.AddEvent(T, "keyup", fcs, T);
                            }

                            C.DelClass(T.Rpt, "ok");
                            T.Rpt.innerHTML = (Rs[j] in Forms || (Forms.Cpt.source == Rs[j].source)) ? (Forms[Rs[j]] ? Forms[Rs[j]].No : Forms.Cpe) : T.Cem;//C.Attr(T, "Cem")
                            T.V=T.f.V = false;
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
                        if (t.checked && s.indexOf(t.name) < 0) {
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
    //Forms.ok = function () { }
}
Forms()