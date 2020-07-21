const { default: Option } = require("./Option");

export default class Lizard extends Option {
    constructor(image, icon, imgClasses, contClasses) {
        super("lizard", ["spock", "paper"], ["poisons", "eats"], image, icon, imgClasses, contClasses);
    }
};