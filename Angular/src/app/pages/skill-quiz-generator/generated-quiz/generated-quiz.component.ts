import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IQuiz } from '../../../interfaces/iquiz';

@Component({
  selector: 'app-generated-quiz',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './generated-quiz.component.html',
  styleUrl: './generated-quiz.component.scss'
})
export class GeneratedQuizComponent {
  @Input() quiz: IQuiz = {
    title: '',
    instructions: '',
    questions: []
  };
  quizForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initQuizForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['quiz'] && this.quiz.questions) {
      this.generateQuizForm();
    }
  }

  initQuizForm() {
    this.quizForm = this.fb.group({
      answers: this.fb.array([])
    });
  }

  generateQuizForm() {
    const answersArray = this.fb.array(this.quiz.questions.map(() => this.fb.control('', Validators.required)));
    this.quizForm.setControl('answers', answersArray);
  }

  onSubmit() {
    if (this.quizForm.valid) {
      console.log(this.quizForm.value);
      // TODO: Handle form submission logic here
    }
  }

  hasError(controlIndex: number): boolean {
    const control = this.quizForm.get('answers')?.get(`${controlIndex}`);
    return !!(control?.invalid || control?.touched);
  }
}
