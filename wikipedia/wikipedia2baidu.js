// ==UserScript==
// @name 百度百科美化
// @namespace userElaina
// @version 2023.03.08.1
// @description 中国人就用百度百科
// @author userElaina
// @license MIT
// @match *://*.wikipedia.org/*
// @grant none
// ==/UserScript==

(function () {
    document.querySelector('link[rel="icon"]').href = 'https://raw.githubusercontent.com/userElaina/this-is-the-China-website/main/wikipedia/baidu.ico';
    document.title = document.title.replace(/\s-[\s\S]*/g, " - 百度百科");
    document.querySelector('input.vector-search-box-input').placeholder = '搜索百度百科';
    document.getElementById("siteSub").innerText = '百度百科或许会倒闭, 但一定不会变质!';

    var bigLogo = document.querySelector('a.mw-wiki-logo');
    if (bigLogo != null) {
        bigLogo.innerHTML = '<img src="https://raw.githubusercontent.com/userElaina/this-is-the-China-website/main/wikipedia/baidu_big.png" style="padding:10px;padding-top:40px;width:-webkit-fill-available;">';
        bigLogo.className = '';
    }
    bigLogo = document.querySelector('a.mw-logo');
    if (bigLogo != null) {
        bigLogo.innerHTML = '<img src="https://raw.githubusercontent.com/userElaina/this-is-the-China-website/main/wikipedia/baidu_big.png" style="padding:10px;padding-top:20px;width:-webkit-fill-available;">';
        bigLogo.className = '';
    }
})();
