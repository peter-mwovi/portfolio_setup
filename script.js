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

//main page setup
const tonicProject = {
    name : "Tonic",
    description : "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    image : "./images/work1.jpg",
    technologies : ['html', 'css', 'javascript'],
    items : ['CANOPY', 'Back End Dev', '2015'],
    liveVersionLink : "https://peter-mwovi.github.io/portfolio_setup/",
    sourceLink : "https://github.com/peter-mwovi/portfolio_setup.git"
}

const multiPostProject = {
    name : "Multi-Post Stories",
    description : "Experimental content creation feature that allows users to add to an existant story over the course of a day without spamming their friends.",
    image : "./images/work2.jpg",
    technologies : ['html', 'Ruby on rails', 'css', 'javascript'],
    items : ['FACEBOOK', 'Full Stack Dev', '2015'],
    liveVersionLink : "https://peter-mwovi.github.io/portfolio_setup/",
    sourceLink : "https://github.com/peter-mwovi/portfolio_setup.git"
}

const facebookProject = {
    name : "Facebook 360",
    description : "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and video on Gear VR.",
    image : "images/image2.png",
    technologies : ['html', 'Ruby on rails', 'css', 'javascript'],
    items : ['FACEBOOK', 'Full Stack Dev', '2015'],
    liveVersionLink : "https://peter-mwovi.github.io/portfolio_setup/",
    sourceLink : "https://github.com/peter-mwovi/portfolio_setup.git"
}

const uberNavigationProject = {
    name : "Uber navigation",
    description : "A smart assistant to make driving more safe, efficient and fun by unlocking your most expensive computer, your car.",
    image : "images/image1.png",
    technologies : ['html', 'Ruby on rails', 'css', 'javascript'],
    items : ['Uber', 'Lead Developer', '2018'],
    liveVersionLink : "https://peter-mwovi.github.io/portfolio_setup/",
    sourceLink : "https://github.com/peter-mwovi/portfolio_setup.git"
} 
