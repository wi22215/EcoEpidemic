class ContentTemplate {
    constructor(theme, htmlContent, index, css) {
        this._theme = theme;
        this._htmlContent = htmlContent;
        this._index = index;
        this.style = css;
    }

    setStyle(css) {
        this.style = css;
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

    generateHTMLByCSSPath(){
        return `<head>
        <link rel="stylesheet" type="text/css" href="${this.style}">
        </head>
        <body>
            <div id="content${this.theme}">
              ${this.htmlContent}
            </div>
        </body>`;
    }

    generateHTML() {
        return `<div id="content${this.theme}" class="" style="${this.style}">
              ${this.htmlContent}
            </div>`;
    }
}

