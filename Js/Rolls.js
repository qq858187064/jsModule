function Rolls(Id, Speed, Stay)
{
    this.Wrap = C.G(Id);
    this.Original = C.Gs(this.Wrap, "span")[0];
    this.Ectype = this.Original.cloneNode(true);
    this.Wrap.appendChild(this.Ectype);
    //this.Om = Id;
    this.Count = 0;
    this.Can = true;
    var Stay = !Stay ? 0 : Stay,
        it = C.Gs(this.Original, "a")[1],
    Step,
    Roll = this;
    if (typeof Rolls.Initialized == "undefined") {
        Rolls.prototype.Marquee = function () {
            if (Roll.Can) {
                var d, p,m;
                if (Roll.Wrap.id.charAt(0).toUpperCase() == "L") {
                    d = "scrollLeft";
                    p = "offsetWidth";
                    m = "marginRight";
                }
                else// "T"
                {
                    d = "scrollTop";
                    p = "offsetHeight";
                    m = "marginBottom";
                }
                Step = it[p] + parseInt(C.CurrentStyle(it)[m]);
               
                Roll.Wrap[d]++;
                if (Roll.Wrap[d] >= Roll.Original[p]) {
                    Roll.Wrap[d] -= Roll.Original[p];
                }
                Roll.Count++;
            }

            if (Roll.Count >= Step) {
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