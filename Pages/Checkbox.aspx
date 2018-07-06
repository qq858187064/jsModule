<%@ Page Title="复选框全选/取消全选组件" CodeFile="Checkbox.aspx.cs" Inherits="Checkbox" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Checkbox</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">复选框全选/取消全选</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a>全选/取消全选</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd><p class="Mb9">Checkbox组件用来实现所有复选框全选/取消全选的组件，外观由调用者在Css中指定，组件预置ID的第一个字符，用来指定传入ID的元素中第一个，还是最后一个复选框，作为“全选”铵钮：如果ID的第一个字符为“F”，则响将第一个复选框作为“全选”；如果ID的第一个字符为“L”，则响将最后一个复选框作为“全选”按钮；如果ID的第一个字符为“A”，则将第一个和最后一个复选框同时作为“全选”按钮。<br />
<b>反选功能：</b>在一组复选框父元素的ID后附加下划线“_”+反选元素ID,如我们将下方右边这组复选框的Id设为"Fa_Ivs"，则Id为"Ivs"的元素具有反选功能；<br />
<b>返回选定元素的数组：</b>该组件向外提供了一个方法Checked(Id)，它接受一个Id字符串参数，它返回该组复选框中选中元素的集合。如获取右下方这组复选框中选中元素的集合的方法为：Checkbox.Checked("Fa_Ivs")<br />
<b>处理函数：有时需要在每个元素的状态改变时执行指定函数，将该函数名置于元素的fn属性即可，该函数需要在Checkout组件初始化之前定义。</b>
    </p>
<div id="Fa_Ivs" class="Ca R">
    <label for="Cms3"><input type="checkbox" id="Cms3" />全选</label>
    <label for="Gold6"><input type="checkbox" id="Gold6" />我的Id是"Fa_Ivs"</label>
    <label for="Bank6"><input type="checkbox" id="Bank6" />第一个元素</label>
    <label for="Forex6"><input type="checkbox" id="Forex6" />作为全选铵钮</label>
    <label for="Gold7"><input type="checkbox" id="Gold7" />Gold</label>
    <label for="Bank7"><input type="checkbox" id="Bank7" />Bank</label>
    <label for="Forex7"><input type="checkbox" id="Forex7" />Forex</label>
    <label for="Cms4"><input type="checkbox" id="Cms4" />Cms</label>
    <label for="Gold8"><input type="checkbox" id="Gold8" />Gold</label>
    <label for="Bank8"><input type="checkbox" id="Bank8" />Bank</label>
    <label for="Forex8"><input type="checkbox" id="Forex8" />Forex</label>
    <label for="Gold9"><input type="checkbox" id="Gold9" />Gold</label>
    <label for="Bank9"><input type="checkbox" id="Bank9" />Bank</label>
    <label for="Forex9"><input type="checkbox" id="Forex9" />Forex</label>
    <label class="Tmp"><a href="####" id="Ivs" style="padding-right:32px;">反选</a> <a href="####" id="Gr" onclick="Rst('Fa_Ivs');">获取选中元素的集合</a></label><p id="Rst"></p>
</div>
<div id="La" class="Ca">
    <label for="C1"><input type="checkbox" id="C1" />我的Id是"La"</label>
    <label for="C2"><input type="checkbox" id="C2" />最后一个元素</label>
    <label for="C3"><input type="checkbox" id="C3" />作为全选铵钮</label>
    <label for="C4"><input type="checkbox" id="C4" />Forex</label>
    <label for="C5"><input type="checkbox" id="C5" />Gold</label>
    <label for="C6"><input type="checkbox" id="C6" />Bank</label>
    <label for="C7"><input type="checkbox" id="C7" />Forex</label>
    <label for="C8"><input type="checkbox" id="C8" />Cms</label>
    <label for="C9"><input type="checkbox" id="C9" />Gold</label>
    <label for="C10"><input type="checkbox" id="C10" />Bank</label>
    <label for="C11"><input type="checkbox" id="C11" />Forex</label>
    <label for="C12"><input type="checkbox" id="C12" />Gold</label>
    <label for="C13"><input type="checkbox" id="C13" />Bank</label>
    <label for="C14" class="Itr"><input type="checkbox" id="C14" />全选</label>
</div>
    <div id="Aa" class="Ca" fn="chge">
    <label for="C21"><input type="checkbox" id="C21" />全选</label>
    <label for="C22"><input type="checkbox" id="C22" />最后一个元素</label>
    <label for="C23"><input type="checkbox" id="C23" />作为全选铵钮</label>
    <label for="C24"><input type="checkbox" id="C24" />Forex</label>
    <label for="C25"><input type="checkbox" id="C25" />Gold</label>
    <label for="C26"><input type="checkbox" id="C26" />Bank</label>
    <label for="C27"><input type="checkbox" id="C27" />Forex</label>
    <label for="C28"><input type="checkbox" id="C28" />Cms</label>
    <label for="C29"><input type="checkbox" id="C29" />Gold</label>
    <label for="C210"><input type="checkbox" id="C210" />Bank</label>
    <label for="C211"><input type="checkbox" id="C211" />Forex</label>
    <label for="C212"><input type="checkbox" id="C212" />Gold</label>
    <label for="C213"><input type="checkbox" id="C213" />Bank</label>
    <label for="C214" class="Itr"><input type="checkbox" id="C214" />全选</label>
</div>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script src="/Js/Checkbox.js" type="text/javascript"></script>
<script type="text/javascript">
    function chge(a) { console.log(a) }
    function Rst(Id)
    {
        var Arr = Checkbox.Checked(Id),
            Str = "";
        for (var i = 0; i < Arr.length; i++)
        {
            Str += Arr[i].id+"、";
        }
        C.G("Rst").innerHTML = "您在该组选项中，共选择了" + Arr.length + "个元素，它们的值分别为：" + Str;
    }
</script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" runat="Server">window.Cm=8;Checkbox("La","Aa","Fa_Ivs");</asp:Content>