class ContentTemplate {
    constructor(theme, htmlContent, index) {
        this._theme = theme;
        this._htmlContent = htmlContent;
        this._index = index;
    }

    get theme() {
        return this._theme;
    }

    set theme(newTheme) {
        this._theme = newTheme;
    }

    get htmlContent() {
        return this._htmlContent;
    }

    set htmlContent(newHtmlContent) {
        this._htmlContent = newHtmlContent;
    }

    get index() {
        return this._index;
    }

    set index(newIndex) {
        this._index = newIndex;
    }

    function
    showItself(){
        createTextPopup(this.theme, 600, 400);
    }
}
