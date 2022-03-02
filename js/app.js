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
