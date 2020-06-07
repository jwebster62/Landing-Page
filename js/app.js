/*Navigation Global Variable*/
const allNav = document.getElementById('navbar__list');

/*Section Global Variable*/
const allSection = document.querySelectorAll('section');

const navCreator = () => {

    let navUI = '';
    allSection.forEach(section => {

        const sectionID = section.id;
        const navData = section.dataset.nav;

        navUI += '<li><a class= "menu__link" href="#$[sectionID]">${navData}</a></li>';

    });

    allNav.innerHTML = navUI;
};

navCreator();