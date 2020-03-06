(function () {
    document.write('<link href="/css/hagureyouma.css" rel="stylesheet" type="text/css">');
    document.write('<link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">');
    document.write('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">');

    document.addEventListener('DOMContentLoaded', function () {
        return_home();
        return_history();
    });
})();

var insertHTML = function (htmlString, className) {
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