// ==UserScript==
// @name         CodeGroundLoginSkipPWChange
// @namespace    http://kennysoft.kr
// @version      170715
// @description  CodeGround 로그인시 비밀번호 변경 요청 스킵
// @author       KENNYSOFT
// @match        https://*.codeground.org/common/changePassword*
// @grant        none
// @updateURL    https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/CodeGroundLoginSkipPWChange.user.js
// @downloadURL  https://github.com/KENNYSOFT/TampermonkeyScripts/raw/master/CodeGroundLoginSkipPWChange.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById('laterBtn').click();
})();