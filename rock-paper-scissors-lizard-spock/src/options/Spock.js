const { default: Option } = require("./Option");

export default class Spock extends Option {
    constructor(image, imgClasses, contClasses) {
        super("spock", ["scissors", "rock"], ["smashes", "vaporizes"], image, imgClasses, contClasses);
    }
};