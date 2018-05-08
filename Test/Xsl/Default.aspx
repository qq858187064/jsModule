<%@ page language="C#" enableviewstate="false" enableviewstatemac="false" theme="Black" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Xsl</title>
    <script type="text/javascript" src="../Scripts/Base.js"></script>
</head>
<body style="padding:222px">
    <asp:Xml ID="Xml1" runat="server" DocumentSource="~/Test/Xsl/Nav.xml" TransformSource="~/Test/Xsl/Nav.xslt"></asp:Xml>
</body>
</html>
