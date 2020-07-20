const { default: Option } = require("./Option");

export default class Lizard extends Option {
    constructor() {
        super("lizard", ["spock", "paper"], ["poisons", "eats"]);
    }
};