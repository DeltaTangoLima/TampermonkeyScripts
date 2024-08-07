// ==UserScript==
// @name         Delete Drive.com.au crap
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Hides annoying elements on the drive.com.au website
// @author       DeltaTangoLima
// @match        *://*.drive.com.au/*
// @downloadURL  https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @updateURL    https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @icon         https://raw.githubusercontent.com/DeltaTangoLima/TampermonkeyScripts/main/DeleteDriveChatbot/no-bots.jpg
// @grant        GM_addStyle
// @run-at       document-idle

const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

remove('[class*="liveChat_drive-container__"]');
remove('[class*="layout_drive-layout__ad-bg__"]');
remove('[class*="layout_drive-layout__ad-bg--mobile-persist-sticky__"]');
remove('[class*="roofrack-wrapper"]');

(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

function check(changes, observer) {
    if(document.querySelector('[class*="liveChat_drive-container__"]')) {
        observer.disconnect();
        remove('[class*="liveChat_drive-container__"]');
    }
}