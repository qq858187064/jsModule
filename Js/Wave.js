function Wave()
{
    Wave.prototype = {
        Init: function (o) {
            var f = o.id.charAt(0).toLowerCase() == "m" ? "mouseover" : "click";
            t = o.id.charAt(1),
            i = o.id.charAt(2),
            s = C.Gs(o, t);
            o.a= s[i];
            for (var j = 0; j < s.length; j++)
            {
                var a = s[j];
                C.AddEvent(a, "mouseover", function (e,a)
                {
                    C.DelClass(o.a, "cm");
                    C.AddClass(a, "cm");
                    o.a = a;
                }, a);
            }
            C.AddClass(o.a, "cm");
            }
    }
    C.Batch();
}
/*
function Wave() {
    this.Ids = C.Slice.apply(arguments);
    this.IsFirst = typeof Wave.Initialized == "undefined" ? true : false;
    this.Ms = [];
    var S = this;
    //if (this.IsFirst)
    if (this.IsFirst) {
        Wave.prototype = {
            Os: function () {
                for (var i = 0; i < S.Ids.length; i++) {
                    S.Ms.push(C.G(S.Ids[i]));
                }
                return S.Ms;
            },
            Ae: function () {
                for (var j = 0; j < S.Ms.length; j++) {
                    var M = S.Ms[j],
					 Ct = C.Gs(M, M.id.charAt(1)),
					 Ev = M.id.charAt(0).toLowerCase() == "m" ? "onmouseover" : "onclick";
                    for (var k = 0; k < Ct.length; k++) {
                        if (!S.IsFirst) {
                            C.DelClass(Ct[k], "cm");
                        }
                        Ct[k].onmouseover = function () {
                            for (var m = 0; m < Ct.length; m++) {
                                C.DelClass(Ct[m], "cm");
                            }
                            C.AddClass(this, "cm")
                        }
                    }
                }
            }
        }
        Wave.Initialized = true;
    }
    Wave.prototype.Os();
    Wave.prototype.Ae();
}



function Wave() {
	this.Et=null;
	Wave.prototype={
		Init: function(o) {
			var _this=this;
			var aLink=C.Gs(o, "a");
			if (Wave.prototype.Init.caller == null || Wave.prototype.Init.caller == C.Batch)
			{
                var lower=o.id.charAt(0).toLowerCase();
                if(lower=='c') {
                	this.Et='click';
                } else {
                	this.Et='mouseover';
                }
            }
            for(var i=0;i<aLink.length;i++) {
            	C.AddEvent(aLink[i], Et, this.change(o));
            }
		},
		change: function(o) {
			var aLink=C.Gs(o, "a");
			for(var i=0;i<aLink.length;i++) {
				var that=this;
				aLink[i]['on'+this.Et]=function() {
					for(var i=0;i<aLink.length;i++) {
						C.DelClass(aLink[i], 'cm');
					}
					C.AddClass(this, 'cm');
					if(that.Et=='click') {
						return false;
					}
				};
			}
		}
	};
	C.Batch();
}
*/