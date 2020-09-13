define("ModuleOne", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ModuleOne = void 0;
    var ModuleOne = (function () {
        function ModuleOne() {
            console.log('Starting ModuleOne ...');
        }
        return ModuleOne;
    }());
    exports.ModuleOne = ModuleOne;
});
define("Main", ["require", "exports", "ModuleOne"], function (require, exports, ModuleOne_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = (function () {
        function Main() {
        }
        Main.run = function () {
            console.log('; Starting main ...');
            new ModuleOne_1.ModuleOne();
            console.log('; ... stopping main');
        };
        return Main;
    }());
    Main.run();
});
