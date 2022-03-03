const projects = [
  {
    name: 'Tonic',
    company: 'CANOPY',
    list: ['Back End Dev', '2015'],
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!',
    skills: ['html', 'css', 'JavaScript'],
    modalSkills: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    modalLink: '#modal-1',
    image: './img/Portfolio6.png',
    imageAlt: 'Portfolio Image One',
    githubURL: '#',
    websiteURL: '#',
  },

  {
    name: 'Multi-Post Stories',
    company: 'CANOPY',
    list: ['Back End Dev', '2015'],
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!',
    skills: ['html', 'css', 'JavaScript'],
    modalSkills: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    modalLink: '#modal-2',
    image: './img/Portfolio5.png',
    imageAlt: 'Portfolio 2',
    githubURL: '#',
    websiteURL: '#',
  },

  {
    name: 'Tonic',
    company: 'CANOPY',
    list: ['Back End Dev', '2015'],
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!',
    skills: ['html', 'css', 'JavaScript'],
    modalSkills: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    modalLink: '#modal-3',
    image: './img/Portfolio7.png',
    imageAlt: 'Portfolio 3',
    githubURL: '#',
    websiteURL: '#',
  },

  {
    name: 'Tonic',
    company: 'CANOPY',
    list: ['Back End Dev', '2015'],
    shortDescription:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    longDescription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur consequuntur non, laborum et ducimus voluptates nulla odio unde officiis. Corrupti, numquam. Accusamus doloremque dolor maiores nisi pariatur nemo a fuga!',
    skills: ['html', 'css', 'JavaScript'],
    modalSkills: ['html', 'css', 'javaScript', 'github', 'ruby', 'bootstraps'],
    modalLink: '#modal-4',
    image: './img/Portfolio8.png',
    imageAlt: 'Portfolio 4',
    githubURL: '#',
    websiteURL: '#',
  },
];

function createProject(projectData, index) {
  const singleWork = document.createElement('div');
  singleWork.className = 'single-work';

  const image = document.createElement('img');
  image.alt = projectData.imageAlt;
  image.src = projectData.image;

  const holder = document.createElement('div');
  holder.className = 'holder';

  const h2 = document.createElement('h2');
  h2.textContent = projectData.name;

  const experience = document.createElement('div');
  experience.className = 'experience';

  const company = document.createElement('span');
  company.textContent = projectData.company;

  const ul = document.createElement('ul');

  projectData.list.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
  });

  experience.appendChild(company);
  experience.appendChild(ul);

  const shortDescription = document.createElement('p');
  shortDescription.textContent = projectData.shortDescription;

  const skills = document.createElement('ul');
  skills.className = 'skills';

  projectData.skills.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    skills.appendChild(li);
  });

  const modalLink = document.createElement('a');
  modalLink.setAttribute('data-modal-id', projectData.modalLink);
  modalLink.textContent = 'See Project';
  modalLink.className = 'btn modal-button';
  modalLink.setAttribute('data-modal-index', index);

  holder.appendChild(h2);
  holder.appendChild(experience);
  holder.appendChild(shortDescription);
  holder.appendChild(skills);
  holder.appendChild(modalLink);

  singleWork.appendChild(image);
  singleWork.appendChild(holder);

  return singleWork;
}

function populateProjects() {
  const projectsDiv = document.querySelector('#portfolio');
  projects.forEach((project, index) => {
    projectsDiv.appendChild(createProject(project, index));
  });
}
populateProjects();

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

function generateModal(index) {
  const modalsDiv = document.querySelector('#modals');
  // clear the modals innerHTML
  modalsDiv.innerHTML = '';

  const project = projects[index];

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = project.modalLink;

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalHeading = document.createElement('div');
  modalHeading.className = 'modal-heading';

  const h2 = document.createElement('h2');
  h2.textContent = project.name;

  const modalClose = document.createElement('span');
  modalClose.className = 'modal-close';
  modalClose.textContent = 'X';
  modalClose.setAttribute('data-modal-index', index);

  modalHeading.appendChild(h2);
  modalHeading.appendChild(modalClose);

  const experience = document.createElement('div');
  experience.className = 'experience';

  const modalCanopyTitle = document.createElement('span');
  modalCanopyTitle.className = 'modal-canopy-title';
  modalCanopyTitle.textContent = project.company;

  const modalCanopyList = document.createElement('ul');
  modalCanopyList.className = 'modal-canopy-list';

  project.list.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    modalCanopyList.appendChild(li);
  });

  experience.appendChild(modalCanopyTitle);
  experience.appendChild(modalCanopyList);

  const image = document.createElement('img');
  image.alt = project.imageAlt;
  image.src = project.image;

  const modalInfoSection = document.createElement('div');
  modalInfoSection.className = 'modal-info-section';

  const longDescription = document.createElement('p');
  longDescription.textContent = project.longDescription;

  const skills = document.createElement('ul');
  skills.className = 'skills';

  project.modalSkills.forEach((value) => {
    const li = document.createElement('li');
    li.textContent = value;
    skills.appendChild(li);
  });

  const modalInfoContainer = document.createElement('div');
  modalInfoContainer.classList = 'modal-info-container';

  const divider = document.createElement('div');

  const modalLinksContainer = document.createElement('div');
  modalLinksContainer.classList = 'modal-links-container';

  const img1 = document.createElement('img');
  img1.src = './img/see_live.png';

  const websiteButton = document.createElement('a');
  websiteButton.href = project.websiteURL;
  websiteButton.appendChild(img1);

  const img2 = document.createElement('img');
  img2.src = './img/git.png';

  const githubButton = document.createElement('a');
  githubButton.href = project.githubURL;
  githubButton.appendChild(img2);

  modalLinksContainer.appendChild(websiteButton);
  modalLinksContainer.appendChild(githubButton);

  modalInfoContainer.appendChild(skills);
  modalInfoContainer.appendChild(divider);
  modalInfoContainer.appendChild(modalLinksContainer);

  modalInfoSection.appendChild(longDescription);
  modalInfoSection.appendChild(modalInfoContainer);

  modalContent.appendChild(modalHeading);
  modalContent.appendChild(experience);
  modalContent.appendChild(image);
  modalContent.appendChild(modalInfoSection);

  modal.appendChild(modalContent);

  modalsDiv.appendChild(modal);
}

function hasClass(element, className) {
  return element.className.split(' ').indexOf(className) > -1;
}

function closeModal() {
  document.querySelector('#modals').innerHTML = '';
  document.querySelector('body').style.overflowY = 'initial';
}

document.addEventListener('click', (e) => {
  if (hasClass(e.target, 'modal-close')) {
    e.preventDefault();

    closeModal();
  }

  if (hasClass(e.target, 'modal')) {
    closeModal();
  }

  if (hasClass(e.target, 'modal-button')) {
    e.preventDefault();
    const modalIndex = e.target.getAttribute('data-modal-index');

    generateModal(modalIndex);

    document.querySelector('body').style.overflowY = 'hidden';
  }
});

/*
 Email Validation
 */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  let valid = true;

  const responseContainer = document.querySelector('#response-text');

  const email = document.querySelector('#email').value;

  const emailArray = email.split('');

  for (let i = 0; i < emailArray.length; i += 1) {
    if (
      emailArray[i] !== emailArray[i].toLowerCase()
      && emailArray[i] !== '@' && emailArray[i] !== '.'
    ) {
      valid = false;
    }
  }

  // if the email is valid, proceed with form submission
  if (valid) {
    // empty the response test in contact form
    responseContainer.innerHTML = '';
  } else {
    e.preventDefault();
    responseContainer.innerHTML = 'Invalid Email';
  }
});

// function to populate the contact form from localStorage
function loadFormData() {
  const userData = JSON.parse(localStorage.getItem('contact-details'));
  document.querySelector('#email').value = userData.email;
  document.querySelector('#contact-name').value = userData.name;
  document.querySelector('#contact-message').value = userData.message;
}

function initializeStorage() {
  if (localStorage.getItem('contact-details') == null) {
    const details = {
      name: '',
      email: '',
      message: '',
    };

    localStorage.setItem('contact-details', JSON.stringify(details));
  }
}

function updateStorage() {
  const details = JSON.parse(localStorage.getItem('contact-details'));
  details.email = document.querySelector('#email').value;
  details.name = document.querySelector('#contact-name').value;
  details.message = document.querySelector('#contact-message').value;
  localStorage.setItem('contact-details', JSON.stringify(details));
}

initializeStorage();
loadFormData();

// Event listeners to save data when ser populates contact form
document.querySelector('#email').addEventListener('keyup', () => {
  updateStorage();
});

document.querySelector('#contact-name').addEventListener('keyup', () => {
  updateStorage();
});

document.querySelector('#contact-message').addEventListener('keyup', () => {
  updateStorage();
});