class VideoTemplate {

    constructor(theme, path, index) {
        this._theme = theme;
        this._path = path;
        this._index = index;
    }
    get theme() {
        return this._theme;
    }

    set theme(value) {
        this._theme = value;
    }

    get path() {
        return this._path;
    }

    set path(value) {
        this._path = value;
    }

    get index() {
        return this._index;
    }

    set index(value) {
        this._index = value;
    }


}
