// Navbar Functionality
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolling');
    } else {
        navbar.classList.remove('scrolling');
    }

    navbarLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section.offsetTop <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Smooth Scroll
const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
};

navbarLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Contact Form Handling
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Implement form submission logic here (e.g. using Fetch API or Axios)
    alert('Form submitted!');
});

// Scroll Animations
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const animateOnScroll = () => {
    animatedElements.forEach(element => {
        const isVisible = (element.getBoundingClientRect().top < window.innerHeight - 100);
        if (isVisible) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Typing Effect
const typingText = document.querySelector('.typing-effect');
const textArray = ["Web Developer", "Designer", "Freelancer"];
let textIndex = 0;
let letterIndex = 0;

const type = () => {
    if (letterIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(remove, 2000);
    }
};

const remove = () => {
    if (letterIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(remove, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    type();
});

// Scroll-to-Top Button
const scrollToTopButton = document.querySelector('#scroll-to-top');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onscroll = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};
