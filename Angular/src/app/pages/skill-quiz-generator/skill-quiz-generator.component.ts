import { Component } from '@angular/core';
import { GeneratedQuizComponent } from './generated-quiz/generated-quiz.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GeminiGoogleAiService } from '../../services/gemini-google-ai/gemini-google-ai.service';
import { QuizRecipeHelperService } from '../../helpers/quiz-recipe-helper.service';

@Component({
  selector: 'app-skill-quiz-generator',
  standalone: true,
  imports: [GeneratedQuizComponent, ReactiveFormsModule],
  templateUrl: './skill-quiz-generator.component.html',
  styleUrl: './skill-quiz-generator.component.scss'
})
export class SkillQuizGeneratorComponent {
  candidateForm!: FormGroup;
  technologies = ['Angular', 'React', 'JavaScript', 'TypeScript', 'Python', 'Java'];
  formattedQuizResponse: any = null;

  constructor(private fb: FormBuilder, private geminiService: GeminiGoogleAiService, private quizHelperService: QuizRecipeHelperService) {
    this.formInit();
  }

  formInit() {
    this.candidateForm = this.fb.group({
      candidateName: ['', Validators.required],
      technology: ['', Validators.required],
      questionsLength: [5, [Validators.required, Validators.min(5)]]
    });
  }

  hasError(controlName: string, errorNames: string[]) {
    const control = this.candidateForm.get(controlName);
    return control && control.touched && errorNames.some(errorName => control.hasError(errorName));
  }

  onSubmit() {
    if (this.candidateForm.valid) {
      console.log('Form Submitted', this.candidateForm.value);

      const prompt: string = `Generate a technical skill quiz for a candidate named ${this.candidateForm.value.candidateName} who specializes in ${this.candidateForm.value.technology}. The quiz should be tailored to the candidate's proficiency level, aiming for a balanced mix of ${this.candidateForm.value.questionsLength} questions that assess both foundational knowledge and practical application, just return questions strings`;

      this.geminiService.askGemini(prompt).then(
        (res: any) => {
          const formattedResponse = this.quizHelperService.formatAiReponseQuizString(res);
          this.formattedQuizResponse = formattedResponse;
        },
        (error: Error) => {
          console.error(error);
        }
      )
    } else {
      console.log('Form is invalid');
    }
  }
}
