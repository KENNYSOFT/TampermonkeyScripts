// ==UserScript==
// @name         InsoyaMoreHomeShortcut
// @namespace    http://kennysoft.kr
// @version      170823
// @description  인소야 홈 단축키 추가
// @author       KENNYSOFT
// @match        http://www.insoya.com/*
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/InsoyaMoreHomeShortcut.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/InsoyaMoreHomeShortcut.user.js
// ==/UserScript==

(function() {
    'use strict';

    function movePage2(e)
    {
        var pressedKey = window.event ? event.keyCode : e.which;
        var eObj = window.event ? event.srcElement.tagName : e.target.tagName;
        if (eObj != 'INPUT' && eObj != 'TEXTAREA')
        {
            if (pressedKey == '48' || pressedKey == '96') location.href="http://www.insoya.com/maple12/main.php?id=_index";
            if (pressedKey == '49') location.href="http://www.insoya.com/bbs/zboard.php?id=talkmaple";
            if (pressedKey == '50') location.href="http://www.insoya.com/bbs/zboard.php?id=talkmaple_job";
            if (pressedKey == '51') location.href="http://www.insoya.com/bbs/zboard.php?id=maple_info";
            if (pressedKey == '52') location.href="http://www.insoya.com/maple12/maple_skill.php?id=_job";
            if (pressedKey == '53') location.href="http://www.insoya.com/bbs/zboard.php?id=maple_qna";
            if (pressedKey == '54') location.href="http://www.insoya.com/bbs/zboard.php?id=ucc";
        }
    }
    document.onkeypress=movePage2;
})();