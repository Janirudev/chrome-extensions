console.log('from foreground');

// document.getElementsByClassName('lnXdpd')[0].classList.add('spinspinspin');

const first = document.createElement('button');
first.innerText = 'SET DATA';
first.id = 'first';

const second = document.createElement('button');
second.innerHTML = 'SHOUTOUT TO BACKEND';
second.id = 'second';

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => {
  chrome.storage.local.set({ password: '123' });
  console.log('I SET DATA');
});

second.addEventListener('click', () => {
  chrome.runtime.sendMessage({ message: 'yo check the storage' }, (res) =>
    console.log(res)
  );
  console.log('I SENT THE MESSAGE');
});

chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log(req.message);
});
