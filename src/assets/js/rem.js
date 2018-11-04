(function(doc,win){
    var docEl = document.clientWidth ? document : document.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var width = docEl.clientWidth;
            var height = docEl.clientHeight;
            docEl.style.fontSize = width / 10 + 'px';
        }
    if( !doc.addEventListener) return; 
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window)