// ==UserScript==
// @name         Delete Drive.com.au chatbot
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Hides the annoying chatbot on the drive.com.au website
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
`);
