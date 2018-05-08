function cNm()
{
    var Nm = C.G("Nm").value,
        NmRpt = C.G("NmRt");
    if (Nm.length > 0)
    {
        var rUrl = "/Hs/Service.asmx/Existed?Nm=" + Nm;
        C.EXHR(cNmH, "GET", rUrl);
    }
//    function Proc(S)
//    {
//        NmRpt.innerHTML = S;
//    }
    function cNmH(Rsp)
    {
        var Exited = Rsp.documentElement.firstChild.nodeValue.toLowerCase() == "true" ? true : false;
        if (Exited)
        {
            Rst = "用户名正确!";
            NmRpt.className = "Ok";
        }
        else
        {
            Rst = "该用户名不存在";
            NmRpt.className = "No";
            NmRpt.previousSibling.focus();
        }
        NmRpt.innerHTML = Rst;
    }
}