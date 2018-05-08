/*目前是select元素，计划扩展成如京东那样以省份、城市、县区、街道为选项目卡切换的形式*/
function slct() {
    slct.prototype = {
        Init: function (o)
        {
            var ss = o.id.split("_");
            o.a = C.G(ss[1]);
            o.a.a = C.G(ss[2]);
            o.a.o = o;
            o.a.a.o = o.a;
            this.bd(o, cts)
        },
		/*绑定数据*/
        bd: function (o, arr)
        {
            for (var i = 0; i < arr.length; i++) {
                var p = C.Ce("option");
                p.value = arr[i].i;
                p.text = arr[i].n;
                p.c = arr[i].c;
                o.add(p);
            }
			this.sc(o);
            C.AddEvent(o, "change", this.sc, o);/**/
        },
        sc: function (o)
        {
            var so = C.So(o);
            if (o.a)
                o.a.length = 1;
            if (so.c)/*选中项目对应的数组*/
            {
                slct.prototype.bd(o.a, so.c);
				if(arguments.length>1)
				{
					o.a.focus();
					o.a.size=so.c.length;/*若不想全部显示出来，就css：overflow-y:auto*/
					//console.log(o.a.length)
					if(!o.a.onclick)
				o.a.onclick=function(){o.a.size=1;};
				}
				if(so.c.length==1)
				{
					var oo=o.a.options[1];
					 oo.selected=true;
					  slct.prototype.bd(o.a.a, oo.c);
					  o.a.a.size=oo.c.length;
					  o.a.a.focus();

				if(!o.a.a.onclick)
				o.a.a.onclick=function(){o.a.a.size=1;};

					  //o.a.a.focus();
				// console.log(so.c.length)
				}

            }
            else if (o.a && o.a.a)
            {
                o.a.a.length = 1;
            }
        }
    }
    C.Batch();
}