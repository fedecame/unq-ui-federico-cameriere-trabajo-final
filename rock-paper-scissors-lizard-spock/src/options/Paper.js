const { default: Option } = require("./Option");

export default class Paper extends Option {
    constructor(image, icon, imgClasses, contClasses) {
        super("paper", ["rock", "spock"], ["covers", "disproves"], image, icon, imgClasses, contClasses);
    }
};