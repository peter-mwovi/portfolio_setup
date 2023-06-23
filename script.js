const targetDiv = document.getElementById('web-nav');
const btn = document.getElementById('toggle');
const cancel = document.getElementById('cross');
const linkMenu = document.getElementsByClassName('menu-link');
targetDiv.style.display = 'none';

btn.onclick = function () {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    document.body.style.overflowY = 'hidden';
  } else {
    targetDiv.style.display = 'inline';
    document.body.style.overflowY = 'hidden';
  }
};

cancel.onclick = function () {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    document.body.style.overflowY = 'scroll';
  } else {
    targetDiv.style.display = 'block';
    document.body.style.overflowY = 'scroll';
  }
};

for (let i = 0; i < linkMenu.length; i += 1) {
  linkMenu[i].addEventListener('click', () => {
    targetDiv.style.display = 'none';
    window.location.href = linkMenu[i].href;
    document.body.style.overflowY = 'scroll';
  });
}
