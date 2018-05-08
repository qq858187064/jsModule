function editor() {

    //o.prototype.getCursor=this.getCursor;
    editor.prototype = {
        Init: function (o) {
            var //f = C.Ce("iframe"),
      ht = C.G("ht");
            //f.id="ifRTC";
            //ht.parentNode.insertBefore(f,ht);
            o.d = o.contentWindow.document;
            o.d.open();
            o.d.write('<html><body></body></html>');
            o.d.close();
            o.b = C.Bd(o.d);
            o.b.contentEditable = "true";//designMode = "on"
            o.b.focus();
           // o.prototype = new editor();
            //Number.prototype.add = function(num){console.log(this); return(this+num);}
            //var r=(3).add(15);
        },
        getHtml: function () { },
        setHtml: function () { },
        getCursor: function (el) {/*获取光标位置*/
            var cursorPos = 0;
            if (document.selection) {
                // IE Support
                el.focus();
                var selectRange = document.selection.createRange();
                selectRange.moveStart('character', -el.value.length);
                cursorPos = selectRange.text.length;
            } else if (el.selectionStart || el.selectionStart == '0') {
                // Firefox support
                cursorPos = el.selectionStart;
            }
            return cursorPos;
        },
        setCursor: function (el, pos) {/*设置光标位置*/
            if (el.setSelectionRange) {
                // IE Support
                el.focus();
                el.setSelectionRange(pos, pos);
            } else if (el.createTextRange) {
                // Firefox support
                var range = el.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        },
        getSelection: function () {/*获取选中文字*/
            var userSelection, text;
            if (window.getSelection) {
                // Firefox support
                userSelection = window.getSelection();
            } else if (document.selection) {
                // IE Support
                userSelection = document.selection.createRange();
            }
            if (!(text = userSelection.text)) {
                text = userSelection;
            }
            return text;
        },
        setSelection: function () { },
        select: function (el, startPos, endPos) {/*选中指定元素指定范围的文本*/
            var startPos = parseInt(startPos),
                endPos = parseInt(endPos),
                textLength = el.value.length;
            if (textLength) {
                if (!startPos) {
                    startPos = 0;
                }
                if (!endPos) {
                    endPos = textLength;
                }
                if (startPos > textLength) {
                    startPos = textLength;
                }
                if (endPos > textLength) {
                    endPos = textLength;
                }
                if (startPos < 0) {
                    startPos = textLength + startPos;
                }
                if (endPos < 0) {
                    endPos = textLength + endPos;
                }
                if (el.createTextRange) {
                    // IE Support
                    var range = el.createTextRange();
                    range.moveStart("character", -textLength);
                    range.moveEnd("character", -textLength);
                    range.moveStart("character", startPos);
                    range.moveEnd("character", endPos);
                    range.select();
                } else {
                    // Firefox support
                    el.setSelectionRange(startPos, endPos);
                    el.focus();
                }
            }
        },
        insertText: function (el, value) {//在光标后插入文本
            var selectRange;
            if (document.selection) {
                // IE Support
                el.focus();
                selectRange = document.selection.createRange();
                selectRange.text = value;
                el.focus();
            } else if (el.selectionStart || el.selectionStart == '0') {
                // Firefox support
                var startPos = el.selectionStart;
                var endPos = el.selectionEnd;
                var scrollTop = el.scrollTop;
                el.value = el.value.substring(0, startPos) + value + el.value.substring(endPos, el.value.length);
                el.focus();
                el.selectionStart = startPos + value.length;
                el.selectionEnd = startPos + value.length;
                el.scrollTop = scrollTop;
            }
            else {
                el.value += value;
                el.focus();
            }

        }
    }
    C.Batch();
}