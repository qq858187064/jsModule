<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl" xmlns:user="Qin">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template name="AA" match="Nav">
        <script src="http://localhost:60080/Scripts/Base.js"></script>
        <!--<script type="text/javascript">
            function Isw()
            {
            var rUrl = "http://localhost:60080/Service.asmx/Existed?Nm=test";
            C.EXHR(cNmH, "GET", rUrl);
            function cNmH(Rsp)
            {
            document.title= Rsp.documentElement.firstChild.nodeValue.toLowerCase() == "true" ? true : false;
            }
            }
            Isw()
        </script>-->
        <xsl:for-each select="div/*">
            <xsl:copy-of select="."/>
            <xsl:if test="1&lt;8"><!--user:Isw()-->
                <i name="Ctr">
                    <a href="####">编辑</a>
                    <a href="####">删除</a>
                    <a href="####">添加</a>
                </i>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>
    <!--<msxsl:script language="javascript" implements-prefix="user">
        function Isw()
        {
        var rUrl = "http://localhost:60080/Service.asmx/Existed?Nm=test";
        C.EXHR(cNmH, "GET", rUrl);
        function cNmH(Rsp)
        {
            return Rsp.documentElement.firstChild.nodeValue.toLowerCase() == "true" ? true : false;
        }
        }
    </msxsl:script>-->
</xsl:stylesheet>