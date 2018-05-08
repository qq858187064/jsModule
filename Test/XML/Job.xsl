<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>Job</title>
				<link href="Job.css" rel="stylesheet"  type="text/css"/>
				<script type="text/javascript" src="Q.js"></script>
			</head>
		<body id="G1">
			<xsl:for-each select="Job/dl"><dl>
					<dt><xsl:apply-templates select="dt" />
						<b>删除</b>
						<b>编辑</b>
					</dt>
					<xsl:for-each select="dd">
						<dd>
							<xsl:value-of select="text()"/>
							<xsl:apply-templates select="ol" />
						</dd>
					</xsl:for-each>
				</dl>
			</xsl:for-each>
		</body>
	</html>
	</xsl:template>
	
	<xsl:template match="dt">
		<a href="#"><xsl:value-of select="."/></a>
	</xsl:template>
	<xsl:template match="ol">
			<ol>
				<xsl:for-each select="li">
					<li><xsl:value-of select="."/></li>
				</xsl:for-each>
			</ol>
	</xsl:template>
</xsl:stylesheet> 

