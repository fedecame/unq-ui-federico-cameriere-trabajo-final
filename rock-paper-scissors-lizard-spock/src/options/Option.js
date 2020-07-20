export default class Option {
    constructor(value, defeatableOptions, defeatableMessages, image = null, imgClasses = "", contClasses = "") {
        this._value = value;
        this._defeatableOptions = defeatableOptions;
        this._defeatableMessages = defeatableMessages;
        this._image = image;
        this._imageClasses = imgClasses;
        this._containerClasses = contClasses;
    }

    get value() {return this._value};
    get defeatableOptions() {return this._defeatableOptions};
    get defeatableMessages() {return this._defeatableMessages};
    get image() {return this._image};
    get imageClasses() {return this._imageClasses};
    get containerClasses() {return this._containerClasses};

    set defeatableOptions(newDefeatables) {return this._defeatableOptions = newDefeatables};
    set defeatableMessages(newDefeatableMessages) {return this._defeatableMessages = newDefeatableMessages};
    set image(newImage) {return this._image = newImage};
    set imageClasses(newImageClasses) {return this._imageClasses = newImageClasses};
    set containerClasses(newContainerClasses) {return this._containerClasses = newContainerClasses};

    defeats(optionValue) {
        return this.defeatableOptions.includes(optionValue);
    }

    getDefeatMessage(optionValue) {
        const optionIndex = this.defeatableOptions.indexOf(optionValue);
        let msg = optionIndex >= 0 ? this.defeatableMessages[optionIndex] : "";
        return msg;
    }
};