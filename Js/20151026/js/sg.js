/*
Çå³ýÄ¬ÈÏÖµ
*/
function sg() {
    sg.prototype = {
        Init: function (o) {
            var result = o.value,
            n = o.id.indexOf("_");
            o.t =o.type = "password"?o.type:"";
            o.type = "text";
            C.AddEvent(o, "focus", function () { if (o.value == result) { o.value = ""; } if (o.t) { o.type=o.t}});
            if (n != -1) {
                C.AddEvent(o, "blur", function () { if (o.value == "" || o.value == result) { o.type = "text"; o.value = result; } });//else { o.type = "password"; }
            }
            C.AddEvent(document, "keyup", function (event)
            {
                var e = event || window.event;
                if (e && e.keyCode == 13) {
                    var val = o.value;
                    location.href = "#" + val;
                }
            });
        }
    }
    C.Batch();
}