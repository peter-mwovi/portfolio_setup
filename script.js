const targetDiv = document.getElementById('web-nav');
const btn = document.getElementById('toggle');
const cancel = document.getElementById('cross');
const linkMenu = document.getElementsByClassName('menu-link');
const title = document.querySelector('.title');
const text = document.querySelector('.paragraph1');
const logo = document.querySelector('.logo');
const about = document.getElementById('cross2');

btn.onclick = function () {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    btn.style.display = 'inline';
    document.body.style.overflowY = 'hidden';
    title.style.textShadow = '#172b4d 0 0 0';
    text.style.textShadow = '#344563 0 0 0';
    logo.style.textShadow = '#6070ff 0 0 0';
  } else {
    targetDiv.style.display = 'inline';
    document.body.style.overflowY = 'hidden';
    btn.style.display = 'none';
    title.style.color = 'transparent';
    title.style.textShadow = '#172b4d 0 0 10px';
    text.style.color = 'transparent';
    text.style.textShadow = '#344563 0 0 10px';
    logo.style.color = 'transparent';
    logo.style.textShadow = '#6070ff 0 0 10px';
  }
};

cancel.onclick = function () {
  if (targetDiv.style.display !== 'none') {
    targetDiv.style.display = 'none';
    btn.style.display = 'inline';
    document.body.style.overflowY = 'scroll';
    title.style.textShadow = '#172b4d 0 0 0';
    text.style.textShadow = '#344563 0 0 0';
    logo.style.textShadow = '#6070ff 0 0 0';
  } else {
    targetDiv.style.display = 'block';
    document.body.style.overflowY = 'scroll';
    btn.style.display = 'inline';
    title.style.textShadow = '#172b4d 0 0 0';
    text.style.textShadow = '#344563 0 0 0';
    logo.style.textShadow = '#6070ff 0 0 0';
  }
};

about.onclick = function () {
  title.style.textShadow = '#172b4d 0 0 0';
  text.style.textShadow = '#344563 0 0 0';
  logo.style.textShadow = '#6070ff 0 0 0';
  btn.style.display = 'inline';
};

for (let i = 0; i < linkMenu.length; i += 1) {
  linkMenu[i].addEventListener('click', () => {
    targetDiv.style.display = 'none';
    window.location.href = linkMenu[i].href;
    document.body.style.overflowY = 'scroll';
  });
}
