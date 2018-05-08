/*
pop组件是一个更轻量、更智能的弹出框组件，传入参数是1个或多个元素id、name，
也可以是对象的数组、集合，此时需要在传入之前设置对象的p属性，如	fs.p={ box: "dw", bg: "dbg", w: 480, h: 320};
多个元素时用逗号","分隔，但传入nm时需以"nm”后缀，即"XXXnm"；
可在元素p属性中设置需要的属性，如 p="box:'dw',bg:'dbg',w:800,h:640,url:'/part/my/scene'"
*box：弹出元素id或对象；
bgbg：弹出元素背景元素id或对象；
tit：该属性缺省时，弹出元素标题列显示值是该元素的innerText，而不需要标题列时请将该属性值设为0
w、h：用于指定的数字将设为其宽度和高度，单位是px；
url：弹出元素内容异步获取时所需要的url；
//js：当异步获取内容后需要引入的js
[考虑将js可以设置成需要引入的js，css则是需要的css，或者在返回分部页时约定对应css和js的传递]
*/
function pop()
{   
pop.Hn=1;
    pop.prototype = {
        Init: function (o) {
        C.AddEvent(o, "click", this.pop, o);
        },
        pop: function (o) {//e,
			if(!o.p||typeof o.p == "string")/*||后为判断ie9以下*/
				o.p=C.Pt(o);
		for(var z in o.p)
		{
			o[z]=o.p[z];
		}
		o.box=C.G(o.box);
		o.bg=C.G(o.bg);
		if(o.url)
		{
			o.box.style.width=	o.box.style.height=o.box.innerHTML="";
		    C.EXHR(function (t) {
			 o.box.innerHTML = o.box.ct + t;
			 //console.log(o.box.innerHTML);
			 o.box.tit=C.G("tit");
		        if (o.tit!=0)
				{
		   o.box.tit.innerText = o.tit||o.innerText;
		   o.box.tit.style.display="block";
			}
			else
			{
				o.box.tit.style.display="none";
			}
			C.exjs(t);
		},"GET",o.url)
		}
            var bd = document.documentElement,//C.Bd(),
                         dl = "-9999px",
                         st = document.documentElement.scrollTop || bd.scrollTop;//bd.scrollTop,

            if (!o.w)
                o.w = o.box.offsetWidth;
            if (!o.h)
                o.h = o.box.offsetHeight;

            o.box.style.width = o.w + "px";
            o.box.style.height = o.h + "px";
			o.box.style.top = (bd.clientHeight - o.h) / 2 + st + "px";
            o.box.style.left = (bd.offsetWidth - o.w) / 2 + "px";

            if (o.bg) {
                o.bg = C.G(o.bg);
                o.bg.style.height = bd.scrollHeight + "px";
                o.bg.style.left = 0;
            }
            //window.cpo = o;
            if (!o.box.close)
                pop.close = o.box.close=o.close = function () {
                    /*if(!o)
					o=window.cpo;*/
                    o.box.style.left = dl;
					                    if (o.bg)
                        o.bg.style.left = dl;
//			o.box.style.width=	o.box.style.height=o.box.innerHTML=""

					if(o.url)
					o.lastUrl=o.url;
					
				
					
                }
        }
    }
    pop.pop = pop.prototype.pop;
    C.Batch();
}