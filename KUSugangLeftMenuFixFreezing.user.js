// ==UserScript==
// @name         KUSugangLeftMenuFixFreezing
// @namespace    http://kennysoft.kr
// @version      170817
// @description  고려대학교 수강신청 시스템 좌측 메뉴 비활성화 문제 해결
// @author       KENNYSOFT
// @match        http://sugang.korea.ac.kr/CourseInfoMenu.jsp
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/KUSugangLeftMenuFixFreezing.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/KUSugangLeftMenuFixFreezing.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("NetFunnel_Loading_Popup").parentNode.removeChild(document.getElementById("NetFunnel_Loading_Popup"));
    document.getElementById("mpopup_bg").parentNode.removeChild(document.getElementById("mpopup_bg"));
    document.getElementById("pop_iframe").parentNode.removeChild(document.getElementById("pop_iframe"));
})();