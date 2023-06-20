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

/* adding all project's object in the main project section */
let projectSectionData = [tonicProject, multiPostProject, facebookProject, uberNavigationProject];
buildProjectCard(projectSectionData);

function buildProjectCard(data) {
  const grid1b = document.querySelector('.grid-1b');
  for (let cardData of data) {
    /* A Single row that represents the project's card */
    const rows = document.createElement('div');
    rows.className = 'rows';

    //Project's image-side
    let photo1 = document.createElement('div');
    let work1bImg = document.createElement('img');
    photo1.className = 'photo1';
    work1bImg.className = 'work1b-img';
    work1bImg.src = cardData.image;
    photo1.appendChild(work1bImg); //this appends image to div container

    //Project's details-side
    let work1b = document.createElement('div');
    let h2 = document.createElement('h2');
    work1b.className = 'work1b';
    h2.innerHTML = cardData.name;
    h2.classList.add('work-text1b', 'poppins');
    work1b.appendChild(h2);

    let flex1Ul = document.createElement('ul');
    flex1Ul.className = 'flex1';

    //appends 5 li to Ul
    for (let i = 0; i < 5; i++) {
      let li, node;
      li = document.createElement('li');
      if (i === 1 || i === 3) {
        node = document.createElement('img');
        node.className = 'dot';
        node.src = 'images/dot1.png';
        li.appendChild(node);
      } else {
        node = document.createElement('p');
        node.className = 'poppins';

        //loop through all items data
        node.innerHTML = cardData.items[i];
        li.appendChild(node);
        console.log(cardData.items[i]);
      }
      //for each iteration we append new item li to ul
      flex1Ul.appendChild(li);
    }
    work1b.appendChild(flex1Ul);

    let projectDescription = document.createElement('p'); //project description element
    projectDescription.classList.add('desc2', 'poppins');
    projectDescription.innerHTML = cardData.description;
    work1b.appendChild(projectDescription);

    let technologies = document.createElement('ul'); //tecnologies ul
    technologies.className = 'flex2';

    //build technologies li
    work1b.appendChild(buildTechnologyBloc(cardData.technologies, technologies));

    let nav = document.createElement('nav');
    let buttonSeeProject = document.createElement('button');
    buttonSeeProject.classList.add('see-project', 'poppins');
    buttonSeeProject.type = 'button';
    buttonSeeProject.innerHTML = 'See project';
    nav.appendChild(buttonSeeProject);
    work1b.appendChild(nav);

    rows.appendChild(photo1); //append image side to card
    rows.appendChild(work1b); //append details side to card

    grid1b.appendChild(rows);
  }
  // console.log(grid1b);
}

/**
 * this function returns a built list (ul) of all technologies
 * @param {Array} technologyArray 
 * @param {HTMLElement} technologyHtmlUl 
 * @returns HTMLElement (<ul></ul>)
 */
function buildTechnologyBloc(technologyArray, technologyHtmlUl = null) {
  for (let techology of technologyArray) {
      let li = document.createElement('li');
      let p = document.createElement('p');
      p.classList.add('stack', 'poppins');
      p.innerHTML = techology;
      li.appendChild(p);
      technologyHtmlUl.appendChild(li);
    }
    return technologyHtmlUl;
}




