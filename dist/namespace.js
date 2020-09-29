import { Controller } from "./controller";
var controller = new Controller;
export default {
    get supported() {
        return Controller.supported;
    },
    controller: controller,
    visit: function (location, options) {
        controller.visit(location, options);
    },
    clearCache: function () {
        controller.clearCache();
    },
    setProgressBarDelay: function (delay) {
        controller.setProgressBarDelay(delay);
    },
    setRootSelector: function (selector) {
        controller.setRootSelector(selector);
    },
    start: function () {
        controller.start();
    }
};
//# sourceMappingURL=namespace.js.map