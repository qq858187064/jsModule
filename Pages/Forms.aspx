<%@ Page Title="表单批处理组件" Language="C#" CodeFile="Forms.aspx.cs" Inherits="Forms" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Forms</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">表单批处理组件</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>表单处理</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="Fs I2">
<form id="Cm1s" class="AjLg" Rpt="rt"><!--,Regex:/^\S{2,10}$/,Cem:'姓名长度须在2-10之间'-->
<label for="Nm">用户名：<input type="text" id="Nm" class="Txt" p="Preset:'Rqd Cn'" /></label>
<label for="Pwd">密&nbsp;&nbsp;&nbsp;码：<input type="password" id="Pwd" class="Txt" p="Preset:'Rqd Pwd',Regex:/^\S{6,128}$/,Cem:'密码长度须在6-128位之间'" /><a href="#">忘记密码？</a></label>
<label class="Rmb"><a class="BtnLg"  href="javascript:lg()">登&nbsp;录</a><label class="Ilb" for="RmbPwdn"><input id="RmbPwdn" type="checkbox" title="1年内保持登录"  />保持登录</label></label>
    <label id="rt"></label>
</form>
<form id="Sm2" class="Rg">
<label for="r1"><b>真实姓名：</b><input id="r1" name="" type="text" p="Preset:'Rqd Cn',Regex:/^\S{2,10}$/,Cem:'姓名长度须在2-10之间'" /><i>*</i></label>
<label class="Sex" for=""><b>性别：</b><label for="Man" class="MR2"><input name="Gen" type="radio" id="Man" checked="checked" />男</label><label for="Woman"><input name="Gen" type="radio" id="Woman" />女</label></label>
<label for="Pd"><b>密码：</b><input id="Pd" name="" type="text" p='Preset:"Rqd Pwd"'/><i>*</i></label>
<label for="Rpd"><b>确认密码：</b><input id="Rpd" name="" type="text" p='Preset:"Rqd",Cpt:"Pd",Regex:/^\S{2,10}$/'/><i>*</i></label>
<label><b>所在公司：</b><select name=""><option>福州总公司</option><option>深圳分公司</option><option>北京分公司</option></select><i>*</i></label>
<label><b>部门：</b><select name=""><option>研发部</option></select><i>*</i></label>
<label for="Em"><b>公司邮箱：</b><input id="Em" name="" type="text" /><strong class="Mr10">@cnfol.com</strong><i>*</i></label>
<label for=""><label for="Tel"><b>固定电话：</b><input id="Tel" type="text" class="W1" p="Preset:'Ph',Rpt:'Rt'" Group="Aa" /></label><label class="Mb" for="Mob"><b>手机：</b><input id="Mob" name="Mob" type="text" p="Preset:'Mb'"  Group="Aa" /><i id="Rt">*至少填一项！</i></label></label>
<a href="####" onclick="Forms.Vf('Sm2');alert('该表单验证结果：'+C.G('Sm2').V);" class="BtnLg">注&nbsp;册</a>
</form>
<div id="Cc1" class="AjLg"><%--    Preset="Rqd Cn" Regex="/^\S{2,10}$/" Cem="姓名长度须在2-10之间" --%>
<label for="Nma">用户名：<input type="text" id="Nma" class="Txt" p="Preset:'Rqd Cn',Regex:/^\S{2,10}$/,Cem:'姓名长度须在2-10之间'"/><i id="NmRta"></i></label>
<label for="Pwda">密&nbsp;&nbsp;&nbsp;码：<input type="password" id="Pwda" class="Txt" P='Preset:"Rqd Pwd",Regex:/^\S{6,128}$/,Cem:"密码长度须在6-128位之间"'  /><i id="PwdRta"></i><a href="#">忘记密码？</a></label>
<label class="Rmb"><a class="BtnLg"  href="javascript:var F=C.G('Cc1');Forms.Vf(F);alert(F.V);">登&nbsp;录</a><label class="Ilb" for="aRmbPwdn"><input id="aRmbPwdn" type="checkbox" title="1年内保持登录"  />保持登录</label></label>
</div>

<%--<form id="Sm2s" class="Rg">
<label for="r1"><b>真实姓名：</b><input id="Text1" name="" type="text" Preset="Rqd Cn" value="" /><i>*</i></label>
<label class="Sex" for=""><b>性别：</b><label for="Man" class="MR2"><input name="Gen" type="radio" id="Man" checked="checked" />男</label><label for="Woman"><input name="Gen" type="radio" id="Woman" />女</label></label><label for="Pd"><b>密码：</b><input id="Pd" name="" type="text" Preset="Rqd" /><i>*</i></label>
<label for="Rpd"><b>确认密码：</b><input id="Text3" name="" type="text" Preset="Rqd" Cpt="Pd" /><i>*</i></label>
<label><b>所在公司：</b><select name="" id="gs"><option value="0">福州总公司</option><option value="1">深圳分公司</option><option value="2">北京分公司</option></select><i>*</i></label>
<label><b>部门：</b><select name="" id="bm"><option value="0">研发部</option></select><i>*</i></label>
<label for="Em"><b>公司邮箱：</b><input id="Text4" name="" type="text" Preset="Rqd Em" /><i >*</i></label>
<label for=""><label for="Tel"><b>固定电话：</b><input id="Text5" type="text" class="W1"  Preset="Ph" Rpt="Rt"  /></label><label class="Mb" for="Mob"><b>手机：</b><input id="Text6" name="Mob" type="text" Preset="Mb" /><i id="Rt">*至少填一项！</i></label></label>
<a href="####" onclick="var F=C.G('Sm2s');Forms.Vf(F);alert(F.D)" class="BtnLg">注&nbsp;册</a>
</form>--%>
<p>Forms组件用来实现所有表单的客户端批量验证，表单ID的第一个和最后一个字符是组件预置的：
    如果ID的第一个字符为“Ｂ”,则表单中需要验证的元素在失去焦点时，验证元素；否则，在调用Forms.Vf(f)函数(参数f为表单或其id)时验证元素，遇到一第一个未通过验证的元素则中止验证动作。<br />
    而表单id的最后一个字符为"s"时，会在表单通过验证后收集各元素的值，以键值对的形式赋给表单的D属性，如Fm.D。
</p>
<p>该组件还为表单中需要在验证的元素预置了三个属性Preset、Regex、Cem，分别用来指定组件预定义的正则、调用者自定义的正则和自定义错误信息，后两个预置的属性是可选的(但需要同时存在)：如果元素上三个属性都不设置，组件不对该元素进行验正。否则，先验证Preset属性所定义的组件预置的值:Rqd表示"该项不能为空"，Cn表示"不允许出现非中文"，Ph表示"电话格式不正确"，Mb表示"手机格式不正确"、Pwd表示"密码不不能包含'(){}=:;. '字符"、Idn表示"身份证号码不合法"、Em表示"邮箱格式不正确"、Url表示"Url格式不正确"。</p>
<p>接着验证Regex属性所定的的正则表达式，指定该属性的元素也需要指定Cem属性，用来指定自定义错误信息，验证结果默认显示在验证元素后一个兄弟元素中，如果不希望这样，则为from元素或容器元素指定Rpt属性，用来指定显示验证结果元素的ID，显示验证结果的元素需要预置两个Css样式Ok、No，分别用来定义验证成功和验证失败时的样式。</p><p>如果需要自行对ID为"Sm2s"的表单进行验证，则可以var Fm=C.G("Sm2s");Fm.Vf();调用Vf方法之后，便可以用Fm.V属性获取表单验证的结果了,其值为Boolean类型，<br />也可以获取Fm.D属性，其值为表单中元素的键值对，radio的键为name，如果不想取某元素的值，应将其id以n后缀,<br />如果需要对非form元素的后代元素进行验证，则需要将该容器元素的id的第二个字符设为“c”，规则同form表单。</p>
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Forms("Sm2s");<br />&lt;/script&gt;</pre>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Forms.js"></script>
<script type="text/javascript" src="/Js/Util.js"></script>
</asp:Content>
<asp:Content ID="ContentRunJs" ContentPlaceHolderID="RunJs" Runat="Server">window.Cm=14;
    function lg()
    {
    var F=C.G('Cm1s');
        Forms.Vf(F);
        alert(F.D);
    }
    Forms("Sm2");
</asp:Content>