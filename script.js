/** Бургер-меню */

const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header__mobile-menu')
const closeMobileMenuBtn = document.querySelector('.header__mobile-close')

burgerMenu.addEventListener('click', () => {
 	mobileMenu.classList.toggle('header__mobile-menu_active');
});

closeMobileMenuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('header__mobile-menu_active');
});


/** Выбор значения в меню */

const menuItems = document.querySelectorAll('.list__item')
const mobileMenuItems = document.querySelectorAll('.mobile-list .list__item')

menuItems.forEach(menuItem => {
	menuItem.addEventListener('click', () => {
		menuItems.forEach(item => item.classList.remove('list__item-active'))
		mobileMenuItems.forEach(item => item.classList.remove('list__item-active'))

		menuItem.classList.toggle('list__item-active');

		mobileMenuItems.forEach(mobileItem => {
			if(mobileItem.innerHTML === menuItem.innerHTML) {
				mobileItem.classList.add('list__item-active')
			} else {
				mobileItem.classList.remove('list__item-active')
			}
		}
			)
  });
})

mobileMenuItems.forEach(mobileItem => {
	mobileItem.addEventListener('click', () => {
		menuItems.forEach(item => item.classList.remove('list__item-active'))
		mobileMenuItems.forEach(item => item.classList.remove('list__item-active'))

		mobileItem.classList.toggle('list__item-active');

		menuItems.forEach(menuItem => {
			if(mobileItem.innerHTML === menuItem.innerHTML) {
				menuItem.classList.add('list__item-active')
			} else {
				menuItem.classList.remove('list__item-active')
			}
		}
			)
  });
})

/** Анимация в секции hero */

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

/** Слайдер вкладки service */

const sliderServiceContainer = document.querySelector('.services__examples')
const sliderServiceElems = document.querySelectorAll('.services__container .slider .slider__elem')
const serviceElem = document.querySelector('.services__examples .example')
let sliderServiceElemLenght
const flexGap = 25.5


sliderServiceElems.forEach((elem,idx) => 
	elem.addEventListener('click', ()=> {

		sliderServiceElemLenght = serviceElem.getBoundingClientRect().width

		sliderServiceContainer.style.transform = `translateX(-${ (sliderServiceElemLenght + flexGap) * idx}px)`;
		
		sliderServiceElems.forEach(item => item.classList.remove('slider-active'))

		sliderServiceElems[idx].classList.add('slider-active')
		
	}))


/** Слайдер для секции testimonials */
	
const sliderTestimonials = document.querySelector('.testimnials__wrapper');

	 let isDragging = false;
	 let startPosition = 0;
	 let currentTranslate = 0;
	 let previousTranslate = 0;
	 
	 sliderTestimonials.addEventListener('mousedown', dragStart);
	 sliderTestimonials.addEventListener('touchstart', dragStart);
	 
	 sliderTestimonials.addEventListener('mousemove', drag);
	 sliderTestimonials.addEventListener('touchmove', drag);
	 
	 sliderTestimonials.addEventListener('mouseup', dragEnd);
	 sliderTestimonials.addEventListener('touchend', dragEnd);
	 
	 sliderTestimonials.addEventListener('mouseleave', dragEnd);
	 sliderTestimonials.addEventListener('touchcancel', dragEnd);
	 
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
		sliderTestimonials.style.transform = `translateX(${currentTranslate}px)`;
	 }

/** Слайдер для секции portfolio */

const sliderPortfolioContainer = document.querySelector('.portfolio__examples-block')
const sliderPortfolioElems = document.querySelectorAll('.portfolio .slider .slider__elem')
const portfolioItem = document.querySelector('.portfolio__examples')
let sliderPortfolioLenght

sliderPortfolioElems.forEach((elem,idx) => 
	elem.addEventListener('click', ()=> {

		sliderPortfolioLenght = portfolioItem.getBoundingClientRect().width

		const flexGap = 25.5

		sliderPortfolioContainer.style.transform = `translateX(-${ (sliderPortfolioLenght + flexGap) * idx}px)`;
		
		sliderPortfolioElems.forEach(item => item.classList.remove('slider-active'))

		sliderPortfolioElems[idx].classList.add('slider-active')
		
	}))


		/** Обнуление слайдеров при изменении ширины окна */


		window.addEventListener('resize', () => {
			sliderServiceElems.forEach(item => item.classList.remove('slider-active'))
			sliderServiceElems[0].classList.add('slider-active')
			sliderServiceContainer.style.transform = null;

			sliderPortfolioElems.forEach(item => item.classList.remove('slider-active'))
			sliderPortfolioElems[0].classList.add('slider-active')
			sliderPortfolioContainer.style.transform = null;

			sliderTestimonials.style.transform = null;
	
			if(window.innerWidth > 1250) {
				sliderTestimonials.style.transform = `transform: translateX(-33%)`;
			}
		 });