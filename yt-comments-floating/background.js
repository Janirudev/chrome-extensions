console.log('from background');

let activeTabId = 0;

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current) => {
    activeTabId = tab.tabId;
    if (/^https:\/\/www\.google/.test(current.url)) {
      chrome.tabs.insertCSS(null, { file: './mystyles.css' });
      chrome.tabs.executeScript(null, { file: './foreground.js' }, () =>
        console.log('i injected')
      );
    }
  });
});

chrome.runtime.onMessage.addListener((req, sender, res) => {
  if (req.message === 'yo check the storage') {
    chrome.tabs.sendMessage(activeTabId, {
      message: 'yo i got your message, sending my sendMessage',
    });

    res({ message: 'yo I got your message' });

    chrome.storage.local.get('password', (value) => {
      console.log(value);
    });
  }
});
