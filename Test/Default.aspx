<%@ page title="Test" language="C#" enableviewstate="false" enableviewstatemac="false" theme="Black" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server"></asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server"></asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server"></asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server">
    <dd>
        <form runat="server" class="AjLg">
            测试连接:<p id="Rt" runat="server"></p><hr />WCFTest:<p id="P1" runat="server"></p>
            <%--<a href="####" onclick="Cnct('Connect?Cb=?')">Jquery连接</a>--%>
            <a href="####" onclick="Cnct('Connect?ConStr=server=192.168.100.5;database=ThinkTank;Uid=qin;Pwd=123')">测试连接</a>
            <a href="####" onclick="Cnct('WCFServiceTest?Str=I am param')">WCFTest</a>
            <a href="####" onclick="Cnct('WCFServiceTest')">WCFTest</a>
<%--            <asp:Button runat="server" ID="StartBtn" Text="WCFServiceTest" OnClick="CrtDb" />
            <asp:Button ID="Btc" runat="server" Text="Test" OnClick="Test" />--%>
            <label for="Sv">数据源：<input type="text" id="Sv" class="Txt" Perset="Rqd" runat="server"/></label>
            <label for="Dn">数据库名称：<input type="text" id="Dn" class="Txt" Perset="Rqd" runat="server"/></label>
            <label for="Uid">数据库用户名：<input type="text" id="Uid" class="Txt" Perset="Rqd" runat="server"/></label>
            <label for="Pwd">数据库用密码：<input type="text" id="Pwd" class="Txt" Perset="Rqd" runat="server"/></label>
        </form>
    </dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server"></asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" runat="Server">
    <script type="text/javascript" id="Cbf"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" runat="Server">
    window.Cm=2;
    function Cb(o)
    {
        C.G(<%=Rt.ClientID %>).innerHTML=o.Msg;
    }
    function Cnct(Str)
    {
        var rUrl ="http://192.168.100.5:60081/Service.svc/",
        Jt=C.G("Cbf"),
        Jn=Jt.cloneNode(true),
        Bd=C.Gs(document.documentElement, "body")[0];
        Jt.src = rUrl+Str;
        Bd.replaceChild(Jn,Jt);
    }




</asp:Content>
