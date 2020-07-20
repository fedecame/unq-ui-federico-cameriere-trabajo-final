const { default: Option } = require("./Option");

export default class Paper extends Option {
    constructor(image, imgClasses, contClasses) {
        super("paper", ["rock", "spock"], ["covers", "disproves"], image, imgClasses, contClasses);
    }
};