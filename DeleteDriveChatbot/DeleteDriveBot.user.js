// ==UserScript==
// @name         Delete Drive.com.au crap
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Hides annoying elements on the drive.com.au website
// @author       DeltaTangoLima
// @match        *://*.drive.com.au/*
// @downloadURL  https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @updateURL    https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @icon         https://raw.githubusercontent.com/DeltaTangoLima/TampermonkeyScripts/main/DeleteDriveChatbot/no-bots.jpg
// @grant        GM_addStyle
// ==/UserScript==

const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());

remove(".liveChat_drive-container__6_tlA");
remove(".layout_drive-layout__ad-bg__g70ix");
remove(".layout_drive-layout__ad-bg--mobile-persist-sticky__FW1rV");
remove(".roofrack-wrapper");
