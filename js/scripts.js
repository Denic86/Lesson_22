// Custom Scripts
// Custom scripts
;
const swiper_1 = new Swiper('.start__slider', {
    // If we need pagination
    pagination: {
		el: '.slider-start__bullets',
		type: 'bullets',
    },
  
    // Navigation arrows
    navigation: {
		nextEl: '.arrow__swiper-button-next',
		prevEl: '.arrow__swiper-button-prev',
		// hideOnClick: true,

    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
	// Начальный слайд
	initialSlide: 1,
	// циклическое переключение
	loop: true,
	// Переключение во время перехода
	loopPreventsSlide: false,
	// При включении Swiper принудительно загрузит все изображения
	preloadImages: true,
	// slideActiveClass - активный слайд; .swiper-slide-active - CSS class
	// Количество слайдов на просмотр
	slidesPerView: 1.2,
	// Distance between slides in px.
		spaceBetween: 32,
		
	// when window width is >= 1170px
		breakpoints: {
    
			1170: {
				slidesPerView: 1.5,
			},
		},
	// Групповое скольжение
	// slidesPerGroup: 3,
	// Скорость
	speed: 300,
	// Пороговое значение в пикселях. Если "расстояние касания" будет меньше этого значения, то swiper не будет перемещаться
	threshold: 10,
	// 
	touchMoveStopPropagation: true,
	// При включении Swiper будет отключен и скроет кнопки навигации на случай, если слайдов недостаточно для скольжения. !!Работает с loop
	watchOverflow: false,
	// Центрирование слайдов
	centeredSlidesBounds: true,
	centeredSlides: true,
	





  //   // Responsive breakpoints
  //   breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 3,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 3,
  //     spaceBetween: 30
  //   },
  // }
});


// let trans = document.querySelector('.slider-start__wrapper');
// console.log(trans);
// // 
// console.log(trans.style.transform);
// // trN = ;
// console.log(swiper.getTranslate());
// let trN = swiper.getTranslate();
// console.log(trN);
// // swiper.getTranslate() + 1330
// trans.style.transform = trN + 1330
// console.log(trans.style.transform);
const swiper_2 = new Swiper ('.slider-rooms', {
	
	// If we need pagination
	pagination: {
		el: '.slider-rooms__bullets',
		type: 'bullets',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.slider-rooms__button-next',
		prevEl: '.slider-rooms__button-prev',
		// hideOnClick: true,
	},
	breakpoints: {

		520: {
			slidesPerView: 2.3,
		},
	},
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
});
// let slN = document.querySelectorAll('.swiper-slide-next');
// console.log(slN)
// let slN_1 = slN[1];
// console.log(slN_1);
// let block = slN_1.firstChild;
// console.log(block);
// console.log(block.clientHeight);
// slN[2].style.



// адаптив pagination
// let slN = document.querySelectorAll('.swiper-slide-next');
// let slN_1 = slN[1];
// console.log(slN_1);
// console.log(slN_1.firstElementChild.clientHeight)
// let topB = slN_1.firstElementChild.clientHeight;
// let pagin = document.querySelector('.slider-rooms__pagination');
// console.log(pagin.style);



// window.addEventListener('resize', pagRooms);

// if (window.innerWidth > 768) {
// 	pagin.style.top = slN_1.firstElementChild.clientHeight + 15 + "px"
// }




// function pagRooms() {
// 	if (window.innerWidth > 768) {
// 	pagin.style.top = slN_1.firstElementChild.clientHeight + 15 + "px"
// } else {
// 	pagin.style.top = 0 +"px"
// }
// }
// pagin.style.backgroundColor = 'blue';


const Swiper_3 = new Swiper ('.slider-tips', {
	pagination: {
		el: '.slider-tips__bullet',
		type: 'bullets',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.slider-tips__button-next',
		prevEl: '.slider-tips__button-prev',
		// hideOnClick: true,

	},
	// wrapperClass: "slider-tips__wrapper",
	// slideClass: "slider-tips__slide",
	initialSlide: 1,
	// loop: true,
	breakpoints: {
		520: {
			slidesPerView: 2,
		},
		768: {
		slidesPerView: 3,
		}
	},
	spaceBetween: 32,
	initialSlide: 1,
	// centeredSlidesBounds: true,
	centeredSlides: true,
	
	



});
// типо бургер
let menuMobil = document.querySelector('.menu__mobil');
let menuList = document.querySelector(".menu__list");
let menuMobilRotate = document.querySelector(".-rotate");
menuMobil.addEventListener ("click", menuBlock);
menuList.classList.remove("-active");
menuMobilRotate.classList.remove("-rotate")
function menuBlock() {
	menuList.classList.toggle ("-active"),
	menuMobilRotate.classList.toggle ("-rotate");
};
// клонируем избранное и корзину
if (document.documentElement.clientWidth < 992) {
let like = document.querySelector('.personal__like');
let cart = document.querySelector('.personal__cart');
let cartClone = cart.cloneNode(true);
let likeClone = like.cloneNode(true);
cartClone.innerHTML = "Корзина";
likeClone.innerHTML = "Избранное";
likeClone.classList.add("lk__link");
cartClone.classList.add("lk__link");
likeClone.style.display = "block";
cartClone.style.display = "block";
likeClone.style.margin = "5px";
cartClone.style.margin = "5px"
let lkList = document.querySelector(".lk__list");
lkList.insertAdjacentElement(
	"beforeend",
	cartClone,
);
lkList.insertAdjacentElement(
	"beforeend",
	likeClone,
);
cart.remove();
like.remove();
};



// footer click
let fClick = document.querySelectorAll('.footer__forJS');
fClick.forEach(element => {
	element.addEventListener('click', function() {
		let ulActive = document.querySelector('.footer__sublist.-active');
		console.log (ulActive);
		let spanActive = document.querySelector('.footer__forJS.-active');
		console.log (spanActive);
		if (ulActive && spanActive) {
		ulActive.classList.remove ('-active');
		spanActive.classList.remove ('-active');
	}
		element.nextElementSibling.classList.toggle ('-active');
		element.classList.toggle ('-active');
		})
	
});

