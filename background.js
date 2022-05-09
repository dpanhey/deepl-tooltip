"use strict"

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "deeplTooltipTranslator",
    "title": "DeepL Tooltip Translator",
    "contexts": ["selection"]
  });
});