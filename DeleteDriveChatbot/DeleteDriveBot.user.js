// ==UserScript==
// @name         Delete Drive.com.au chatbot
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Hides annoying elements on the drive.com.au website
// @author       DeltaTangoLima
// @match        *://*.drive.com.au/*
// @downloadURL  https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @updateURL    https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/DeleteDriveChatbot/DeleteDriveBot.user.js
// @icon         https://raw.githubusercontent.com/DeltaTangoLima/TampermonkeyScripts/main/DeleteDriveChatbot/no-bots.jpg
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  .liveChat_drive-container__6_tlA {
    visibility: hidden;
  }
  .layout_drive-layout__ad-bg__g70ix layout_drive-layout__ad-bg--mobile-persist-sticky__FW1rV roofrack-wrapper {
    visibility: hidden;
  }
`);
