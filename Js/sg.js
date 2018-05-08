/*
���Ĭ��ֵ
*/
function sg() {
	  /*
	  		if(!o.placeholder)
		{
		//不支持placeholder时执行，但placeholder不支持样式

	  */
    sg.prototype = {
        Init: function (o) {
            var result = o.value,
                n = o.id.indexOf("_");
            C.AddEvent(o, "focus", function () { if (o.value == result) { o.value = ""; } });
            if (n != -1) {
            C.AddEvent(o, "blur", function () { if (o.value == "") { o.value = result; } });
            }
            C.AddEvent(document, "keydown", function (event)
            {
                var e = event || window.event;
                if (e && e.keyCode == 13) {
                	C.G("smt").onclick();
/*                    var val = o.value;
                    location.href = "http://domai.com/?mw=" + val;*/
                }
            });
        }
    }
    C.Batch();
}