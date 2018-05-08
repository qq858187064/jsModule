*
* 描述：跨浏览器的设置 innerHTML 方法
* 允许插入的 HTML 代码中包含 script 和 style
* 参数：
*   el: DOM 树中的节点，设置它的 innerHTML
*   htmlCode: 插入的 HTML 代码
* 经测试的浏览器：ie5+, firefox1.5+, opera8.5+
*/
var set_innerHTML = function (el, htmlCode)
{var ua = navigator.userAgent.toLowerCase();
 if (ua.indexOf('msie') >= 0 && ua.indexOf('opera') < 0) 
 {htmlCode = '<div style="display:none">for IE</div>' + htmlCode;
  htmlCode = htmlCode.replace(/<script([^>]*)>/gi,'<script$1 defer="true">');
  el.innerHTML = htmlCode;
  el.removeChild(el.firstChild);
 }
 else 
 {var el_next = el.nextSibling;
  var el_parent = el.parentNode;
  el_parent.removeChild(el);
  el.innerHTML = htmlCode;
  if (el_next)
   el_parent.insertBefore(el, el_next)
  else
   el_parent.appendChild(el);
 }
}
上面的代码还有一个问题：如果插入的 HTML 代码中包含 document.write 语句，那么就会破坏整个页面。对于这种情况，可以通过重新定义 document.write 来避免。代码如下：
/*
 描述：重定义 document.write 函数.
 避免在使用 set_innerHTML 时，插入的 HTML 代码中包含 document.write 语句，导致原页面受到破坏。
*/
document.write = function(){
 var body = document.getElementsByTagName('body')[0];
 for (var i = 0; i < arguments.length; i++) {
  argument = arguments[i];
  if (typeof argument == 'string') {
   var el = body.appendChild(document.createElement('div'));
   set_innerHTML(el, argument)
  }
 }
}