var __webpack_modules__ = [
  /* 0 */
  (module, __unused_webpack_exports, __webpack_require__) => {
    const argv = (__webpack_require__(1).argv);
    const assert = __webpack_require__(2);
    const sum = __webpack_require__(3);
    const args = {
      a: 4,
      b: 8
    };
    assert.equal(typeof sum, 'function');
    assert.equal(sum(args.a, args.b), 12);
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

    module.exports.test = function test() {
      console.log([
        'The sum of',
        args.a,
        'and',
        args.b,
        'is',
        sum(args.a, args.b)
      ].join(' '));
    };
  },
  /* 1 */
  (module) => {
    "use strict";
    module.exports = require("process");
  },
  /* 2 */
  (module) => {
    "use strict";
    module.exports = require("assert");
  },
  /* 3 */
  (module) => {
    module.exports = function sum(a, b) {
      return a + b
    }
  },
]

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

// startup
// Load entry module and return exports
// This entry module used 'module' so it can't be inlined
var __webpack_exports__ = __webpack_require__(0);
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

