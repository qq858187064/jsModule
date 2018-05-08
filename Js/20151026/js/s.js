var un = Cookie("u"),
    an = C.G("an"),
    ua = C.G("ua"),
    act = C.G("_act"),
    pwd = C.G("_pwd"),
    rt = C.G("rt"),
    lg = C.G("lg"),
    a = Cookie("a"),
    ia = C.G("ia"),
    err = C.G("errortip2"),
    mi = C.G("_Em");
//Menus(lg);//,"nm"
if (un && uid) {
    cu(un);
}
function cu(o) {
    an.style.display = "none";
    ua.style.display = "inline";
    C.G("nm").innerHTML = o;
}
function Cb(o) {
    //alert("old cb")
    //var tmp=o.Email || o.Msg;
    //if(tmp)
    //{
    //    cu(tmp);
    //    Cookie("u",tmp);
    //}
}
//退出qq第三方登录
function tui() {
    QC.Login.signOut();
}
function quit() {
    Cookie('u', null);
    Cookie('a', null);
    Cookie('temp', null);
    //tui();
    an.style.display = "inline";
    ua.style.display = "none";
    pwd.value = "";
    act.focus();
    C.Jsp("Quit");
    location.assign("/");
    //location.reload();
}
/*登录*/
function Lg() {
    var F = C.G("cc"),
        rmb = C.G("rmb");
    var av = act.value,
    pv = pwd.value.trim(),
    ev = sha1(pv);
    Forms();
    Forms.Vf(F);
    if (F.V) {
        Str = "Login?Input=";
        Str += av;
        Str += "&Pwd=";
        Str += ev;
        C.Jsp(Str);
        rt.innerHTML = "登录中...";
        Cb = function (o) {
            if (o == 0) {
                rt.innerHTML = "登录信息有误，请重新输入！";
                rt.className = "No";
                act.focus();
            } else {
                lgcb(o, ev);
            }
        }
    }
}
/*验证密码*/
function judpw() {
    var pwd = C.G("_pwd").value;
    if (pwd == "") {
        rt.innerHTML = "请输入密码！";
        rt.className = "No";
    } 
}
/*登陆验证账号*/
function yan() {
    var av = act.value;
    if (av == "请输入手机号码或邮箱") { return; } else {
        if (av != "") {
            Forms();
            if (av.indexOf("@") > 0) {
                if ((!(Em.test(av)))) {
                    rt.innerHTML = Em.No;
                    act.value = "";
                    rt.className = "No";
                    act.focus();                   
                } else {
                    err.innerHTML = "";
                    rt.className = "Ok";
                    C.G("lga").removeAttribute("disabled");
                }
            } else {
                if (!(Mb.test(av))) {
                    rt.innerHTML = Mb.No;
                    rt.className = "No";
                    act.focus();
                } else {
                    rt.innerHTML = "";
                    rt.className = "Ok";
                    C.G("lga").removeAttribute("disabled");
                }
            }
        }
        else {
            rt.innerHTML = "请输入账号！";
            rt.className = "No";
            //act.focus();
        }
    }
}

function lgcb(o, ev) {
    var tmp = o.Email == "" ? o.Phone : o.Email;
    if (tmp) {
        cu(tmp);
        Cookie("u", tmp, 365);
        if (rmb.checked) {
            Cookie("a", ev, 30)//记住登录状态30天
        }
        // location.assign((location.pathname.indexOf("login.aspx")>-1||location.pathname.indexOf("Register.aspx")>-1)?"/admin/Default.aspx":location.pathname);
        location.assign((location.href.indexOf("login.aspx") > -1 || location.href.indexOf("Register.aspx") > -1) ? "/admin/Default.aspx" : location.href);
    }
}




/*注册*/
var err = C.G("errortip2"),
 emo = C.G("_emo"),
 pho = C.G("_pho"),
reg = C.G("rga"),
 phone, email;
/*验证账号*/
function judge() {
    Forms();
    if (mi.value != "请输入手机号码或邮箱") {
        if (mi.value.length > 0) {
            var b = mi.value.indexOf("@");
            if (b > 0) {
                if (!(Em.test(mi.value))) {
                    err.innerHTML = Em.No;
                    err.className = "No";
                    mi.focus();
                } else {
                    C.DelClass(C.G("emal"), "hide");
                    //C.DelClass(C.G("iaa"), "hide");
                    C.AddClass(C.G("phon"), "hide");
                    err.innerHTML = "";
                    err.className = "errortip";
                    reg.removeAttribute("disabled");
                    su();
                }
            } else {

                if (!(Mb.test(mi.value))) {
                    err.innerHTML = Mb.No;
                    err.className = "No";
                    mi.focus();
                } else {
                    C.AddClass(C.G("emal"), "hide");
                    //C.AddClass(C.G("iaa"), "hide");
                    C.DelClass(C.G("phon"), "hide");
                    err.innerHTML = "";
                    err.className = "errortip";
                    reg.removeAttribute("disabled");
                    su();
                }
            }

        } else {
            err.innerHTML = "请输入账号！";
            err.className = "No";
            //mi.focus();
        }
    }
}


/*验证用户是否存在*/
function su() {
    C.EXHR(function (o) {
        if (o == 1) {
            err.innerHTML = "此账号已经注册！您可以直接登录！";
            err.className = "No";
            reg.setAttribute("disabled", true);
            C.Gn("GP1")[0].setAttribute("disabled", true);
            C.Gn("GP2")[0].setAttribute("disabled", true);
        } else {
            reg.removeAttribute("disabled");
            err.innerHTML = "";
            err.className = "errortip";
            C.Gn("GP1")[0].removeAttribute("disabled");
            C.Gn("GP2")[0].removeAttribute("disabled");
        }
    },
     "GET",
     "/ws/Wcf.svc/juse?account=" + mi.value);
}

/*获取邮箱验证码*/
function gemnum() {
    var o = C.G("gemo");
    if (mi.value.length > 0) {
        var temp = 0;
        err.innerHTML = "";
        var wait = 60;
        function time(o) {
            if (temp == 0) {
                sfp();
            }
            if (wait == 0) {
                temp = 0;
                o.removeAttribute("disabled");
                o.value = "获取验证码";
                wait = 60;
            } else {
                o.setAttribute("disabled", true);
                o.value = "重新发送(" + wait + ")";
                wait--;
                setTimeout(function () { time(o) }, 1000)
                temp = 1;
            }
        }
        time(o);
    } else {
        mi.focus();
        err.innerHTML = "请先输入账号！";
    }

}


/*获取手机验证码*/
function gphnum() {
    var o = C.G("gpho");
    if (mi.value.length > 0) {
        err.innerHTML = "";
        var wait = 60;
        var temp = 0;
        function time(o) {
            if (temp == 0) {
                sph();
            }
            if (wait == 0) {
                temp = 0;
                o.removeAttribute("disabled");
                o.value = "获取验证码";
                wait = 60;
            } else {
                o.setAttribute("disabled", true);
                o.value = "重新发送(" + wait + ")";
                wait--;
                setTimeout(function () { time(o) }, 1000)
                temp = 1;
            }
        }
    } else {
        mi.focus();
        err.innerHTML = "请先输入账号！";

    }
    time(o);
}


/*_向邮箱发验证码_*/
function sfp() {
    if (mi.value != "" && mi.value != "请输入手机号码或邮箱") {
        C.EXHR(function (o) {
            if (o == 1) {
                err.innerHTML = "验证码已成功发送至邮箱，请注意查收，并将收到的验证码填入输入框!";
                err.className = "Ok";
            } else {
                err.innerHTML = "验证码发送失败，请重试";
                err.className = "No";
            }
        },
        "GET",
        "/ws/Wcf.svc/verifi?address=" + mi.value);
    }
}


/*发送手机验证码*/
function sph() {
    if (mi.value != "" && mi.value != "请输入手机号码或邮箱") {
        C.EXHR(function (o) {
            if (o > 0) {
                err.innerHTML = "验证码已发送！";
                err.className = "Ok";
            }
            else {
                err.innerHTML = "验证码发送失败，请重试！";
                err.className = "No";
            }
        },
        "GET",
        "/ws/Wcf.svc/msgTo?tel=" + mi.value);
    }
}



/*_注册_*/
function regat() {
    var F = C.G("Cm1");
    Forms(F);
    Forms.Vf(F);
    var b = mi.value.indexOf("@");
    if (F.V) {
        if (b > 0) {
            //if (ia.value == "") {
            //    err.innerHTML = "请输入验证码！";
            //    ia.focus();
            //} else
            if (emo.value == "") {
                err.innerHTML = "请输入邮箱验证码！";
                err.className = "No";
                emo.focus();
            } else {
                err.innerHTML = "";
                err.className = "errortip";
                email = mi.value.trim();
                phone = "";

                zhu();
            }
        } else {
            if (pho.value == "") {

                err.innerHTML = "请输入短信验证码！";
                err.className = "No";
                pho.focus();
            }
            else {
                err.innerHTML = "";
                err.className = "errortip";
                email = "";
                phone = mi.value.trim();

                zhu();
            }
        }
    }
}

/*注册操作数据库*/
function zhu() {

    Pwd = sha1(C.G("_rPwd").value.trim()),
    Str = "Reg?Em=";
    Str += email;
    Str += "&Pwd=";
    Str += Pwd;
    Str += "&Rid=4";
    Str += "&vc=";
    //Str += ia.value.trim();
    Str += "&emo=";
    Str += emo.value.trim();
    Str += "&pho=";
    Str += pho.value.trim();
    Str += "&phone=";
    Str += phone;
    C.Jsp(Str);
    Cb = function (o) {
        var em = "",
            cls = "No",
            it = false;
        //Cb("{Uid:" + Rd[0] + ",Email:\"" + Rd[1] + "\",Rid:" + hc.Session["rid"] + "}");  
        switch (o) {
            case -3:
                err.innerHTML = "短信验证码错误！";
                pho.focus();
                it = pho.Rpt;
                err.className = "No";
                break;
                //case -2:
                //    err.innerHTML = "图片和邮箱验证码错误！";
                //    ia.focus();
                //    it = ia.Rpt;
                //    break;
                //case -1:
                //    err.innerHTML = "图片验证码错误！";
                //    ia.focus();
                //    it = ia.Rpt;
                //    break;
            case -4:
                err.innerHTML = "邮箱验证码错误！";
                emo.focus();
                err.className = "No";
                //it = ia.Rpt;
                break;
            case -5:
                err.innerHTML = "注册失败！";
                break;
            case 0:
                err.innerHTML = "注册失败！";

                break;
            default:
                err.innerHTML = "注册成功！";
                break;
        }
        if (o > 0) {
            cls = "Ok";
            lg.innerHTML = "登录中...";
            Cookie('u', mi.value.trim());
            location.assign("/admin/personal.aspx");//注册成功时，需要跳转
        }
        //if (it) {
        //    it.innerHTML = em;
        //    C.AddClass(it, cls);
        //}
        //else {
        //    lg.innerHTML = "登录中...";
        //    Cookie('u', EM.value.trim());
        //    location.assign("/admin/account.aspx");//注册成功时，需要跳转
        //}
    };
}


/*vi.src = '/ws/wcf.svc/authCode?' + Math.random();//ia.value = '';//ia.focus();*//* 
function vic() {
    var ia = C.G('ia'),
        yr = C.G('yr'),
        vi = C.G('vi');
    C.Jsp('vc?t=' + Cookie('t') + '&c=' + ia.value.trim());
    Cb = function (o) {
        var cn = 'No';
        if (o == '') {
            cn = 'Ok';
            C.DelClass(yr, 'No');
            C.G("rga").onclick = reg;
        }
        else
        {
            C.DelClass(yr, 'Ok');
           
        }
        var yr = C.G('yr');
        C.AddClass(yr, cn);
        yr.innerHTML = o;
    }
}
*/

