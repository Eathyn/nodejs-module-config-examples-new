import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "module";
var __webpack_modules__ = ([
	/* 0 */,
	/* 1 */
	((module) => {
		module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("process");
	}),
	/* 2 */
	((module) => {
		module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)("assert");
	}),
	/* 3 */
	((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
		__webpack_require__.r(__webpack_exports__);
		__webpack_require__.d(__webpack_exports__, {
			"default": () => (/* binding */ sum)
		});
		function sum(a, b) { return a + b }
	}),
]);

var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
	var cachedModule = __webpack_module_cache__[moduleId];
	if (cachedModule !== undefined) {
		return cachedModule.exports;
	}
	var module = __webpack_module_cache__[moduleId] = {
		exports: {}
	};
	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	return module.exports;
}

/* webpack/runtime/define property getters */
(() => {
	// define getter functions for harmony exports
	__webpack_require__.d = (exports, definition) => {
		for(var key in definition) {
			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
			}
		}
	};
})();

/* webpack/runtime/hasOwnProperty shorthand */
(() => {
	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();

/* webpack/runtime/make namespace object */
(() => {
	// define __esModule on exports
	__webpack_require__.r = (exports) => {
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};
})();

var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
	__webpack_require__.r(__webpack_exports__);
	__webpack_require__.d(__webpack_exports__, {
		test: () => (/* binding */ test)
	});
	var process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
	var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
	var _sum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

	const argv = process__WEBPACK_IMPORTED_MODULE_0__.argv;
	const args = {
		a: 4,
		b: 8
	};

	assert__WEBPACK_IMPORTED_MODULE_1__.equal(typeof _sum_js__WEBPACK_IMPORTED_MODULE_2__["default"], 'function');
	assert__WEBPACK_IMPORTED_MODULE_1__.equal((0,_sum_js__WEBPACK_IMPORTED_MODULE_2__["default"])(args.a, args.b), 12);

	for (
		let i = 2,
			count = argv.length;
		i < count;
		i++
	) {
		const match = argv[i].match(/--(.+)=(.+)/);
		const key = match[1];
		const val = +match[2];

		args[key] = val;
	}

	function test() {
		console.log([
			'The sum of',
			args.a,
			'and',
			args.b,
			'is',
			(0,_sum_js__WEBPACK_IMPORTED_MODULE_2__["default"])(args.a, args.b)
		].join(' '));
	}
})();

var __webpack_exports__test = __webpack_exports__.test;
export { __webpack_exports__test as test };
