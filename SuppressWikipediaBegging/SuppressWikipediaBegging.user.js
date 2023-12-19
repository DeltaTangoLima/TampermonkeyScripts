// ==UserScript==
// @name         Suppress Wikipedia begging
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides the annoying chatbot on the drive.com.au website
// @author       DeltaTangoLima
// @match        *://*.wikipedia.org/*
// @downloadURL  https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/SuppressWikipediaBegging/SuppressWikipediaBegging.user.js
// @updateURL    https://github.com/DeltaTangoLima/TampermonkeyScripts/raw/main/SuppressWikipediaBegging/SuppressWikipediaBegging.user.js
// @icon         https://raw.githubusercontent.com/DeltaTangoLima/TampermonkeyScripts/main/SuppressWikipediaBegging/no-wiki.jpg
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
  .cn-fundraising {
    visibility: hidden;
  }
`);

var badDivs = $("div.entry").has("div.cn-fundraising");;

badDivs.remove();

