/*
Portfolio section object
*/
let imageDirectory = "./img/";

const projects = [
  { name: 'Tonic',
    company: 'CANOPY',
    list: [
      "Back End Dev", "2015"
    ],
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!",
    skills: ["html", "css", "JavaScript"],
    modalLink: "#modal-1",
    image: imageDirectory + "Portfolio6.png",
    imageAlt: "Portfolio Image One",
    githubURL: "#",
    websiteURL: "#"
  },

  { name: 'Multi-Post Stories',
    company: 'CANOPY',
    list: [
      "Back End Dev", "2015"
    ],
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!",
    skills: ["html", "css", "JavaScript"],
    modalLink: "#modal-2",
    image: imageDirectory + "Portfolio5.png",
    imageAlt: "Portfolio 2",
    githubURL: "#",
    websiteURL: "#"
  },

  { name: 'Tonic',
    company: 'CANOPY',
    list: [
      "Back End Dev", "2015"
    ],
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!",
    skills: ["html", "css", "JavaScript"],
    modalLink: "#modal-3",
    image: imageDirectory + "Portfolio7.png",
    imageAlt: "Portfolio 3",
    githubURL: "#",
    websiteURL: "#"
  },

  { name: 'Tonic',
    company: 'CANOPY',
    list: [
      "Back End Dev", "2015"
    ],
    shortDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    longDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!",
    skills: ["html", "css", "JavaScript"],
    modalLink: "#modal-4",
    image: imageDirectory + "Portfolio8.png",
    imageAlt: "Portfolio 4",
    githubURL: "#",
    websiteURL: "#"
  },
];

function populateProjects(){
  let projectsDiv = document.querySelector("#portfolio");
  projects.forEach((project, index) => {
    projectsDiv.appendChild(createProject(project, index));
  });
}

populateProjects();

function createProject(projectData, index){
  let singleWork = document.createElement("div");
  singleWork.className = "single-work";

  let image = document.createElement("img");
  image.alt = projectData.imageAlt;
  image.src = projectData.image;

  let holder = document.createElement("div");
  holder.className = "holder";

  let h2 = document.createElement("h2");
  h2.textContent = projectData.name;

  let experience = document.createElement("div");
  experience.className = "experience";

  let company = document.createElement("span");
  company.textContent = projectData.company;

  let ul = document.createElement("ul");

  projectData.list.forEach(value =>{
    let li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);
  });

  experience.appendChild(company);
  experience.appendChild(ul);

  let shortDescription = document.createElement("p");
  shortDescription.textContent = projectData.shortDescription;

  let skills = document.createElement("ul");
  skills.className = "skills";

  projectData.skills.forEach(value =>{
    let li = document.createElement("li");
    li.textContent = value;
    skills.appendChild(li);
  });

  let modalLink = document.createElement("a");
  modalLink.setAttribute("data-modal-id", projectData.modalLink);
  modalLink.textContent = "See Project";
  modalLink.className = "btn modal-button";
  modalLink.setAttribute("data-modal-index", index);

  holder.appendChild(h2);
  holder.appendChild(experience);
  holder.appendChild(shortDescription);
  holder.appendChild(skills);
  holder.appendChild(modalLink);

  singleWork.appendChild(image);
  singleWork.appendChild(holder);

  return singleWork;

}

function mobileMenu() {
  const elements = document.getElementsByClassName('menu-btn');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });
}
mobileMenu();

function menuLink() {
  const elements = document.getElementsByClassName('menu-btn');
  Array.from(elements).forEach((x) => {
    if (x.style.display === 'block') {
      x.style.display = 'none';
    }
  });
}
menuLink();
