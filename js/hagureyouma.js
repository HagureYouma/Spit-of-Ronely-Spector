'use strict';

var insertHTML = function (htmlString, className) {
    var x;
    Array.from(document.getElementsByClassName(className)).forEach(x => x.insertAdjacentHTML('beforeend', htmlString));
}

var return_home = function () {
    var s = '<p><a href="/index.html" target="_top">ホームへ戻る</a></p>';
    insertHTML(s, "return-home");
}

var return_history = function () {
    var s = '<p><a href="javascript:history.back()" target="_top">戻る</a></p>';
    insertHTML(s, "return-history");
}

(function(){
    return_history();
    return_home();
})();