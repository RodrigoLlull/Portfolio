const arrow = document.querySelector('#arrow');

const containerPortfolioImages = document.querySelectorAll('.containerPortfolioImages');
const containerPortfolioImagesArray = Array.from(containerPortfolioImages)

window.addEventListener('touchmove', () => {
    if (window.scrollY > 500) {
        arrow.classList.add('show');
    }else{
        arrow.classList.remove('show');
    }
})

arrow.addEventListener('touchend', () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0,
    });
    arrow.classList.remove('show');
})


containerPortfolioImagesArray.forEach(elem => {
    elem.addEventListener('mouseover',() => {
        elem.firstElementChild.classList.toggle('expandirImagePortfolio');
        elem.children[1].classList.toggle('mostrarPortfolioArrow');
        elem.children[2].classList.toggle('mostrarPortfolioArrow');
    })

    elem.addEventListener('mouseout',() => {
        elem.firstElementChild.classList.toggle('expandirImagePortfolio');
        elem.children[1].classList.toggle('mostrarPortfolioArrow');
        elem.children[2].classList.toggle('mostrarPortfolioArrow');
    })
})