const { default: Option } = require("./Option");

export default class Scissors extends Option {
    constructor(image, imgClasses, contClasses) {
        super("scissors", ["paper", "lizard"], ["cuts", "decapitates"], image, imgClasses, contClasses);
    }
};