const { default: Option } = require("./Option");

export default class Rock extends Option {
    constructor(image, imgClasses, contClasses) {
        super("rock", ["lizard", "scissors"], ["crushes", "crushes"], image, imgClasses, contClasses);
    }
};