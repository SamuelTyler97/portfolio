function changeClass() {
    const changedElement = document.getElementById('class-change'); //Target the element to be class changed
    const screenWidth = window.innerWidth; //Get the current width of the window

    if (screenWidth <= 991) {
        changedElement.classList.remove('col-lg-4');
        changedElement.classList.add('col-lg-12');
    } else {
        changedElement.classList.remove('col-lg-12');
        changedElement.classList.add('col-lg-4');
    }
}

//Call the function on load and whenever the window is resized
changeClass();
window.addEventListener('resize', changeClass);