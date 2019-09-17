/*
该组件用到drag组件，使用前须引用drag组件
*/
function slide() {
    slide.prototype = {
        Init: function (o) {
            C.Pt(o);
            o.style.width = o.ps.w + "px";
            o.style.height = o.ps.h + "px";
        },
        /*预览*/
        clip: function (i) {
       },

    /*将图片指定区域画到画布上,并在加载完成后提取数据并上传*/
 draw: function (o)
 {
    }
    }
    C.Batch();
}