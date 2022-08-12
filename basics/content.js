console.log('Hey from extension!');

let paragraph = document.getElementsByTagName('p');

for (el of paragraph) {
  el.style['background-color'] = '#FF00FF';
  el.style['font-size'] = '20px';
}
