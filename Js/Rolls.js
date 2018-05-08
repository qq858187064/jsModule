function Rolls(Id, Speed, Step, Stay)
{
    this.Wrap = C.G(Id);
    this.Original = C.Gs(this.Wrap, "span")[0];
    this.Ectype = this.Original.cloneNode(true);
    this.Wrap.appendChild(this.Ectype);
    this.Om = Id;
    this.Count = 0;
    this.Can = true;
    var Stay = !Stay ? 0 : Stay,
    Roll = this;
    if (typeof Rolls.Initialized == "undefined")
    {
        Rolls.prototype.Marquee = function ()
        {
            if (Roll.Wrap.offsetWidth > 0)
            {
                switch (Id.charAt(0).toUpperCase())
                {
                    case "L":
                        if (Roll.Can)
                        {
                            Roll.Wrap.scrollLeft++;
                            if (Roll.Wrap.scrollLeft >= Roll.Original.offsetWidth)
                            {
                                Roll.Wrap.scrollLeft -= Roll.Original.offsetWidth;
                            }
                            Roll.Count++;
                        }
                        break;
                    case "T":
                        if (Roll.Can)
                        {
                            Roll.Wrap.scrollTop++;
                            if (Roll.Wrap.scrollTop >= Roll.Original.offsetHeight)
                            {
                                Roll.Wrap.scrollTop -= Roll.Original.offsetHeight;
                            }
                            Roll.Count++;
                        }
                        break;
                }
            }
            //            Roll.Om = setInterval(Roll.Marquee, Stay);
            //            Roll.Wrap.onmouseover = function () { clearInterval(Roll.Om) }
            //            Roll.Wrap.onmouseout = function () { Roll.Om = setInterval(Roll.Marquee, Stay) }
            if (Roll.Count >= Step)
            {
                Roll.Can = false;
                Roll.Count = 0;
                var Ts = setTimeout(function () { Roll.Can = true; }, Stay);
            }
            C.AddEvent(Roll.Wrap, "mouseover", function () { Roll.Can = false; });
            C.AddEvent(Roll.Wrap, "mouseout", function () { Roll.Can = true; });
        };
        Roll.Om = setInterval(Roll.Marquee, Speed);
        //Rolls.Initialized = true;
    }
}