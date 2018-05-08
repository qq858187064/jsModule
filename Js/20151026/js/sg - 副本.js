/*
Çå³ýÄ¬ÈÏÖµ
*/
function sg() {
    sg.prototype = {
        Init: function (o) {
            var result = o.value,
                n = o.id.indexOf("_");
            C.AddEvent(o, "focus", function () { if (o.value == result) { o.value = ""; } });
            if (n != -1) {
                C.AddEvent(o, "blur", function () { if (o.value == "" || o.value == result) { o.type = "text"; o.value = result; } else { o.type = "password"; } });
            }
            C.AddEvent(document, "keydown", function (event)
            {
                var e = event || window.event;
                if (e && e.keyCode == 13) {
                    var val = o.value;
                    location.href = "http://www.yylvtu.com/page/dayTour/dayTourShow.aspx?mw=" + val;
                }
            });
        }
    }
    C.Batch();
}