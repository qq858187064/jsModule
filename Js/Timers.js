function Timers()
{
    Timers.prototype = {
        Init: function (o)
        {
			//console.log(o.onclick)
            //o.fn = o.onclick;//考其它事件？fn调用先注掉，有问题再说
			//o.onclick=null;
            C.AddEvent(o, "click", this.Count, o);
            o.ot = o.innerText;
			o.fmt=(o.ot+"({0})");
			o.oh=o.href;
        },
        Count: function (o)
        {
			// if(o.ot==undefined)
			// o.ot=o.innerText;
            if (o.status) { return; }
            //o.Gd = C.G("R" + o.id);
            o.Rule = o.id.charAt(0).toUpperCase() == "U";
            o.Ms = o.Rule ? 0 : parseInt(o.id.substring(2));
            //o.disabled = true;
            //o.Gd.innerHTML = o.Ms;
            o.innerHTML = o.fmt.format(o.Ms);
			C.AddClass(o, "ti");
			//o.fn();
			o.status = true;

            o.Tm = setInterval(function ()
            {
                if ((!o.Rule && o.Ms < 1) || (o.Rule && o.Ms > parseInt(o.id.substring(2)) - 1))
                {
                    //o.disabled = false;
                    o.status = false;
                    clearInterval(o.Tm);
                    C.DelClass(o, "ti");
                    o.innerHTML = o.ot;
					o.href=o.oh;
                }
                else
                {
                    //o.status = true;
                    //o.Gd.innerHTML = o.Rule ? ++o.Ms : --o.Ms;
                    o.innerHTML =o.fmt.format(o.Rule ? ++o.Ms : --o.Ms);
					o.href="####";
                }
            }, 1000);
        }
    }
    Timers.Count = Timers.prototype.Count;
    C.Batch();
}
