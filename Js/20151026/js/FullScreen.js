function FullScreen()
{
    var arg = arguments;
    FullScreen.prototype = {
        Init: function ()
        {
            var that = this;
            this.L = C.G(arg[0]);
            this.R = C.G(arg[1]);
            this.fc = C.G(arg[2]);
            this.rp = function (obj)
            {
                var num = obj.replace(/px/, "");
                num = /^\d/.test(num) ? parseInt(num) : 0;
                return num;
            };
            this.Ifo = C.CurrentStyle(this.R);
            this.ml = this.rp(this.Ifo.marginLeft);
            this.mr = this.rp(this.Ifo.marginRight);
            this.pl = this.rp(this.Ifo.paddingLeft);
            this.pr = this.rp(this.Ifo.paddingRight);
            this.Ifp = this.ml + this.mr + this.pl + this.pr;
            this.changeW();
            C.AddEvent(window, "resize", function ()
            {
                that.changeW();
            });
            if (this.fc)
            {
                C.AddEvent(this.fc, "click", function ()
                {
                    if (that.L.style.display == "none")
                    {
                        that.L.style.display = "block";
                        C.DelClass(that.fc, "Sv")
                    } else
                    {
                        that.L.style.display = "none";
                        C.AddClass(that.fc, "Sv");
                    }
                    that.changeW();
                });
            }
        },
        changeW: function ()
        {
            this.R.style.width = document.documentElement.clientWidth - this.L.offsetWidth - this.Ifp + "px";
        }
    };
    FullScreen.prototype.Init();
}