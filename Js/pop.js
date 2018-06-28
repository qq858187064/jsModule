function pop() {
    var html = document.documentElement;
    dl = "-9999px";
    pop.Hn = 1;
    pop.close = function (o) {//此处o为box
        if (!(o && o.nodeType && o.nodeType == 1))
            o = pop.co;
        o.style.left = dl;
        if (o.bg)
            o.bg.style.left = dl;
        html.style.overflow = "";////允许滚动
    };
    pop.r = C.G("rpt");

    pop.prototype = {
        Init: function (o) {
            o.p = C.Pt(o);
           // !object.hasOwnProperty(name)&&(name in object)
            for (var z in o.p)
            {
                //
                if (o.p.hasOwnProperty(z))
                {
                   // console.log(z)
                o[z] = o.p[z];}
            }
            o.box = o.box ? C.G(o.box) : o;
            o.box.oh = o.box.innerHTML;
            o.box.bg = C.G(o.bg);
            o.ct = C.G(o.ct);
            if (o.cls) {
                o.cls = C.G(o.cls);
                C.AddEvent(o.cls, "click", pop.close);
            }
            //触发元素
            if (!o.t)
            {
                o.t = o;
                o.box.t = o;
            }
            //if (o.tit != 0)
              //  o.box.tit = o.box.firstChild; 
            if (o.ct) {
                o.box.ct = o.ct;
                o.box.ct.nxt = C.Nxt(C.G(o.ct));
                o.box.ct.prt = o.ct.parentNode;
            }
            if (!C.isArr(o.t)) {
                C.AddEvent(o.t, "click", this.pop, o);
            }
            else {
                for (var i = 0; i < o.t.length; i++) {
                    var t = o.t[i];
                    C.AddEvent(t, "click", function (t) {
                        if (o.prc)
                            o.prc(t);
                        pop.pop(o);
                    }, t);
                }
            }
        },
        pop: function (o)//此o是带有p属性的元素，是弹出元素box或触发元素o.t
        {
            html.style.overflow = "hidden";//禁止滚动
            if (o.box.fd && o.box.ct && o.box.ct != o.ct) {
                o.box.ct.prt.appendChild(o.box.ct);
            }
            if (o.box.url)/*&&o.box.url!=o.url*///一个生命周期内有一个pop实例有url属性，而则重置box内容
            {
                o.box.innerHTML = o.box.oh;//.replace(o.box.tit.oh,o.box.tit.innerHTML);
            }
            var d = ""
            if (o.tit != 0)
            {
                o.box.tit = o.box.firstChild;
                o.box.tit.innerHTML = o.tit || o.t.innerText;
                o.box.tit.style.display = "block";
            }
            if (o.t.url) {
                C.EXHR(function (t) {
                    o.box.innerHTML += t;
                    C.exjs(t);
                    o.box.url = o.url;
                }, "GET", o.url);
            }
            else if (o.ct) {
                o.box.appendChild(o.ct);
                o.box.ct = o.ct;
                o.box.fd = true;
            }
            var bd = document.documentElement,//C.Bd(),
                         st = bd.scrollTop;// document.documentElement.scrollTop || C.Bd().scrollTop;

            if (!o.w)
                o.w = o.box.offsetWidth;
            if (!o.h)
                o.h = o.box.offsetHeight;
            o.box.style.width = o.w != 0 ? o.w + "px" : "auto";
            o.box.style.height = o.h != 0 ? o.h + "px" : "auto";

            o.box.style.top = (bd.clientHeight - o.h) / 2 + st+ "px";/*50是滚动条上下部分高度？*/
            o.box.style.left = (bd.offsetWidth - o.w) / 2 + "px";
            console.log("o.box_"+o.box)
            if (o.box.bg) {
                o.box.bg.style.height = bd.scrollHeight + "px";
                o.box.bg.style.left = 0;
            }
            if (!o.url && o.fc)/*异步请求的fc无效，因innerHTML赋值方式*/
                C.G(o.fc).focus();
            pop.co = o.box;//用于关闭或其它组件中引用
        }
    }
    pop.pop = pop.prototype.pop;
    C.Batch();
}
/*移入文档
pop组件是一个更轻量的弹出框组件，传入参数是1个或多个元素id、name，
也可以是对象的数组、集合，此时需要在传入之前设置对象的p属性，如	fs.p={ box: "dw", bg: "dbg", w: 480, h: 320};
多个元素时用逗号","分隔，但传入nm时需以"nm”后缀，即"XXXnm"；
可在元素p属性中设置需要的属性，如 p="box:'dw',bg:'dbg',w:800,h:640,url:'/part/my/scene'"
*box：弹出元素id或对象；
t：触发弹出的元素，与box属性互斥
ct：使用与其它实例共用的弹出容器的弹出内容元素
bg：弹出元素背景元素id或对象；
tit：指定弹出框标题内容,该属性缺省时，弹出元素标题列显示值是该元素的innerText，
而不需要标题列时请将该属性值设为0，同时，与其它实例共用同一弹出box，且其它实例显示标题，
请将标题元素定义为display:none;
w、h：用于指定的数字将设为其宽度和高度，单位是px,而用0代表auto
url：弹出元素内容异步获取时所需要的url；
fc：用于指定弹出后需要焦点的元素id
img：用于指定弹预览图片的id
//js：当异步获取内容后需要引入的js
[考虑将js可以设置成需要引入的js，css则是需要的css，或者在返回分部页时约定对应css和js的传递]
配置定义在触发元素的p属性中，但当触发元素为集合时，如弹出图片预览，该集合的弹出框box，此时配置属性p写在box上，
*/