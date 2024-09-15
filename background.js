chrome.webNavigation.onCompleted.addListener(function (details) {
    chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ['linkedin.js']
    });
}, { url: [{ hostContains: 'linkedin.com' }] });