const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header__mobile-menu')
const closeMobileMenu = document.querySelector('.header__mobile-close')

burgerMenu.addEventListener('click', () => {
 	mobileMenu.classList.toggle('header__mobile-menu_active');
});

closeMobileMenu.addEventListener('click', () => {
	mobileMenu.classList.toggle('header__mobile-menu_active');
});

const menuItems = document.querySelectorAll('.list__item')

menuItems.forEach(menuItem => {
	menuItem.addEventListener('click', () => {
		menuItems.forEach(item => item.classList.remove('list__item-active'))

		menuItem.classList.toggle('list__item-active');
  });
})

const heroBtns = document.querySelectorAll('.btns__btn')
const heroMainImg = document.querySelector('.hero__main-img');

heroBtns.forEach(heroBtn => {
	
	heroBtn.addEventListener('click', () => {
		heroBtns.forEach(item => item.classList.remove('btns__btn-active'))

		heroBtn.classList.toggle('btns__btn-active');

		if (window.innerWidth > 1300) {
			if (heroBtn.innerHTML === 'Portfolio') {
				heroMainImg.classList.remove('hero__main-img_active')
			} else {
				heroMainImg.classList.add('hero__main-img_active')
			}
		}
  });
})

const sliderService = document.querySelectorAll('.services__container .slider .slider__elem')
let sliderServiceBlock = document.querySelector('.services__examples .example')
let sliderServiceBlockLenght
const sliderContainer = document.querySelector('.services__examples')


sliderService.forEach((elem,idx) => 
	elem.addEventListener('click', ()=> {

	sliderServiceBlockLenght = sliderServiceBlock.getBoundingClientRect().width

		const flexGap = 25.5

		sliderContainer.style.transform = `translateX(-${ (sliderServiceBlockLenght + flexGap) * idx}px)`;
		
		sliderService.forEach(item => item.classList.remove('slider-active'))

		sliderService[idx].classList.add('slider-active')
		
	}))


	const slider = document.querySelector('.testimnials__wrapper');

	window.addEventListener('resize', () => {
		sliderService.forEach(item => item.classList.remove('slider-active'))
		sliderService[0].classList.add('slider-active')
		document.querySelector('.mobile-list .list__item').classList.add('list__item-active')
		sliderContainer.style.transform = `none`;

		if(window.innerWidth > 1250) {
			slider.style.transform = `transform: translateX(-33%)`;
		}
	 });


	
	 let isDragging = false;
	 let startPosition = 0;
	 let currentTranslate = 0;
	 let previousTranslate = 0;
	 
	 slider.addEventListener('mousedown', dragStart);
	 slider.addEventListener('touchstart', dragStart);
	 
	 slider.addEventListener('mousemove', drag);
	 slider.addEventListener('touchmove', drag);
	 
	 slider.addEventListener('mouseup', dragEnd);
	 slider.addEventListener('touchend', dragEnd);
	 
	 slider.addEventListener('mouseleave', dragEnd);
	 slider.addEventListener('touchcancel', dragEnd);
	 
	 function dragStart(event) {
		if (event.type === 'touchstart') {
		  startPosition = event.touches[0].clientX;
		} else {
		  startPosition = event.clientX;
		}
	 
		isDragging = true;
	 }
	 
	 function drag(event) {
		if (isDragging) {
		  let currentPosition;
		  if (event.type === 'touchmove') {
			 currentPosition = event.touches[0].clientX;
		  } else {
			 currentPosition = event.clientX;
		  }
	 
		  const diff = currentPosition - startPosition;
		  currentTranslate = previousTranslate + diff;
		  updateSliderPosition();
		}
	 }
	 
	 function dragEnd() {
		previousTranslate = currentTranslate;
		isDragging = false;
	 }
	 
	 function updateSliderPosition() {
		slider.style.transform = `translateX(${currentTranslate}px)`;
	 }



const sliderPortfolio = document.querySelectorAll('.portfolio .slider .slider__elem')
let sliderPortfolioBlock = document.querySelector('.portfolio__examples')
let sliderPortfolioLenght
const sliderPortfolioContainer = document.querySelector('.portfolio__examples-block')

console.log(sliderPortfolio)

sliderPortfolio.forEach((elem,idx) => 
	elem.addEventListener('click', ()=> {

		sliderPortfolioLenght = sliderPortfolioBlock.getBoundingClientRect().width

		const flexGap = 25.5

		sliderPortfolioContainer.style.transform = `translateX(-${ (sliderPortfolioLenght + flexGap) * idx}px)`;
		
		sliderPortfolio.forEach(item => item.classList.remove('slider-active'))

		sliderPortfolio[idx].classList.add('slider-active')
		
	}))