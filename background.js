const list = ['naver.com', 'facebook.com', 'github.com']

chrome.runtime.onMessage.addListener(
  (req, sender, sendResponse) => {
    if (req) {
      if(req.message === 'check') {
        sendResponse({ success: true })
      }
    }
    return true
  }
)

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null,{file:"content.js"});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  const flag = list.some(v => tab.url.includes(v))
  if (flag) chrome.tabs.update(tab.id, { url: 'http://warning.or.kr' })
})
