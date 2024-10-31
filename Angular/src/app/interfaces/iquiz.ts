export interface IQuizQuestion {
    question: string
}

export interface IQuiz {
    title: string,
    instructions: string,
    questions: IQuizQuestion[]
}
