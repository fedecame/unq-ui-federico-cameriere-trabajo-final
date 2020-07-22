const { default: Option } = require("./Option");

export default class Rock extends Option {
    constructor(image, icon, imgClasses, contClasses) {
        super("rock", ["lizard", "scissors"], ["crushes", "crushes"], image, icon, imgClasses, contClasses);
    }
};