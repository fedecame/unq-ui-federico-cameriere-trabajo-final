const { default: Option } = require("./Option");

export default class Spock extends Option {
    constructor(image, icon, imgClasses, contClasses) {
        super("spock", ["scissors", "rock"], ["smashes", "vaporizes"], image, icon, imgClasses, contClasses);
    }
};