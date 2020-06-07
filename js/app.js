/*Navigation Global Variable*/
const allNav = document.getElementById('navbar__list');

/*Section Global Variable*/
const allSection = document.querySelectorAll('section');

const navCreator = () => {

    let navUI = '';
    allSection.forEach(section => {

        const ID = section.id;
        const navData = section.dataset.nav

        navUI += `<li><a class= "menu__link" href="#${ID}">${navData}</a></li>`;

    });

    allNav.innerHTML = navUI;
};

navCreator();

/*Smooth Scrolling Effect*/
const scroll_to = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for (let i = 0; i < sections; i++) {
                sections[i].addEventListener('click', sectionScroll(link));
            }
        });
    });
};
scroll_to();