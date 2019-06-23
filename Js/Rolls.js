function rolls()
{
    rolls.prototype = {
        Init: function (o) {
            o.p=C.Pt(o);
            o.it=C.Gs(o,"a")[1];//用来取高度、宽度的样本元素，如果有异常可以传参
            o.can=true;
			o.n=o.p.n;
            o.count=0;
            if (o.p.dir==1) {
                o.ad = "scrollTop";
                o.ap = "offsetHeight";
                o.am = "marginBottom";
            }
            else
            {
                o.ad = "scrollLeft";
                o.ap = "offsetWidth";
                o.am = "marginRight";
            }
			if(!o.px){
				o[o.ad]++;
				o.px=o[o.ad]
				o[o.ad]--;
			}
			
            o.step = o.it[o.ap] + parseInt(C.CurrentStyle(o.it)[o.am]);
            setTimeout(function(){
                o.om = setInterval(function () { rolls.prototype.roll(o)}, o.p.speed);
        }, o.p.stay);
            
},
roll:function(o){
    if (o.can) {
        o[o.ad]++;
		/*
       if (o[o.ad] >= o.it[o.ap])
        {
            o[o.ad] -= o.it[o.ap];
        }*/
        o.count=o.count+o.px;
    }
						
    if (o.count >= o.step) {
        o.can = false;
        o.count = 0;
		for(var i=0;i<o.n;i++)
			        o.appendChild(o.firstChild)
        setTimeout(function () { o.can = true; }, o.p.stay);
    }
}
}
C.Batch(rolls,arguments);
}