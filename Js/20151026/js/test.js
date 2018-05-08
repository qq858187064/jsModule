function csm()
{
    if (!sm.fill)
    {
        sm.innerHTML += C.Pre(sm).innerHTML;
        var lbs = C.Gs(sm, "label", true);

        sts = C.Gs(lbs[0], "input")[0];
        ste = C.Gs(lbs[1], "input")[0];
        ss = C.Gs(lbs[2], "input")[0];
        ssi = C.Gs(lbs[3], "input")[0];
        se = C.Gs(lbs[4], "input")[0];
        sei = C.Gs(lbs[5], "input")[0];
        sreg = C.Gs(lbs[6], "input")[0];
        sfilt = C.Gs(lbs[7], "input")[0];
        sfp = C.Gs(lbs[8], "input", true);
        sfp[0].name = sfp[1].name = "sfp";
        for (var i = 0; i < lbs.length; i++)
        {
            lbs[i].setAttribute("for", "");
        }
        sm.fill = true;
    }
    else
    {
        sts.value = "";
        ste.value = "";
        ss.value = "";
        ssi.value = "";
        se.value = "";
        sei.value = "";
        sreg.value = "";
        sfilt.value = "";
    }

}
/*_重置密码_*/
function rst()
{
    var s="验证码错误";
    C.EXHR(function (o) {
        if(o>0)
        {
            s="邮箱验证已通过，请及时重置密码"
        }
        document.title=s;
    },
    "GET",
    "/ws/Wcf.svc/rp?a=" + 4 + "&p=" + sha1(C.G("rpwd").value)
    );
}

function vc() { var ia = C.G('ia'), yr = C.G('yr'), vi = C.G('vi'); Cnct('vc?t=' + Cookie('t') + '&c=' + ia.value.trim()); Cb = function (o) { var cn = 'No'; if (o == '') { cn = 'Ok'; C.DelClass(yr, 'No'); } else { C.DelClass(yr, 'Ok');/*vi.src = '/ws/wcf.svc/authCode?' + Math.random();//ia.value = '';//ia.focus();*/ } C.AddClass(yr, cn); yr.innerHTML = o; } }



var ia = C.G("ia"),
    mi = C.G("Em");

/*_注册_*/
function reg() {
    var F = C.G("Cm1");
    Forms();
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
        Cnct(Str);

    }
    Cb = function (o) {

        var em = "",
            cls = "No",
            rt = C.G("Rt"),
            it;
        switch (o) {
            //0验证码错误,-1验证码正确,-2用户已存在
            case 0:
                em = "0验证码错误";
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
        if (it) {
            it.innerHTML = em;
            C.AddClass(it, cls);
        }
        else {
            alert("您已注册成功，将自动跳转至用户中心")
            location.assign("/admin/account.aspx");//注册成功时，需要跳转
        }





    };

}