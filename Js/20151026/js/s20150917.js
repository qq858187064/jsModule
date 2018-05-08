var un = Cookie("u"),
    an = C.G("an"),
    ua = C.G("ua"),
    act = C.G("act"),
    pwd = C.G("pwd"),
    rt = C.G("rt"),
    lg = C.G("lg"),
    a = Cookie("a"),
    ia = C.G("ia"),
    mi = C.G("Em");


Menus(lg);//,"nm"
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
function quit() {
    Cookie('u', null);
    Cookie('a', null);
    an.style.display = "inline";
    ua.style.display = "none";
    pwd.value = "";
    act.focus();
    C.Jsp("Quit");
    location.assign("/");
    //location.reload();
}
function Lg() {
    var F = C.G("cc"),
        rmb = C.G("rmb");
    Forms();
    Forms.Vf(F);
    var av = act.value,
    pv = pwd.value.trim(),
    ev = sha1(pv);
    if (F.V) {
        Str = "Login?Input=";
        Str += av;
        Str += "&Pwd=";
        Str += ev;
        C.Jsp(Str);
        lg.innerHTML = "登录中...";
        Cb = lgcb;
    }
}
function lgcb(o) {
    var tmp = o.Email || o.Msg;
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

/*_注册_*/
function reg() {
    var F = C.G("Cm1");
       Forms(F);
     Forms.Vf(F);
    if (F.V) {
        var Em = mi.value,
            Pwd = sha1(C.G("rPwd").value.trim()),
        Str = "Reg?Em=";
        Str += Em;
        Str += "&Pwd=";
        Str += Pwd;
        Str += "&Rid=4";
        Str += "&vc=";
        Str += ia.value;
        C.Jsp(Str);
    }
    Cb = function (o) {
        var em = "",
            cls = "No",
            rt = C.G("Rt"),
            it=false;
        //Cb("{Uid:" + Rd[0] + ",Email:\"" + Rd[1] + "\",Rid:" + hc.Session["rid"] + "}");

        switch (o) {
            //0验证码错误,-1验证码正确,-2用户已存在
            case 0:
                em = "验证码错误";
                it = ia.Rpt;
                break;
            case -2:
                em = "用户已存在";
                it = mi.Rpt;
                break;
            default:
                cls = "Ok";
                break;
        }
        if (it)
        {
            it.innerHTML = em;
            C.AddClass(it, cls);
        }
        else {
            lg.innerHTML = "登录中...";
            Cookie('u', mi.value);
            location.assign("/admin/account.aspx");//注册成功时，需要跳转
        }
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

