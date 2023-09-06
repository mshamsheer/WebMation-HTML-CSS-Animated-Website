
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-content');
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger the callback when 50% of the element is in view
});

// Observe the .main2nd element
const main2nd = document.querySelector('.main2nd');
if (main2nd) {
    observer.observe(main2nd);
}


// 3rd animation
const ob3 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger the callback when 50% of the element is in view
});

// Observe the .main2nd element
const starting3 = document.querySelector('.starting-3');
if (starting3) {
    observer.observe(starting3);
}

// 4rd animation
const ob4 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger the callback when 50% of the element is in view
});

// Observe the .main2nd element
const container4 = document.querySelector('.container-4');
if (container4) {
    observer.observe(container4);
}


        //5th animation 
const ob5 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger the callback when 50% of the element is in view
});

// Observe the .main2nd element
const container5 = document.querySelector('.about-us');
if (container5) {
    observer.observe(container5);
}

// 6th animation

const ob6 = new IntersectionObserver(handleIntersection, {
    threshold: 0.5 // Trigger the callback when 50% of the element is in view
});

// Observe the .main2nd element
const container6 = document.querySelector('.fotter');
if (container6) {
    observer.observe(container6);
}



