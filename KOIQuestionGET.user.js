// ==UserScript==
// @name         KOIQuestionGET
// @namespace    http://kennysoft.kr
// @version      180422
// @description  한국정보올림피아드 의견 게시판에서 form method를 GET으로 변경하여 각 게시물의 URL을 확인할 수 있도록 함
// @author       KENNYSOFT
// @match        http://www.digitalculture.or.kr/koi/selectOlymPiadQuestionList.do*
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/KOIQuestionGET.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/KOIQuestionGET.user.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    goDetail=function(id){
        document.qnf.method = 'GET';
        document.qnf.article_id.value = id;
        document.qnf.action = '/koi/showOlymPiadQuestionDetail.do';
        document.qnf.submit();
    };
})();