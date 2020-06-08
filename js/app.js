//Navigation Global Variable
const allNav = document.getElementById('navbar__list');

//Section Global Variable
const allSection = document.querySelectorAll('section');

//Create the Navigation Bar
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


//Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Check For Active
const activeSection =

    const bounding = allSection.getBoundingClientRect();