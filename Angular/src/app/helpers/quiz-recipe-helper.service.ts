import { Injectable } from '@angular/core';
import { IQuiz, IQuizQuestion } from '../interfaces/iquiz';

@Injectable({
  providedIn: 'root'
})
export class QuizRecipeHelperService {

  formatAiReponseQuizString(quizString: string): IQuiz {
    const quizData: IQuiz = {
      title: '',
      instructions: '',
      questions: []
    };

    // Split the string by double new lines to separate sections
    const sections: string[] = quizString.split(/\n\s*\n/);

    // Extract title
    quizData.title = sections[0].replace('## ', '').trim();

    // Extract instructions
    const instructionSection = sections[1]?.trim();
    if (instructionSection?.startsWith('**Instructions:**')) {
      quizData.instructions = instructionSection.replace('**Instructions:**', '').trim();
    }

    // Extract questions
    const questionSections = sections.slice(2); // All questions are after the first two sections

    questionSections.forEach((section: string) => {
      const lines: string[] = section.split('\n').map((line: string) => line.trim()).filter((line: string) => line.length > 0);
      const mainQuestion: string = lines[0].replace(/^\d+\.\s*/, '').trim();

      const quizQuestion: IQuizQuestion = {
        question: mainQuestion
      };

      quizData.questions.push(quizQuestion);
    });

    return quizData;
  }
}
