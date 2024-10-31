import { Injectable } from '@angular/core';
import { IQuiz } from '../interfaces/iquiz';

@Injectable({
  providedIn: 'root'
})
export class QuizRecipeHelperService {

  formatAiReponseQuizString(quizString: any) {
    const quizData: IQuiz = {
      title: '',
      instructions: '',
      questions: []
    };

    // Split the string by double new lines to separate sections
    const sections = quizString.split(/\n\s*\n/);

    // Extract title
    quizData.title = sections[0].replace('## ', '').trim();

    // Extract instructions
    const instructionSection = sections[1].trim();
    if (instructionSection.startsWith('**Instructions:**')) {
      quizData.instructions = instructionSection.replace('**Instructions:**', '').trim();
    }

    // Extract questions
    const questionSections = sections.slice(2); // All questions are after the first two sections

    questionSections.forEach((section: any, index: number) => {
      const lines = section.split('\n').map((line: any) => line.trim()).filter((line: any) => line.length > 0);

      const mainQuestion = lines[0].replace(/^\d+\.\s*/, '').trim();

      quizData.questions.push({
        question: mainQuestion
      });
    });

    return quizData;
  }
}
