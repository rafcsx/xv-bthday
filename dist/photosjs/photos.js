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

/***/ "./xv-bthday-photos-main/Photostyles.css":
/*!***********************************************!*\
  !*** ./xv-bthday-photos-main/Photostyles.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-photos-main/Photostyles.css?");

/***/ }),

/***/ "./xv-bthday-photos-main/Photoscript.js":
/*!**********************************************!*\
  !*** ./xv-bthday-photos-main/Photoscript.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Photostyles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Photostyles.css */ \"./xv-bthday-photos-main/Photostyles.css\");\n\n\n\n/*NAVBAR*/\ndocument.addEventListener('DOMContentLoaded', function () {\n    const menuToggle = document.getElementById('menu-toggle');\n    const navMenu = document.getElementById('nav-menu');\n\n    menuToggle.addEventListener('click', function () {\n        if (navMenu.style.display === 'block') {\n            navMenu.style.display = 'none';\n        } else {\n            navMenu.style.display = 'block';\n        }\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const navbarToggler = document.getElementById('navbar-toggler');\n    const navbarCollapse = document.getElementById('responsive-navbar-nav');\n\n    navbarToggler.addEventListener('click', () => {\n        navbarToggler.classList.toggle('collapsed');\n        navbarCollapse.classList.toggle('show');\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    const navbar = document.querySelector('.navbar'); // Seleciona o elemento do navbar\n    const scrollThreshold = 50; // Define o ponto onde o navbar muda (em pixels)\n\n    function handleScroll() {\n        if (window.scrollY > scrollThreshold) {\n            navbar.classList.add('navbar-scrolled'); // Adiciona a classe quando rola para baixo\n        } else {\n            navbar.classList.remove('navbar-scrolled'); // Remove a classe quando volta ao topo\n        }\n    }\n\n    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll ao window\n});\n\n// Função para criar e adicionar estrelas\nfunction createStarsAndCosmicElements() {\n    const numStars = 50; // Reduzido para 50 estrelas\n    const starsContainer = document.createElement('div');\n    starsContainer.className = 'stars';\n    starsContainer.style.zIndex = '0'; // Mantém os ícones cósmicos atrás do campo de agradecimento\n\n    for (let i = 0; i < numStars; i++) {\n        const star = document.createElement('div');\n        star.className = 'star';\n\n        const size = Math.random() * 3 + 1;\n        const left = Math.random() * 100;\n        const top = Math.random() * 100;\n\n        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';\n        star.style.backgroundColor = color;\n\n        star.style.width = `${size}px`;\n        star.style.height = `${size}px`;\n        star.style.left = `${left}%`;\n        star.style.top = `${top}%`;\n\n        starsContainer.appendChild(star);\n    }\n\n    // Adicionar ícones do Font Awesome\n    const cosmicIcons = [\n    ];\n\n    cosmicIcons.forEach(iconClass => {\n        const icon = document.createElement('i');\n        icon.className = `fas ${iconClass}`;\n        icon.style.position = 'absolute';\n        icon.style.fontSize = `${Math.random() * 20 + 20}px`; // Tamanho variável entre 20px e 40px\n        icon.style.color = '#FE59BB'; // Cor do ícone\n        icon.style.left = `${Math.random() * 100}%`;\n        icon.style.top = `${Math.random() * 100}%`;\n        icon.style.transform = 'rotate(45deg)';\n        icon.style.zIndex = '0'; // Define que esses ícones devem ficar atrás do campo de agradecimento\n\n        starsContainer.appendChild(icon);\n    });\n\n  \n\n    document.body.appendChild(starsContainer);\n}\n\ncreateStarsAndCosmicElements();\n\n\n/* photo album */ \ndocument.addEventListener('DOMContentLoaded', function() {\n    const photos = document.querySelectorAll('.photo-item img');\n    const imageViewer = document.createElement('div');\n    imageViewer.className = 'image-viewer';\n    document.body.appendChild(imageViewer);\n\n    const imageViewerClose = document.createElement('div');\n    imageViewerClose.className = 'image-viewer-close';\n    imageViewerClose.innerHTML = '&times;';\n    imageViewer.appendChild(imageViewerClose);\n\n    const imageViewerContent = document.createElement('img');\n    imageViewer.appendChild(imageViewerContent);\n\n    const zoomControls = document.createElement('div');\n    zoomControls.className = 'zoom-controls';\n    imageViewer.appendChild(zoomControls);\n\n    const zoomInButton = document.createElement('button');\n    zoomInButton.className = 'zoom-btn';\n    zoomInButton.innerHTML = '+';\n    zoomControls.appendChild(zoomInButton);\n\n    const zoomOutButton = document.createElement('button');\n    zoomOutButton.className = 'zoom-btn';\n    zoomOutButton.innerHTML = '-';\n    zoomControls.appendChild(zoomOutButton);\n\n    let zoomLevel = 1;\n\n    zoomInButton.addEventListener('click', function() {\n        zoomLevel += 0.1;\n        if (zoomLevel > 3) zoomLevel = 3; // Limite de zoom máximo\n        imageViewerContent.style.transform = `scale(${zoomLevel})`;\n    });\n\n    zoomOutButton.addEventListener('click', function() {\n        zoomLevel -= 0.1;\n        if (zoomLevel < 1) zoomLevel = 1; // Limite de zoom mínimo\n        imageViewerContent.style.transform = `scale(${zoomLevel})`;\n    });\n\n    photos.forEach(photo => {\n        photo.addEventListener('click', function() {\n            imageViewerContent.src = this.src; // Define a imagem no visualizador\n            imageViewer.style.display = 'flex'; // Exibe a seção de visualização\n            zoomLevel = 1; // Redefine o nível de zoom ao abrir uma nova imagem\n            imageViewerContent.style.transform = `scale(${zoomLevel})`;\n        });\n    });\n\n    imageViewerClose.addEventListener('click', function() {\n        imageViewer.style.display = 'none'; // Oculta a seção de visualização\n    });\n\n    imageViewer.addEventListener('click', function(e) {\n        if (e.target === imageViewer) {\n            imageViewer.style.display = 'none'; // Fecha se clicar fora da imagem\n        }\n    });\n});\n\n/* setas */ \ndocument.addEventListener('DOMContentLoaded', function() {\n    const slideContainer = document.querySelector('.photo-slide');\n    const slides = document.querySelectorAll('.photo-slide img');\n    const prevButton = document.querySelector('.arrow.prev');\n    const nextButton = document.querySelector('.arrow.next');\n    let currentIndex = 0;\n    const totalSlides = slides.length;\n\n    function showSlide(index) {\n        if (index >= totalSlides) {\n            currentIndex = 0;\n        } else if (index < 0) {\n            currentIndex = totalSlides - 1;\n        } else {\n            currentIndex = index;\n        }\n        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;\n    }\n\n    prevButton.addEventListener('click', function() {\n        showSlide(currentIndex - 1);\n    });\n\n    nextButton.addEventListener('click', function() {\n        showSlide(currentIndex + 1);\n    });\n\n    // Touch support\n    let startX = 0;\n    let endX = 0;\n\n    slideContainer.addEventListener('touchstart', function(e) {\n        startX = e.touches[0].clientX;\n    });\n\n    slideContainer.addEventListener('touchend', function(e) {\n        endX = e.changedTouches[0].clientX;\n        if (startX > endX + 50) {\n            showSlide(currentIndex + 1);\n        } else if (startX < endX - 50) {\n            showSlide(currentIndex - 1);\n        }\n    });\n});\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const modal = document.getElementById('photo-modal');\n    const modalImage = document.getElementById('modal-image');\n    const zoomInButton = document.getElementById('zoom-in');\n    const zoomOutButton = document.getElementById('zoom-out');\n\n    // Mostrar o modal ao clicar na foto\n    document.querySelectorAll('.photo-gallery img').forEach(img => {\n        img.addEventListener('click', function() {\n            modal.style.display = 'flex';\n            setTimeout(() => {\n                modal.classList.add('show'); // Adiciona a classe para a transição\n            }, 10);\n            modalImage.src = this.src; // Definindo a imagem do modal para a imagem clicada\n        });\n    });\n\n    // Fechar o modal ao clicar fora da imagem\n    modal.addEventListener('click', function(e) {\n        if (e.target === modal) {\n            modal.classList.remove('show'); // Remove a classe para a transição\n            setTimeout(() => {\n                modal.style.display = 'none';\n            }, 300); // Tempo igual ao da transição\n        }\n    });\n\n    // Zoom com scroll do mouse\n    let scale = 1;\n    modalImage.addEventListener('wheel', function(e) {\n        e.preventDefault();\n        const zoomSpeed = 0.1;\n        if (e.deltaY < 0) {\n            scale += zoomSpeed; // Zoom in\n        } else {\n            scale -= zoomSpeed; // Zoom out\n            if (scale < 1) scale = 1; // Não permitir zoom out além do tamanho original\n        }\n        modalImage.style.transform = `scale(${scale})`;\n    });\n\n    // Zoom in e out com botões\n    zoomInButton.addEventListener('click', function() {\n        scale += 0.1;\n        modalImage.style.transform = `scale(${scale})`;\n    });\n\n    zoomOutButton.addEventListener('click', function() {\n        scale -= 0.1;\n        if (scale < 1) scale = 1;\n        modalImage.style.transform = `scale(${scale})`;\n    });\n});\n\n//# sourceURL=webpack://xv-soph/./xv-bthday-photos-main/Photoscript.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./xv-bthday-photos-main/Photoscript.js");
/******/ 	
/******/ })()
;