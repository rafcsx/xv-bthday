/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./xv-bthday-mp-obrigado-main/ObrigadoMPstyles.css":
/*!*********************************************************!*\
  !*** ./xv-bthday-mp-obrigado-main/ObrigadoMPstyles.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-mp-obrigado-main/ObrigadoMPstyles.css?");

/***/ }),

/***/ "./xv-bthday-mp-obrigado-main/ObrigadoMPscript.js":
/*!********************************************************!*\
  !*** ./xv-bthday-mp-obrigado-main/ObrigadoMPscript.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ObrigadoMPstyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObrigadoMPstyles.css */ \"./xv-bthday-mp-obrigado-main/ObrigadoMPstyles.css\");\n\n\n/*NAVBAR*/\ndocument.addEventListener('DOMContentLoaded', function () {\n    const menuToggle = document.getElementById('menu-toggle');\n    const navMenu = document.getElementById('nav-menu');\n\n    menuToggle.addEventListener('click', function () {\n        if (navMenu.style.display === 'block') {\n            navMenu.style.display = 'none';\n        } else {\n            navMenu.style.display = 'block';\n        }\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const navbarToggler = document.getElementById('navbar-toggler');\n    const navbarCollapse = document.getElementById('responsive-navbar-nav');\n\n    navbarToggler.addEventListener('click', () => {\n        navbarToggler.classList.toggle('collapsed');\n        navbarCollapse.classList.toggle('show');\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const navbar = document.querySelector('.navbar'); // Seleciona o elemento do navbar\n    const scrollThreshold = 50; // Define o ponto onde o navbar muda (em pixels)\n\n    function handleScroll() {\n        if (window.scrollY > scrollThreshold) {\n            navbar.classList.add('navbar-scrolled'); // Adiciona a classe quando rola para baixo\n        } else {\n            navbar.classList.remove('navbar-scrolled'); // Remove a classe quando volta ao topo\n        }\n    }\n\n    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll ao window\n});\n\n// Função para criar e adicionar estrelas\nfunction createStarsAndCosmicElements() {\n    const numStars = 50; // Reduzido para 50 estrelas\n    const starsContainer = document.createElement('div');\n    starsContainer.className = 'stars';\n    starsContainer.style.zIndex = '0'; // Mantém os ícones cósmicos atrás do campo de agradecimento\n\n    for (let i = 0; i < numStars; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n\n        const size = Math.random() * 3 + 1;\n        const left = Math.random() * 100;\n        const top = Math.random() * 100;\n\n        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';\n        star.style.backgroundColor = color;\n\n        star.style.width = `${size}px`;\n        star.style.height = `${size}px`;\n        star.style.left = `${left}%`;\n        star.style.top = `${top}%`;\n\n        starsContainer.appendChild(star);\n    }\n\n\n    // Adicionar o ícone da lua\n    const moon = document.createElement('i');\n    moon.className = 'fas fa-moon';\n    moon.style.position = 'absolute';\n    moon.style.fontSize = '50px';\n    moon.style.color = '#FE59BB';\n    moon.style.left = '85%';\n    moon.style.top = '10%';\n    moon.style.zIndex = '0'; // A lua também deve ficar atrás\n\n    starsContainer.appendChild(moon);\n\n    document.body.appendChild(starsContainer);\n}\n\ncreateStarsAndCosmicElements();\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const meteor = document.querySelector('.meteor');\n\n    setInterval(() => {\n        const randomTop = Math.random() * 50 - 50; // Varia entre -50px e 0px\n        const randomLeft = Math.random() * 50 - 50; // Varia entre -50px e 0px\n        meteor.style.top = `${randomTop}px`;\n        meteor.style.left = `${randomLeft}px`;\n    }, 5000); // A cada 5 segundos, o meteoro muda de posição inicial\n});\n\n/* PRESENT */\ndocument.addEventListener('DOMContentLoaded', function() {\n    const giftRainContainer = document.getElementById('gift-rain');\n    let giftCount = 0; // Contador de presentes\n    const maxGifts = 20; // Número máximo de presentes fixos\n\n    function createGiftIcon() {\n        if (giftCount >= maxGifts) return; // Limita a quantidade após 8 segundos\n\n        const icon = document.createElement('i');\n        icon.classList.add('fas', 'fa-gift', 'gift');\n        icon.style.left = `${Math.random() * 100}%`;\n        icon.style.fontSize = `${Math.random() * 20 + 20}px`;\n        icon.style.animationDuration = `${Math.random() * 3 + 3}s`;\n\n        giftRainContainer.appendChild(icon);\n\n        icon.addEventListener('animationend', function() {\n            giftRainContainer.removeChild(icon);\n            giftCount--; // Diminui o contador quando o presente é removido\n        });\n\n        giftCount++; // Aumenta o contador ao criar um novo presente\n    }\n\n    // Aumenta a quantidade de presentes nos primeiros 8 segundos\n    const initialInterval = setInterval(createGiftIcon, 200);\n\n    // Após 8 segundos, diminui a criação de novos presentes\n    setTimeout(() => {\n        clearInterval(initialInterval);\n        setInterval(createGiftIcon, 1000); // Mantém uma quantidade fixa de presentes\n    }, 8000);\n});\n\n/* efeito touch gift */ \ndocument.querySelectorAll('.present').forEach(present => {\n    let offsetX, offsetY;\n    const barrier = 20; // Margem ao redor do cursor/touch para manter o presente visível\n\n    function onMouseMove(event) {\n        const containerRect = document.body.getBoundingClientRect();\n        let newX = event.pageX - offsetX;\n        let newY = event.pageY - offsetY;\n\n        // Limitar o movimento do presente para dentro da janela\n        newX = Math.max(barrier, Math.min(containerRect.width - present.offsetWidth - barrier, newX));\n        newY = Math.max(barrier, Math.min(containerRect.height - present.offsetHeight - barrier, newY));\n\n        present.style.left = `${newX}px`;\n        present.style.top = `${newY}px`;\n    }\n\n    function onTouchMove(event) {\n        const touch = event.touches[0];\n        const containerRect = document.body.getBoundingClientRect();\n        let newX = touch.pageX - offsetX;\n        let newY = touch.pageY - offsetY;\n\n        // Limitar o movimento do presente para dentro da janela\n        newX = Math.max(barrier, Math.min(containerRect.width - present.offsetWidth - barrier, newX));\n        newY = Math.max(barrier, Math.min(containerRect.height - present.offsetHeight - barrier, newY));\n\n        present.style.left = `${newX}px`;\n        present.style.top = `${newY}px`;\n    }\n\n    function onMouseDown(event) {\n        offsetX = event.clientX - present.getBoundingClientRect().left;\n        offsetY = event.clientY - present.getBoundingClientRect().top;\n        present.style.position = 'absolute';\n        present.style.zIndex = 1000; // Garante que o item arrastado fique acima dos outros\n        document.addEventListener('mousemove', onMouseMove);\n    }\n\n    function onTouchStart(event) {\n        const touch = event.touches[0];\n        offsetX = touch.clientX - present.getBoundingClientRect().left;\n        offsetY = touch.clientY - present.getBoundingClientRect().top;\n        present.style.position = 'absolute';\n        present.style.zIndex = 1000;\n        document.addEventListener('touchmove', onTouchMove);\n    }\n\n    function onMouseUp() {\n        document.removeEventListener('mousemove', onMouseMove);\n    }\n\n    function onTouchEnd() {\n        document.removeEventListener('touchmove', onTouchMove);\n    }\n\n    present.addEventListener('mousedown', onMouseDown);\n    present.addEventListener('mouseup', onMouseUp);\n    present.addEventListener('touchstart', onTouchStart);\n    present.addEventListener('touchend', onTouchEnd);\n});\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    var audio = document.getElementById('background-music');\n    audio.volume = 0.5; // Define o volume para 50% (médio)\n});\n\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-mp-obrigado-main/ObrigadoMPscript.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./xv-bthday-mp-obrigado-main/ObrigadoMPscript.js");
/******/ 	
/******/ })()
;