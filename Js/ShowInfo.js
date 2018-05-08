function ShowInfo () {
	ShowInfo.prototype = {
		Init: function (o) {
			this.A = o;
			this.E = this.A[0].getAttribute("name").charAt(0).toLowerCase() == "c" ? "click" : "mouseover";
			
			for (var i = 0, l = this.A.length; i < l; i++) {
				
				this.A[i].index = i;
				this.A[i].timer = null;
				C.Nxt(this.A[i]).timer = null;
				C.AddEvent(this.A[i], this.E, ShowInfo.prototype.Hder, this.A[i]);
				
				this.A[i].onmousemove = function () {
					if (this.timer) {
						clearTimeout(this.timer);
					}
					
					if (C.Nxt(this).timer) {
						clearTimeout(C.Nxt(this).timer);
					}
				};
				
				this.A[i].onmouseout = function () {
					var _this = this;
					this.timer = setTimeout(function () {
						var S =  C.Nxt(_this);
						ShowInfo.prototype.Cge(S, "none");	
					}, 200);
				};
				
				C.Nxt(this.A[i]).onmouseover = function () {
					var P = C.Pre(this);
					
					if (P.timer) {
						clearTimeout(P.timer);
					}
					
					if (this.timer) {
						clearTimeout(this.timer);
					}
				};
				
				C.Nxt(this.A[i]).onmouseout = function () {
					var _this = this;
					this.timer = setTimeout(function () {
						ShowInfo.prototype.Cge(_this, "none");
					}, 200);
				};
			}
		},
		Hder: function (e, o) {	
			var S = C.Nxt(o);
			ShowInfo.prototype.Cge(S, "block");	
			
		},
		Cge: function (o, val) {
			o.style.display = val;
		}
	};
		
	C.Batch();
}