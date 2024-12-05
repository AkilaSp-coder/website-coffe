// Select the buttons and the menu
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');
const navLinks = document.querySelectorAll('.nav-menu .nav-link'); // Adjust based on your HTML structure
const orderNowButton = document.querySelector('.order-now');
const contactUsButton = document.querySelector('.contact-us');
const placeOrderSection = document.querySelector('#place-order');


// Add event listeners for opening and closing the menu
menuOpenButton.addEventListener('click', () => {
    document.body.classList.add('show-mobile-menu'); // Add class to show menu
});

menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu'); // Remove class to hide menu
});


orderNowButton.addEventListener('click', () => {
    // Scroll smoothly to the menu section
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
});

contactUsButton.addEventListener('click', () => {
    // Scroll smoothly to the contact section
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
});
orderNowButton.addEventListener('click', () => {
    placeOrderSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start' // Scroll to the top of the section
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const sectionId = link.getAttribute('href');
        if (sectionId && sectionId.startsWith('#')) {
            document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add event listener for each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('show-mobile-menu'); // Hide menu
    });
});
