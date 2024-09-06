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

/***/ "./xv-bthday-presentes-main/Presentstyles.css":
/*!****************************************************!*\
  !*** ./xv-bthday-presentes-main/Presentstyles.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-presentes-main/Presentstyles.css?");

/***/ }),

/***/ "./xv-bthday-presentes-main/Presentscript.js":
/*!***************************************************!*\
  !*** ./xv-bthday-presentes-main/Presentscript.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Presentstyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Presentstyles.css */ \"./xv-bthday-presentes-main/Presentstyles.css\");\n\n\n\n/*NAVBAR*/\ndocument.addEventListener('DOMContentLoaded', function () {\n    const menuToggle = document.getElementById('menu-toggle');\n    const navMenu = document.getElementById('nav-menu');\n\n    menuToggle.addEventListener('click', function () {\n        if (navMenu.style.display === 'block') {\n            navMenu.style.display = 'none';\n        } else {\n            navMenu.style.display = 'block';\n        }\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const navbarToggler = document.getElementById('navbar-toggler');\n    const navbarCollapse = document.getElementById('responsive-navbar-nav');\n\n    navbarToggler.addEventListener('click', () => {\n        navbarToggler.classList.toggle('collapsed');\n        navbarCollapse.classList.toggle('show');\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const navbar = document.querySelector('.navbar'); // Seleciona o elemento do navbar\n    const scrollThreshold = 50; // Define o ponto onde o navbar muda (em pixels)\n\n    function handleScroll() {\n        if (window.scrollY > scrollThreshold) {\n            navbar.classList.add('navbar-scrolled'); // Adiciona a classe quando rola para baixo\n        } else {\n            navbar.classList.remove('navbar-scrolled'); // Remove a classe quando volta ao topo\n        }\n    }\n\n    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll ao window\n});\n\n// Função para criar e adicionar estrelas\nfunction createStars() {\n    const numStars = 100; // Número total de estrelas\n    const starsContainer = document.createElement('div');\n    starsContainer.className = 'stars';\n\n    for (let i = 0; i < numStars; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n\n        const size = Math.random() * 3 + 1; // Tamanho entre 1 e 4\n        const left = Math.random() * 100; // Posição horizontal (0-100%)\n        const top = Math.random() * 100; // Posição vertical (0-100%)\n\n        // Cor aleatória: 80% branco, 20% rosa (#FE59BB)\n        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';\n        star.style.backgroundColor = color;\n\n        star.style.width = `${size}px`;\n        star.style.height = `${size}px`;\n        star.style.left = `${left}%`;\n        star.style.top = `${top}%`;\n\n        starsContainer.appendChild(star);\n    }\n\n    document.body.appendChild(starsContainer);\n}\n\n// Inicializar estrelas e slide\ncreateStars();\n\n// Função para criar e adicionar estrelas e a lua\nfunction createStarsAndMoon() {\n    const numStars = 100; // Número total de estrelas\n    const starsContainer = document.createElement('div');\n    starsContainer.className = 'stars';\n\n    for (let i = 0; i < numStars; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n\n        const size = Math.random() * 3 + 1; // Tamanho entre 1 e 4\n        const left = Math.random() * 100; // Posição horizontal (0-100%)\n        const top = Math.random() * 100; // Posição vertical (0-100%)\n\n        // Cor aleatória: 80% branco, 20% rosa (#FE59BB)\n        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';\n        star.style.backgroundColor = color;\n\n        star.style.width = `${size}px`;\n        star.style.height = `${size}px`;\n        star.style.left = `${left}%`;\n        star.style.top = `${top}%`;\n\n        starsContainer.appendChild(star);\n    }\n\n    // Adiciona o ícone da lua\n    const moon = document.createElement('i');\n    moon.className = 'fas fa-moon';\n    moon.style.position = 'absolute';\n    moon.style.fontSize = '30px'; // Tamanho da lua\n    moon.style.color = '#FE59BB'; // Cor da lua\n    moon.style.left = '85%'; // Posição horizontal\n    moon.style.top = '5%'; // Posição vertical\n\n    starsContainer.appendChild(moon);\n\n    document.body.appendChild(starsContainer);\n}\n\n// Inicializar estrelas e lua\ncreateStarsAndMoon();\n\n// FILTRO DE PREÇO \ndocument.addEventListener('DOMContentLoaded', function () {\n    // Lógica para o filtro de preços\n    const priceFilter = document.getElementById('preco-filtro');\n    const items = document.querySelectorAll('.moldura');\n\n    priceFilter.addEventListener('change', function () {\n        const selectedValue = this.value.split('-');\n        const minPrice = parseFloat(selectedValue[0]);\n        const maxPrice = parseFloat(selectedValue[1]);\n\n        items.forEach(item => {\n            const itemPrice = parseFloat(item.getAttribute('data-price'));\n            if ((!isNaN(minPrice) && itemPrice < minPrice) || (!isNaN(maxPrice) && itemPrice > maxPrice)) {\n                item.style.display = 'none';\n            } else {\n                item.style.display = 'block';\n            }\n        });\n    });\n})\n\n// Função para lidar com o clique no botão de compra\nfunction comprar(btn) {\n    // Obtém o container da moldura\n    const moldura = btn.closest('.moldura');\n\n    // Seleciona o container do botão e o preço\n    const botaoContainer = moldura.querySelector('.botao-container');\n    const preco = botaoContainer.querySelector('div:not(button)');\n\n    // Remove o preço e altera o botão\n    preco.style.display = 'none'; // Oculta o preço\n    btn.classList.add('comprado'); // Aplica a classe 'comprado'\n    btn.textContent = 'Esse item já foi presenteado 🎉'; // Altera o texto do botão\n    btn.style.width = 'auto'; // Ajusta a largura do botão para o conteúdo\n}\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-presentes-main/Presentscript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./xv-bthday-presentes-main/Presentscript.js");
/******/ 	
/******/ })()
;