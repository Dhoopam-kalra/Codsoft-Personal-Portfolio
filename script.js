const readMoreButton = document.getElementById('readMoreButton');
const extraInfo = document.getElementById('extraInfo');

readMoreButton.addEventListener('click', () => {
    if (extraInfo.style.display === 'none') {
        extraInfo.style.display ='block';
        readMoreButton.textContent= 'Read Less';
    }
    else {extraInfo.style.display = 'none';
          readMoreButton.textContent = 'Read More';


}
});



document.addEventListener("DOMContentLoaded", function() {
const links = document.querySelectorAll("a[href^='#']");

for (const link of links){
    link.addEventListener("click", clickHandler);
}
function clickHandler(e){
    e.preventDefault();
    const href = this.getAttribute("href");
    const target = document.querySelector(href);
    const topOffset = 100;
    const top = target.getBoundingClientRect().top + window.pageYoffset - topOffset;

    window.scrollTo({
        top,
        behavior: "smooth"
    });
}

});