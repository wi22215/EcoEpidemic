class QuestionTemplate {
    constructor(questionText, answerOptions, correctAnswer, htmlContent) {
        this._questionText = questionText;
        this._answerOptions = answerOptions;
        this._correctAnswer = correctAnswer;
        this._htmlContent = htmlContent;
    }

    get questionText() {
        return this._questionText;
    }

    set questionText(value) {
        this._questionText = value;
    }

    get answerOptions() {
        return this._answerOptions;
    }

    set answerOptions(value) {
        this._answerOptions = value;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    set correctAnswer(value) {
        this._correctAnswer = value;
    }

    get htmlContent() {
        return this._htmlContent;
    }

    set htmlContent(value) {
        this._htmlContent = value;
    }
}
