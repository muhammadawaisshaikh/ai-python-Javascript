export interface IQuizQuestion {
    question: []
}

export interface IQuiz {
    title: string,
    instructions: string,
    questions: IQuizQuestion[]
}
