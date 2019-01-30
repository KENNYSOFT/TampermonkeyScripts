// ==UserScript==
// @name         InsoyaComment6byte
// @namespace    http://kennysoft.kr
// @version      170715
// @description  인소야 댓글 6바이트 맞춰주기
// @author       KENNYSOFT
// @match        http://www.insoya.com/*
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/InsoyaComment6byte.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/InsoyaComment6byte.user.js
// ==/UserScript==

(function() {
    'use strict';

    if(document.getElementsByName("write").length>0)
    {
        var inputs=document.getElementsByName("write")[0].getElementsByTagName("input");
        for(var i=0;i<inputs.length;++i)
        {
            if(inputs[i].type!="image")continue;
            inputs[i].addEventListener("click",function()
            {
                while(strlen(comment_memo.value)<6)comment_memo.value=comment_memo.value+"ㅤ";
            },false);
        }
    }
    function strlen(str)
    {
        var strLength=0;
        for(var i=0;i<str.length;++i)
        {
            var code=str.charCodeAt(i);
            if(code>255||code<0)strLength=strLength+2;
            else strLength=strLength+1;
        }
        return strLength;
    }
})();