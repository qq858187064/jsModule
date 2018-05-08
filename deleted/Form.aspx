<%@ Page Title="表单批处理组件" Language="C#" CodeFile="Form.aspx.cs" Inherits="Form" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Forms</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">表单批处理组件</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>表单处理</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="Fs I2">
<form id="Sm2" class="Rg">
<label for="r1"><b>真实姓名：</b><input id="r1" name="" type="text"value="" /><i>*</i></label>
<label class="Sex" for=""><b>性别：</b><label for="Man" class="MR2"><input name="Gen" type="radio" id="Man" checked="checked" />男</label><label for="Woman"><input name="Gen" type="radio" id="Woman" />女</label></label>
<label for="Pd"><b>密码：</b><input id="Pd" name="" type="text" Ps='Preset:"Rqd Cn",Regex:"/^\S{2,10}$/",Cem:"该字段长度为2~10个字符"' /><i>*</i></label>
<label for="Rpd"><b>确认密码：</b><input id="Rpd" name="" type="text" Ps='Preset:"Rqd",Cpt:"Pd",Regex:"/^\S{2,10}$/"'/><i>*</i></label>
<label><b>所在公司：</b><select name=""><option>福州总公司</option><option>深圳分公司</option><option>北京分公司</option></select><i>*</i></label>
<label><b>部门：</b><select name=""><option>研发部</option></select><i>*</i></label>
<label for="Em"><b>公司邮箱：</b><input id="Em" name="" type="text" /><strong class="Mr10">@cnfol.com</strong><i>*</i></label>
<label for=""><label for="Tel"><b>固定电话：</b><input id="Tel" type="text" class="W1" Preset="Ph" Rpt="Rt" Group="Aa" /></label><label class="Mb" for="Mob"><b>手机：</b><input id="Mob" name="Mob" type="text"  Preset="Mb"  Group="Aa" /><i id="Rt">*至少填一项！</i></label></label>
<a href="####" onclick="Forms.Vf('Sm2');alert('该表单验证结果：'+C.G('Sm2').V);" class="BtnLg">注&nbsp;册</a>
</form>
<%--
<form id="Sm2" class="Rg">
<label for="r1"><b>真实姓名：</b><input id="Text1" name="" type="text" Preset="Rqd Cn" value="" /><i>*</i></label>
<label class="Sex" for=""><b>性别：</b><label for="Man" class="MR2"><input name="Gen" type="radio" id="Radio1" checked="checked" />男</label><label for="Woman"><input name="Gen" type="radio" id="Radio2" />女</label></label>
<label for="Pd"><b>密码：</b><input id="Pd" name="" type="text" Preset="Rqd" /><i>*</i></label>
<label for="Rpd"><b>确认密码：</b><input id="Text3" name="" type="text" Preset="Rqd" Cpt="Pd" /><i>*</i></label>
<label><b>所在公司：</b><select name=""><option>福州总公司</option><option>深圳分公司</option><option>北京分公司</option></select><i>*</i></label>
<label><b>部门：</b><select name=""><option>研发部</option></select><i>*</i></label>
<label for="Em"><b>公司邮箱：</b><input id="Text4" name="" type="text" /><strong class="Mr10">@cnfol.com</strong><i>*</i></label>
<label for=""><label for="Tel"><b>固定电话：</b><input id="Text5" type="text" class="W1" Preset="Ph" Rpt="Rt" Group="Aa" /></label><label class="Mb" for="Mob"><b>手机：</b><input id="Text6" name="Mob" type="text"  Preset="Mb"  Group="Aa" /><i id="I1">*至少填一项！</i></label></label>
<a href="####" onclick="Forms.Vf('Sm2');alert('该表单验证结果：'+C.G('Sm2').V);" class="BtnLg">注&nbsp;册</a>
</form>
 --%>
 <form id="Cm1" class="AjLg">
<label for="Nm">用户名：<input type="text" id="Nm" class="Txt"  value="" Preset="Rqd Cn" Regex="/^\S{2,10}$/" Cem="姓名长度须在2-10之间" /><i id="NmRt"></i></label>
<label for="Pwd">密&nbsp;&nbsp;&nbsp;码：<input type="password" id="Pwd" class="Txt" Preset="Rqd Pwd" Regex="/^\S{6,128}$/" Cem="密码长度须在6-128位之间"  /><i id="PwdRt"></i><a href="#">忘记密码？</a></label>
<label class="Rmb"><a class="BtnLg"  href="javascript:Forms.Vf('Cm1');alert('该表单验证结果：'+C.G('Cm1').V);">登&nbsp;录</a><label class="Ilb" for="RmbPwd"><input id="RmbPwd" type="checkbox" title="1年内保持登录" />保持登录</label></label>
</form>
<p>Forms组件用来实现所有表单的客户端批量验证，表单ID的第一个字符是组件预置的：如果ID的每一个字符为“C”,则在表单的提交时批量验证其中的输入元素，否则，当表单中需要验证的元素值失去焦点时，就验证元素.</p>
<p>该组件还为表单中需要在验证的元素预置了三个属性Preset、Regex、Cem，分别用来指定组件预定义的正则、调用者自定义的正则和自定义错误信息，后两个预置的属性是可选的(但需要同时存在)：如果元素上三个属性都不设置，组件不对该元素进行验正。否则，先验证Preset属性所定义的组件预置的值:Rqd、Cn、Ph、Mb、Pwd，这5个值依次表示："该项不能为空"、"电话格式不正确"、"手机格式不正确"、"不允许出现非中文"、"密码不不能包含'(){}=:;. '字符"。</p>
<p>接着验证Regex属性所定的的正则表达式，指定该属性的元素也需要指定Cem属性，用来指定自定义错误信息，验证结果默认显示在验证元素后一个兄弟元素中，如果不希望这样，则为元素定义Rpt属性，用来指定显示验证结果元素的ID，显示验证结果的元素需要预置两个Css样式Ok、No，分别用来定义验证成功和验证失败时的样式。</p><p>如果需要自行对ID为"Sm2"的表单进行验证，则可以var Fm=C.G("Sm2");Fm.Vf();调用Vf方法之后，便可以用Fm.V属性获取表单验证的结果了,其值为Boolean类型。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Forms("Sm2");<br />&lt;/script&gt;</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Form.js"></script>
<script type="text/javascript" src="/Js/Util.js"></script>
</asp:Content>
<asp:Content ID="ContentRunJs" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=14;Forms("Sm2");</asp:Content>