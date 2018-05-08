/*
  @*html中全局弹出层*@
<div id="dbg" class="dbg"></div>
<div class="dw" id="dw" rpt="rt"><a class="cls" href="####" onclick="pop.close()"></a><h4 id="tit">标题</h4><i class="rt" id="prt"></i>
<div id="cw"></div>
</div>
pop组件是一个更轻量、更智能的弹出框组件，传入参数是1个或多个元素id、name，
也可以是对象的数组、集合，此时需要在传入之前设置对象的p属性，如	fs.p={ box: "dw", bg: "dbg", w: 480, h: 320};
多个元素时用逗号","分隔，但传入nm时需以"nm”后缀，即"XXXnm"；
可在元素p属性中设置需要的属性，如 p="box:'dw',bg:'dbg',w:800,h:640,url:'/part/my/scene'"
*box：弹出元素id或对象；
bgbg：弹出元素背景元素id或对象；
tit：该属性缺省时，弹出元素标题列显示值是该元素的innerText，而不需要标题列时请将该属性值设为0
w、h：用于指定的数字将设为其宽度和高度，单位是px,而用0代表auto
url：弹出元素内容异步获取时所需要的url；
fc：用于指定弹出后需要焦点的元素id
//js：当异步获取内容后需要引入的js
[考虑将js可以设置成需要引入的js，css则是需要的css，或者在返回分部页时约定对应css和js的传递]
dw是在布局页一个全局的弹出框元素
*/
function pop()
{ 
//pop.s='<div id="dbg" class="dbg"></div><div class="dw" id="dw" rpt="rt"><a class="cls" href="####" onclick="pop.close()"></a><h4 id="tit">{0}</h4><i class="rt" id="rpt"></i>{1}</div>';
pop.Hn=1;
 pop.e=C.G("dw");/*约定：先在html中定义好*/
	pop.t=C.G("tit");
	pop.bg=C.G("dbg")
	pop.oh=pop.e.innerHTML;
		//pop.c=C.G("cw");

	pop.r=C.G("rpt");

    pop.prototype = {
        Init: function (o) {
        C.AddEvent(o, "click", this.pop, o);
        },
        pop: function (o) {//e,
			if(!o.p||typeof o.p == "string")/*||后g qkd 为判断ie9以下*/
				o.p=C.Pt(o);
		for(var z in o.p)
		{
			o[z]=o.p[z];
		}
		o.box=C.G(o.box);
		if(!o.box.prt)
		o.box.prt=o.box.parentNode;
		o.bg=pop.bg;//C.G(o.bg);
		if (o.tit!=0)
			{
			C.G("tit").innerHTML=o.tit||o.innerText;
			pop.t.style.display="block";
			}
			else
			{
				pop.t.style.display="none";
			}
		if(o.url)
		{
		    C.EXHR(function (t) {
			 pop.e.innerHTML+=t;
			C.exjs(t);
		},"GET",o.url)
		}
		else
			pop.e.appendChild(o.box)
		
            var bd = document.documentElement,//C.Bd(),
                         dl = "-9999px",
                         st =bd.scrollTop;// document.documentElement.scrollTop || C.Bd().scrollTop;
			            if (!o.w)
                o.w = o.box.offsetWidth;
            if (!o.h)
                o.h = o.box.offsetHeight;
            pop.e.style.width =o.w!=0?o.w + "px":"auto";
            pop.e.style.height = o.h!=0?o.h + "px":"auto";

			pop.e.style.top = (bd.clientHeight - o.h) / 2 + st + "px";
            pop.e.style.left = (bd.offsetWidth - o.w) / 2 + "px";
            if (o.bg) {
                o.bg = C.G(o.bg);
                o.bg.style.height = bd.scrollHeight + "px";
                o.bg.style.left = 0;
            }
			if(o.fc)
				C.G(o.fc).focus();
			//o.box.elements[0].focus();
          //  if (!o.box.close)
                pop.close = o.box.close=o.close = function () {
					                    pop.e.style.left = dl;
					                    if (o.bg)
                        o.bg.style.left = dl;

			//将元素还原到dom
			if(!o.url)
					{
					o.box.prt.appendChild(o.box);
					}
						else
						{
							pop.e.innerHTML=pop.oh;
						}
			
			
			
					//pop.e.removeChild(o.box);
					//pop.e.innerHTML=pop.oh;
					
					
		//o.box.style.width=o.box.style.height="";
		

					//if(o.url)
					//o.lastUrl=o.url;
				// if(o.cls)
					// C.DelClass(pop.c,o.cls);
				//pop.c.elements[0].blur();
                }
        }
    }
    pop.pop = pop.prototype.pop;
    C.Batch();
}