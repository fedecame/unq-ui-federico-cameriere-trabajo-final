const { default: Option } = require("./Option");

export default class Scissors extends Option {
    constructor(image, icon, imgClasses, contClasses) {
        super("scissors", ["paper", "lizard"], ["cuts", "decapitates"], image, icon, imgClasses, contClasses);
    }
};