<%@ Page Language="C#" %>
<%@ Import Namespace="System"%>
<%@ Import Namespace="System.Collections.Generic"%>
<%@ Import Namespace="System.Web "%>
<%@ Import Namespace="System.Web.UI"%>
<%@ Import Namespace="System.Web.UI.WebControls"%>
<script runat="server">
    void Page_Load(object o, EventArgs e)
    {
        Response.Clear();
        Response.ContentType = "text/json";
        string Rst = "{U:'<i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873703-1-1.html\" target=\"_blank\">张氏淘金:6月11到6月15日黄金的一个走势情况和做单点位提醒</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873695-1-1.html\" target=\"_blank\">【龙姐叼金】教你理性平仓，买的准不如卖得精</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873691-1-1.html\" target=\"_blank\">[小鱼儿论金]黄金投资——致命的风险管理与投资心态</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873672-1-1.html\" target=\"_blank\">【金口玉音】2012/06/11-06/15黄金市场重要数据预览</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873664-1-1.html\" target=\"_blank\">【金天有我】做市商提供的现货黄金延迟交收业务不是期货</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873659-1-1.html\" target=\"_blank\">好消息.............大家一起分享，短线操作</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873648-1-1.html\" target=\"_blank\">黄金价格大幅反弹，美国批发数据好于预期</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873647-1-1.html\" target=\"_blank\">好消息.............大家一起分享，短线操作</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873644-1-1.html\" target=\"_blank\">【0亦聘婷论金】希腊大选，下周又有怎样的好戏上演-周评</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873632-1-1.html\" target=\"_blank\">【小鱼儿论金】6.10下周一黄金行情分析和做单建议</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873621-1-1.html\" target=\"_blank\">【周纳百金】-6月10金银周评及下周行情分析操作建议</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873616-1-1.html\" target=\"_blank\">【-金鼎天下-亦聘婷论金】6.7喊单实录+锁损技巧+锁盈技巧</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873614-1-1.html\" target=\"_blank\">【雄霸金坛】找准定位，你是哪种投资者？</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873604-1-1.html\" target=\"_blank\">【事务所-金毅理财】:个人投资者应具备什么</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873603-1-1.html\" target=\"_blank\">【金鼎天下-杨萧论金】：炒黄金赢钱要学会自我控制</a><i>2012-6-10</i><a href=\"http://bbs.cnfol.com/thread-6873599-1-1.html\" target=\"_blank\">【事务所-金毅理财】如何成为黄金高手.天天看一遍</a>'}";
        Response.Write(Request.QueryString["Cb"]+"("+Rst+");");
        Response.End();
    }
</script>