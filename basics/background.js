console.log('background script running');

chrome.browserAction.onClicked.addListenser(buttonClicked);

function buttonClicked(tab) {
  console.log('Button clicked!');
}
