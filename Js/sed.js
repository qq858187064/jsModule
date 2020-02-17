 /*
    pid:需要选中列表元素的id
    e:列表中子元素标签名称
    c:默认选中第几个？
    se:选中图标元素id
    cn:选中图标元素选中的样式名
    sf:选中处理函数
	et:1,表示事件添加到第一个元素上
    如:p="pid:'ls',e:'i',se:'se',cls:'sed',et:1"
   */ 
function sed() {
        sed.prototype = {
            Init: function (o) {
                var p = C.Pt(o),
				 ls = C.G(p.pid),
    s = C.Gs(ls, p.e),
    se = C.G(p.se),/*选中图标元素*/
    cn = p.cls;
   ls.ls = [];
ls.c = se.parentNode;
 C.each(s, function (a, i) {
var i=s[i],
p=o.ps.et==1?i.firstChild:i;
C.AddEvent(p,"click",function(i){
C.DelClass(ls.c,cn);
C.AddClass(i,cn);
i.appendChild(se);
ls.c = i;
if (ls.ps.sf)
    ls.ps.sf(ls.c);
    //window[ls.ps.sf](ls.c);

}, i);
 
/*预览暂时先不要
C.AddEvent(C.Gs(i,"a")[0],"click",function(p){
    pre.src = p.src;
pre.style.display="block";
var cls = dw.firstChild;
cls.onclick = function () { pre.style.display = "none"; dw.firstChild.onclick = pop.close;};
}, p);*/
ls.ls.push(C.Gs(i, "a")[0]);
 });
 ls.c =s[p.c||0]
 C.AddClass(ls.c, cn);


            }
        }
        C.Batch();
    }