class QuizTemplate {
    set index(value) {
        this._index = value;
    }

    constructor() {
        this._questions = new Map();
    }

    addQuestion(key, question) {
        this._questions.set(key, question);
    }

    get index(){
        return this._index;
    }

    get questions() {
        return this._questions;
    }

    getQuestionOfMap(key){
        if (this._questions.has(key)) {
            return this._questions.get(key);
        } else {
            return "Bei getQuestionOfMap(key) in QuizTemplate: Question mit dem Key nicht gefunden"; // Schlüssel nicht gefunden
        }
    }
}
