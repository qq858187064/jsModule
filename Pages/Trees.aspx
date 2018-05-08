<%@ Page Title="树形菜单组件" Language="C#" CodeFile="Trees.aspx.cs" Inherits="Trees" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" runat="Server">
    Trees</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" runat="Server">
    实现所有树形菜单</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" runat="Server">
    <a>树形菜单</a>
    <a>关键Css规则</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" runat="Server"><dd>Trees组件用来实现所有树形结构的视图和菜单，树形是否展开，由调用者在Css中指定，组件预置了一个名为样式名为“Fold”的样式，组件预置ID的前三个字符，第一个字符用来指定展开合并方式：如果ID的第一个字符为“c”，则响应鼠标的单击事件，否则响应鼠标的滑过事件；ID第二个字符用来指定项中是否包含复选框，为i时表示项中有复选框，否则指定忽略复选框；ID第三个字符用来指定单击终末结点li时所执行的函数：如果第ID的第三个字符为“s”,则须在点击终端li元素之前定义Trees对象的el函数，用来处理所选中的li。如本例中，具有该样式的li标记中的子元素ul会显示，li点击后该样式会被删除，从而达到展开和折叠的视觉效果。
    组件还内置了一个Checked函数，它会返回传入对象或id中选中的复选框,如果希望排除已经被禁用的复选框，将需要多传一个参数，像这样：Trees.Checked("trees1", 1);
<h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Trees("Ci1","M2");<br />&lt;/script&gt;</pre>
        <ul id="Ci1" class="Ts R">
            <li>(1)<label for="Cms3R"><input type="checkbox" id="Cms3R" />我的Id是"Ci1"</label>
                <ul>
                    <li>(2)<label for="Gold6"><input type="checkbox" id="Gold6" disabled="disabled" />响应点击事件</label></li>
                   <li>(2)<label for="Forex6R"><input type="checkbox" id="Forex6R" />Forex2</label>
                        <ul>
                            <li>(3)<label for="Gold7"><input type="checkbox" id="Gold7" />Gold3</label></li>
                            <li>(3)<label for="Bank7"><input type="checkbox" id="Bank7" />Bank3</label></li>
                            <li>(3)<label for="Forex7"><input type="checkbox" id="Forex7" />Forex3</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>(1)<label for="Cms4R"><input type="checkbox" id="Cms4R" />Cms</label>
                <ul>
                    <li>(2)<label for="Gold8"><input type="checkbox" id="Gold8" />Gold</label></li>
                    <li>(2)<label for="Bank8"><input type="checkbox" id="Bank8" />Bank</label></li>
                    <li>(2)<label for="Forex8R"><input type="checkbox" id="Forex8R" />Forex</label>
                        <ul>
                            <li>(3)<label for="Gold9"><input type="checkbox" id="Gold9" />Gold</label></li>
                            <li>(3)<label for="Bank9"><input type="checkbox" id="Bank9" />Bank</label></li>
                            <li>(3)<label for="Forex9"><input type="checkbox" id="Forex9" />Forex</label>
                            <li>(4)<label for="Checkbox1"><input type="checkbox" id="Checkbox1" />Gold</label></li>
                            <li>(4)<label for="Checkbox2"><input type="checkbox" id="Checkbox2" />Bank</label></li>
                        </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
<%--            </li>
        </ul>--%>
    
    <ul id="M2" class="Ts">
            <li>我的Id是"M2"，
                <ul>
                    <li>响应鼠标经过事件</li>
                    <li>且不检测其中的复选框</li>
                    <li>Forex
                        <ul>
                            <li>Gold</li>
                            <li>Bank</li>
                            <li>Forex</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>我的Id是"M2"
                <ul>
                    <li>Gold</li>
                    <li>Bank</li>
                    <li>Forex
                        <ul>
                            <li>Gold</li>
                            <li>Bank</li>
                            <li>Forex</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </dd>
    <dd><pre>以下是Css的关键属性，其它可选属性省略，大家可到Css文件中找到完整Css规则
ul.Ts li
{
    list-style:none;
}
ul.Ts
{
    background:#fff;
    width:222px;
    height:344px;
    padding:10px 20px;
    border:1px solid #ddd;
}
.Ts li,
.Ts li ul li,
.Ts li ul li ul li,
.Ts li ul li ul li ul li
{
    margin-left:24px;
    padding-left:16px;
    background:url(/Images/Tg.gif) no-repeat 0px -52px;
}
.Ts li
{
    margin-left:0;
}
li.Fold ul
{
    display:none;
}
li.Fold
{
    background-position:0px 8px!important;
}
</pre></dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" runat="Server" />
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" runat="Server">
<script type="text/javascript" src="/Js/Trees.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" runat="Server">window.Cm=7;Trees("Ci1","M2");</asp:Content>
