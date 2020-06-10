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


// getting largest value that is less than or equal to number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};


//remove active class
const clearActive = (section) => {
    section.classList.remove('your-active-class');
    section.classList.remove('focus');
};

//add active class
const insertActive = (conditional, section) => {
    if (conditional) {
        section.classList.add('your-active-class');
        section.classList.add('focus');
    };
};

//implement actual function

const activeSection = () => {
    allSection.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        clearActive(section);
        insertActive(inviewport(), section);

    });
};

window.addEventListener('scroll', activeSection);
//Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});