// ==UserScript==
// @name         BugsAlbumOriginalCover
// @namespace    http://kennysoft.kr
// @version      0.1
// @description  벅스 앨범 커버 원본 이미지로 대체
// @author       KENNYSOFT
// @match        https://music.bugs.co.kr/album/*
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/BugsAlbumOriginalCover.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/BugsAlbumOriginalCover.user.js
// @copyright    2017 KENNYSOFT
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementsByClassName("big")[0].innerHTML="<img src='https://image.bugsm.co.kr/album/images/original/"+location.pathname.substring(7,location.pathname.length-2)+"/"+location.pathname.substring(7)+".jpg' width='200' height='200'>";
    /*document.getElementsByClassName("big")[0].getElementsByTagName("img")[0].src="https://image.bugsm.co.kr/album/images/original/"+location.pathname.substring(7,location.pathname.length-2)+"/"+location.pathname.substring(7)+".jpg";
    document.getElementsByClassName("big")[0].getElementsByTagName("img")[0].setAttribute("width","100%");
    document.getElementsByClassName("big")[0].getElementsByTagName("img")[0].setAttribute("height","100%");*/
})();