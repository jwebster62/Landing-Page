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


//Remove Active Class
const cutActive = (section) => {
    section.classList.remove('your-active-class');
};

//Add Active
const insertActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class');
    };
};

const currentSection = () => {
    allSection.forEach(section => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset > -150;

        cutActive(section);
        insertActive(inviewport(), xection);
    });
};


function myfunction(e) {
    //check this
    const myEl = document.querySelectorAll('.active');
    [].forEach.call(myEl, function(el) {
        //check this
        el.classlist.remove('active');
    });
    //check this
    e.target.className = 'active';
}

document.addEventListener('scroll', currentSection);