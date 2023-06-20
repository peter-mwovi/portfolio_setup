const targetDiv = document.getElementById("web-nav");
const btn = document.getElementById("toggle");
const cancel = document.getElementById("cross");
const linkMenu = document.getElementsByClassName('menu-link');
targetDiv.style.display = 'none';

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "inline";
  }
};

cancel.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
}

for (let link of linkMenu) {
  link.addEventListener('click', function() {
    targetDiv.style.display = "none";
    window.location.href = link.href;
  });
}
