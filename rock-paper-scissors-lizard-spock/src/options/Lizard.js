const { default: Option } = require("./Option");

export default class Lizard extends Option {
    constructor(image, imgClasses, contClasses) {
        super("lizard", ["spock", "paper"], ["poisons", "eats"], image, imgClasses, contClasses);
    }
};