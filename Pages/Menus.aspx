<%@ Page Title="多级菜单组件" Language="C#" CodeFile="Menus.aspx.cs" Inherits="_Menus" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Hd5" Runat="Server">Menus</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Descr" Runat="Server">
所有伸缩菜单的功能</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MenuC" Runat="Server">
<a href="#">单体菜单</a>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainC" Runat="Server">
<dd class="Msc"><p>Menus组件用来实现下拉菜单的功能，元素ID前两个字符是组件预置的：如果ID的第一个字符为“C”，表示鼠标点击时弹出，否则，鼠标滑动弹出；第二个字符为“C”，则表示点击时才隐藏弹出的元素，否则为移出鼠标时隐藏。</p>
在页面的某个位置，当鼠标移过或点击时需要弹出来一些信息时，类似于这个<a href="####" id="Cs1">“菜单A_点击”</a><span><a href="#">送花</a><a href="#">送米</a>我是菜单A的内容</span>，
    或者，可以像这两个<p name="Msnm">“ppppppppppppppppp菜单B_滑过”</p><span>我是菜单B的内容<a href="#">送花</a><a href="#">送米</a></span>，
    <br /><a name="Msnm">“ppppppppppppppppp菜单B_滑过”</a><span>我是菜单B的内容<a href="#">送花</a><a href="#">送米</a></span>
    另一个：<a href="####" name="Msnm">“菜单C_滑过”</a><span>我是菜单C的内容<a href="#">送花</a><a href="#">送米</a></span>。
    还有一种是，弹出的元素在点击后才会关闭：<a href="####" name="ccnm">“菜单C_点击关闭”</a><span>我是菜单C的内容<a href="#">送花</a><a href="#">送米</a></span>，
    如果元素标识符的第二个字符为"d"时，弹出的元素仅在点击该元素时,才会切换弹出元素的显示状态：<a href="####" name="cdnm">“菜单D_仅点击元素才改变显示状态”</a><span>我是菜单D的内容<a href="#">送花</a><a href="#">送米</a><a href="#" class="Cls">关闭</a></span>，
    那么，就可以调用此Menus功能模块，只需要将引发事件的元素的ID传给Menus函数，而将该元素对应的弹出元素，紧跟该元素放置即可。
    <a href="####" id="Cs2">“菜单C_点击关闭”</a><span>我是菜单C的内容<a href="#">送花</a><a href="#">送米</a></span><input  name="ccnm"/><span>我是菜单C的内容<a href="#">送花</a><a href="#">送米</a></span><h6>该模块调用代码:</h6>
<pre>&lt;script type="text/javascript"&gt;<br />Menus("Cs1","Msnm"，"ccnm"，"cdnm","Cd2")<br />&lt;/script&gt;</pre>
<%--    <style type="text/css">
        #nav {
            line-height: 24px;
            background: #eee;
            position:relative;
        }
            #nav p span {
                    position: absolute;
                    background:#f00;
                    left:99px;
                }
                #nav p.sfhover span {
                     visibility:visible;
                }
    </style>
    <div id="nav">
        <p>pp<span>span</span></p>
        <p>pp<span>span</span></p>
        <p>pp<span>span</span></p>
    </div>
        <script type="text/javascript">
            function menuFix()
            {
                var sfEls = C.Gs("nav", "p");
                for (var i = 0; i < sfEls.length; i++)
                {
                    sfEls[i].o_ouseover = function ()
                    {
                        this.className += (this.className.length > 0 ? " " : "") + "sfhover";
                    }
                    sfEls[i].o_ouseout = function ()
                    {
                        this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"),
                        "");
                    }
                }
            }
</script>--%>
</dd>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FBHtml" Runat="Server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="IptJs" Runat="Server">
<script type="text/javascript" src="/Js/Menus.js"></script>
</asp:Content>
<asp:Content ID="Content7" ContentPlaceHolderID="RunJs" Runat="Server">
<%--    Menus("Cs1","Ms_","Ms_","cc_","cd_","Cs2");--%>
    Menus("Cs1","Msnm","Msnm","ccnm","cdnm","Cs2");
    window.Cm=6;
</asp:Content>